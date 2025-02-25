const express = require('express');
const app = express();
const port = 3000;

app.get('/time', (req, res) => {
    const now = new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' });
    res.json({ time: now });
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});
