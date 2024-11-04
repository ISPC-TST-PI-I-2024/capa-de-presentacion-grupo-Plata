// alertController.js
document.addEventListener("DOMContentLoaded", () => {
    const alertForm = document.getElementById("alert-settings");
    alertForm.addEventListener("submit", handleAlertSettings);
});

function handleAlertSettings(event) {
    event.preventDefault();

    // Captura de los valores de los umbrales establecidos por el usuario
    const mq135Threshold = document.getElementById("mq135-threshold").value;
    const uvThreshold = document.getElementById("uv-threshold").value;
    const lightThreshold = document.getElementById("light-threshold").value;
    const pressureThreshold = document.getElementById("pressure-threshold").value;

    // Validación y guardado de los umbrales (aquí se podría almacenar en localStorage o enviar a un servidor)
    const thresholds = {
        mq135: mq135Threshold,
        uv: uvThreshold,
        light: lightThreshold,
        pressure: pressureThreshold
    };

    console.log("Nuevos umbrales guardados:", thresholds);

    // Simular una confirmación de guardado
    alert("¡Configuración de alertas guardada correctamente!");
}
