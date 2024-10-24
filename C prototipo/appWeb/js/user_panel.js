// Archivo: user_panel.js
document.addEventListener("DOMContentLoaded", function () {
    // Obtener y mostrar los dispositivos del usuario
    fetch('/api/user/devices')
        .then(response => response.json())
        .then(data => {
            const deviceList = document.getElementById("lista-dispositivos");
            if (deviceList) {
                data.devices.forEach(device => {
                    const deviceItem = document.createElement("div");
                    deviceItem.className = "device-item";
                    deviceItem.innerHTML = `
                        <h3>${device.name}</h3>
                        <p>Estado: ${device.status}</p>
                        <button class="toggle-device" data-id="${device.id}">
                            ${device.status === 'on' ? 'Apagar' : 'Encender'}
                        </button>
                    `;
                    deviceList.appendChild(deviceItem);
                });

                // Añadir evento de clic para cada botón de dispositivo
                document.querySelectorAll(".toggle-device").forEach(button => {
                    button.addEventListener("click", function () {
                        const deviceId = this.getAttribute("data-id");
                        toggleDevice(deviceId);
                    });
                });
            }
        })
        .catch(error => console.error('Error al obtener los dispositivos:', error));
    
    // Función para alternar el estado de un dispositivo
    function toggleDevice(deviceId) {
        fetch(`/api/user/devices/${deviceId}/toggle`, {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            console.log(`Dispositivo ${deviceId} actualizado: ${data.status}`);
            location.reload(); // Recargar la página para actualizar la lista
        })
        .catch(error => console.error('Error al alternar dispositivo:', error));
    }
});
