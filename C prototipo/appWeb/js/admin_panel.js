// Archivo: admin_panel.js
document.addEventListener("DOMContentLoaded", function () {
    // Cargar estadísticas generales
    fetch('/api/admin/stats')
        .then(response => response.json())
        .then(data => {
            const statsSection = document.getElementById("admin-stats");
            if (statsSection) {
                statsSection.innerHTML = `
                    <h3>Estadísticas Generales</h3>
                    <p>Dispositivos Conectados: ${data.connectedDevices}</p>
                    <p>Usuarios Activos: ${data.activeUsers}</p>
                `;
            }
        })
        .catch(error => console.error('Error al obtener estadísticas:', error));
    
    // Actualizar firmware de dispositivos
    document.getElementById("update-firmware").addEventListener("click", function () {
        fetch('/api/admin/update-firmware', {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            console.log('Firmware actualizado para los dispositivos seleccionados:', data);
            alert('Firmware actualizado correctamente.');
        })
        .catch(error => console.error('Error al actualizar firmware:', error));
    });

    // Gestión de usuarios
    const userTable = document.getElementById("user-table");
    if (userTable) {
        fetch('/api/admin/users')
            .then(response => response.json())
            .then(data => {
                data.users.forEach(user => {
                    const userRow = document.createElement("tr");
                    userRow.innerHTML = `
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>
                            <button class="delete-user" data-id="${user.id}">Eliminar</button>
                        </td>
                    `;
                    userTable.appendChild(userRow);
                });

                document.querySelectorAll(".delete-user").forEach(button => {
                    button.addEventListener("click", function () {
                        const userId = this.getAttribute("data-id");
                        deleteUser(userId);
                    });
                });
            })
            .catch(error => console.error('Error al cargar usuarios:', error));
    }

    // Función para eliminar usuario
    function deleteUser(userId) {
        fetch(`/api/admin/users/${userId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            console.log(`Usuario ${userId} eliminado:`, data);
            location.reload(); // Recargar la página para actualizar la lista de usuarios
        })
        .catch(error => console.error('Error al eliminar usuario:', error));
    }
});
