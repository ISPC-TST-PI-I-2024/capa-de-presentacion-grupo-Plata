const apiKey = 'plata';
const apiUrl = '192.168.0.67:5000';

async function fetchData(endpoint, options = {}) {
    const response = await fetch(`${apiUrl}${endpoint}`, {
        headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json',
            ...options.headers
        },
        ...options
    });
    return response.json();
}

export { fetchData };
