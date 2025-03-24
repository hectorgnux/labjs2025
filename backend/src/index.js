// Importa el módulo Express.js para crear el servidor
const express = require('express');

// Importa el módulo CORS para controlar el acceso entre dominios
const cors = require('cors');

// Crea una instancia de la aplicación Express
const app = express();

// Define el puerto donde correrá el servidor
const port = 3000;

// Imprime un mensaje de depuración al configurar CORS
console.log("Ingresando a cors!");

// Configura CORS para permitir solicitudes solo desde el frontend en localhost:81
app.use(cors({
    origin: 'http://localhost:81' // Especifica el origen permitido
}));

// Define una ruta GET en el endpoint '/time'
app.get('/time', (req, res) => {
    // Imprime un mensaje cuando se accede a esta ruta
    console.log("GET Time");
    
    // Obtiene la fecha y hora actual formateada para Chile
    const now = new Date().toLocaleString('es-CL', { 
        timeZone: 'America/Santiago' // Usa la zona horaria de Santiago
    });
    
    // Envía la hora actual como respuesta en formato JSON
    res.json({ time: now });
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
    // Imprime un mensaje cuando el servidor está listo
    console.log(`Backend running at http://localhost:${port}`);
});
