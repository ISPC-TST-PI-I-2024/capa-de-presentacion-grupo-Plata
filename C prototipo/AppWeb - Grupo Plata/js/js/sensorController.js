document.addEventListener("DOMContentLoaded", () => {
    updateSensorData();
});

async function updateSensorData() {
    const endpoint = "/datos_dispositivos/";
    const apiKey = "plata";
    const sensorData = {
        aqi: null,
        uv: null,
        light: null,
        pressure: null,
        temperature: null,
        humidity: null
    };

    try {
        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                "X-API-KEY": apiKey,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Error en la consulta: ${response.status}`);
        }

        const data = await response.json();

        // Filtrar y obtener los últimos datos para cada sensor
        const latestData = getLastSensorReadings(data);

        // Asignar valores de los sensores
        sensorData.aqi = latestData["C"]; // Concentración de gases (MQ135)
        sensorData.uv = latestData["mW/cm²"]; // Nivel UV (ML8511)
        sensorData.light = latestData["lux"]; // Intensidad lumínica (BH1750)
        sensorData.pressure = latestData["hPa"]; // Presión atmosférica (BMP280)
        sensorData.temperature = latestData["°C"]; // Temperatura (AM2320)
        sensorData.humidity = latestData["%"]; // Humedad (AM2320)

        // Actualizar el DOM con los datos reales
        document.getElementById("aqi").textContent = `Concentración de gases: ${sensorData.aqi} ppm`;
        document.getElementById("uv").textContent = `${sensorData.uv} mW/cm²`;
        document.getElementById("light").textContent = `${sensorData.light} lux`;
        document.getElementById("pressure").textContent = `${sensorData.pressure} hPa`;
        document.getElementById("temperature").textContent = `${sensorData.temperature}°C`;
        document.getElementById("humidity").textContent = `${sensorData.humidity}%`;
        
    } catch (error) {
        console.error("Error al obtener datos de sensores:", error);
    }
}

// Función para obtener la última lectura de cada tipo de sensor
function getLastSensorReadings(data) {
    const latestReadings = {};

    // Filtrar por unidad y obtener el último valor para cada tipo de sensor
    const sensores = ["C", "mW/cm²", "lux", "hPa", "°C", "%"];

    sensores.forEach((unidad) => {
        const sensorData = data
            .filter((item) => item.unidad === unidad)
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        if (sensorData.length > 0) {
            latestReadings[unidad] = sensorData[0].valor;
        }
    });

    return latestReadings;
}
