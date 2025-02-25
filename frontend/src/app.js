async function updateTime() {
    try {
        const response = await fetch('http://backend:3000/time');
        const data = await response.json();
        document.getElementById('time').textContent = data.time;
    } catch (error) {
        document.getElementById('time').textContent = 'Error al cargar la hora';
    }
}

setInterval(updateTime, 1000); // Actualiza cada segundo
updateTime(); // Llamada inicial
