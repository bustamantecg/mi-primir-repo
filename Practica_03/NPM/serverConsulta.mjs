
import express from 'express';

const app = express();
const PORT = 3000;

// Ruta get con parametro de consulta
// Ejemplop: http://localhost:3000/profile?edad=30

app.get('/prfile', (req, res) =>{
    const edad = req.query.edad;
    console.log(`Edad Recibida en el parametro edad: ${edad}`);
    res.send(`Edad del Perfil: ${edad}`);
});

app.listen(PORT, ()=>{
    console.log(`Servidor Corriendo en http://localhost:${PORT}`);
})