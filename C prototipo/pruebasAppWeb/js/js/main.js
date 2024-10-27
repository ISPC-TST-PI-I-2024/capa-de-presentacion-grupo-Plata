document.addEventListener("DOMContentLoaded", function() {
    configurarLogin();  // Nuevo: Configurar el proceso de login
    cargarDatosSimulados();
    configurarAlertas();
    agregarEventosEquipo();
});

// Simulación de login
function configurarLogin() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevenir el envío del formulario por defecto

            // Credenciales simuladas
            const validEmail = 'usuario@ejemplo.com';
            const validPassword = '123456';

            // Obtener los valores ingresados por el usuario
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Verificar las credenciales
            if (email === validEmail && password === validPassword) {
                // Redirigir a perfilUser.html si las credenciales son correctas
                window.location.href = 'perfilUser.html';
            } else {
                // Mostrar mensaje de error si las credenciales son incorrectas
                const errorMessage = document.getElementById('error-message');
                if (errorMessage) {
                    errorMessage.style.display = 'block';
                }
            }
        });
    }
}

// Cargar datos simulados para los sensores
function cargarDatosSimulados() {
    const data = {
        pm25: "22 µg/m³",
        co2: "410 ppm",
        temperature: "23°C",
        humidity: "48%"
    };

    const pm25Element = document.getElementById("pm25");
    const co2Element = document.getElementById("co2");
    const tempElement = document.getElementById("temperature");
    const humElement = document.getElementById("humidity");

    if (pm25Element && co2Element && tempElement && humElement) {
        setTimeout(() => {
            pm25Element.innerText = data.pm25;
            co2Element.innerText = data.co2;
            tempElement.innerText = data.temperature;
            humElement.innerText = data.humidity;

            // Remover la clase de carga
            pm25Element.classList.remove("loading");
            co2Element.classList.remove("loading");
            tempElement.classList.remove("loading");
            humElement.classList.remove("loading");
        }, 1000); // Tiempo de "carga" simulado
    }
}

// Configurar alertas y umbrales de calidad del aire
function configurarAlertas() {
    const alertForm = document.getElementById("alert-settings");
    if (alertForm) {
        alertForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const pm25Threshold = document.getElementById("pm25-threshold").value;
            const co2Threshold = document.getElementById("co2-threshold").value;

            // Guardar los umbrales en localStorage
            localStorage.setItem("pm25Threshold", pm25Threshold);
            localStorage.setItem("co2Threshold", co2Threshold);

            // Feedback visual en el botón de guardar
            const submitButton = alertForm.querySelector('button[type="submit"]');
            submitButton.innerText = "¡Guardado!";
            submitButton.style.backgroundColor = "#4a772f";

            setTimeout(() => {
                submitButton.innerText = "Guardar Configuración";
                submitButton.style.backgroundColor = "#b5853c";
            }, 2000);
        });
    }
}

// Agregar eventos de clic a los miembros del equipo
function agregarEventosEquipo() {
    const teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach(member => {
        member.addEventListener("click", () => {
            alert(`Información de ${member.querySelector("h3").innerText}`);
        });
    });
}
