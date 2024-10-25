document.addEventListener("DOMContentLoaded", function() {
    // Simulación de datos para los indicadores de calidad de aire (User Panel)
    const data = {
        pm25: "22 µg/m³",
        co2: "410 ppm",
        temperature: "23°C",
        humidity: "48%"
    };

    if (document.getElementById("pm25")) {
        document.getElementById("pm25").innerText = data.pm25;
        document.getElementById("co2").innerText = data.co2;
        document.getElementById("temperature").innerText = data.temperature;
        document.getElementById("humidity").innerText = data.humidity;
    }

    // Validación del formulario de inicio de sesión (Login)
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!email.includes('@')) {
                alert('Por favor ingrese un correo válido.');
                event.preventDefault();
            } else if (password.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres.');
                event.preventDefault();
            }
        });
    }

    // Configuración de Alertas (User Panel)
    const alertForm = document.getElementById("alert-settings");
    if (alertForm) {
        alertForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const pm25Threshold = document.getElementById("pm25-threshold").value;
            const co2Threshold = document.getElementById("co2-threshold").value;

            localStorage.setItem("pm25Threshold", pm25Threshold);
            localStorage.setItem("co2Threshold", co2Threshold);

            alert(`Configuración guardada:\nPM2.5: ${pm25Threshold} µg/m³\nCO2: ${co2Threshold} ppm`);
        });

        const savedPm25Threshold = localStorage.getItem("pm25Threshold");
        const savedCo2Threshold = localStorage.getItem("co2Threshold");

        if (savedPm25Threshold) {
            document.getElementById("pm25-threshold").value = savedPm25Threshold;
        }
        if (savedCo2Threshold) {
            document.getElementById("co2-threshold").value = savedCo2Threshold;
        }
    }

    // Funciones de administración (Admin Panel)
    const addUserButton = document.querySelector(".admin-options .btn:nth-child(1)");
    const deleteUserButton = document.querySelector(".admin-options .btn:nth-child(2)");

    if (addUserButton) {
        addUserButton.addEventListener("click", function() {
            alert("Función agregar usuario en construcción");
        });
    }

    if (deleteUserButton) {
        deleteUserButton.addEventListener("click", function() {
            alert("Función eliminar usuario en construcción");
        });
    }
});
