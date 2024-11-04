
document.addEventListener("DOMContentLoaded", () => {
    updateSensorData();
});

function updateSensorData() {
    // Simulación de la obtención de datos de los sensores (aquí iría la lógica para obtener los datos reales)
    const sensorData = {
        aqi: 250,  // Concentración de gases en ppm (MQ135)
        uv: 2.5,   // Nivel UV (ML8511)
        light: 350, // Intensidad lumínica (BH1750)
        pressure: 1013, // Presión atmosférica (BMP280)
        temperature: 22, // Temperatura (AM2320)
        humidity: 45  // Humedad (AM2320)
    };

    // Actualización de los datos en el DOM
    document.getElementById("aqi").textContent = `Concentración de gases: ${sensorData.aqi} ppm`;
    document.getElementById("uv").textContent = `${sensorData.uv} mW/cm²`;
    document.getElementById("light").textContent = `${sensorData.light} lux`;
    document.getElementById("pressure").textContent = `${sensorData.pressure} hPa`;
    document.getElementById("temperature").textContent = `${sensorData.temperature}°C`;
    document.getElementById("humidity").textContent = `${sensorData.humidity}%`;
}
