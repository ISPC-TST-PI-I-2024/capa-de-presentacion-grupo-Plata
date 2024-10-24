document.addEventListener("DOMContentLoaded", function () {
    // Manejo del menú de navegación
    const navItems = document.querySelectorAll("nav ul li");

    navItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            const submenu = item.querySelector(".submenu");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        item.addEventListener("mouseleave", () => {
            const submenu = item.querySelector(".submenu");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });

    // Control de acceso - Validación del formulario de inicio de sesión
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Ejemplo básico para el login usando la API RESTful
            fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Verificar el tipo de usuario y redirigir al panel adecuado
                    if (data.role === "admin") {
                        window.location.href = "admin_panel.html";
                    } else if (data.role === "user") {
                        window.location.href = "user_panel.html";
                    }
                } else {
                    alert("Credenciales incorrectas.");
                }
            })
            .catch(error => {
                console.error("Error en la autenticación:", error);
                alert("Hubo un problema al procesar la solicitud.");
            });
        });
    }

    // Alerta de bienvenida
    if (document.title.includes("Inicio")) {
        console.log("Bienvenido a la Empresa IoT.");
    }
});
