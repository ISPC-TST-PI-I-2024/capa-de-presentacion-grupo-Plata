import { login, checkProtectedPage } from './services/auth.js';
import { fetchSensorData } from './controllers/sensorController.js';
import { setAlertConfig } from './controllers/alertController.js';

document.addEventListener('DOMContentLoaded', () => {
    fetchSensorData();
    checkProtectedPage();

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            login(email, password);
        });
    }

    const alertForm = document.getElementById('alert-settings');
    if (alertForm) {
        alertForm.addEventListener('submit', function(event) {
            event.preventDefault();
            setAlertConfig();
        });
    }
});
