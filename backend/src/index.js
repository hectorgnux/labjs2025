const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Habilitar CORS para el origen del frontend
console.log("Ingresando a cors!"); // Esto aparece en la consola
app.use(cors({
    origin: 'http://localhost:81' // o 'http://127.0.0.1:81', dependiendo de cómo accedas
}));

app.get('/time', (req, res) => {
    console.log("GET Time"); // Esto aparece en la consola
    const now = new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' });
    res.json({ time: now });
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});
