import { fetchData } from 'api.js';

async function login(email, password) {
    try {
        const data = await fetchData('/usuarios', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });

        if (data.access_token) {
            localStorage.setItem('access_token', data.access_token);
            window.location.href = 'user_panel.html';
        } else {
            throw new Error(data.error || 'Error en la autenticación');
        }
    } catch (error) {
        console.error('Error en la autenticación:', error);
        document.getElementById('error-message').textContent = error.message || 'Error en la conexión';
        document.getElementById('error-message').style.display = 'block';
    }
}

async function checkProtectedPage() {
    const token = localStorage.getItem('access_token');
    if (!token) {
        alert("Por favor, inicie sesión primero.");
        window.location.href = 'login.html';
        return;
    }

    try {
        const response = await fetchData('/protected', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!response.ok) throw new Error('Sesión expirada.');
    } catch (error) {
        localStorage.removeItem('access_token');
        window.location.href = 'login.html';
    }
}

export { login, checkProtectedPage };
