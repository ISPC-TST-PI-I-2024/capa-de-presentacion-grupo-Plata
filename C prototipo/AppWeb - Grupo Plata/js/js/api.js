const apiKey = 'plata';
const apiUrl = 'http://api.gonaiot.com/plata';

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
