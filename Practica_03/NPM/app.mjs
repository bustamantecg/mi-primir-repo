import express from 'express';


const app = express();
const PORT = 3000;

// ruta al home

app.get('/', (req, res) =>{
    res.send('<h1>Hola Carlos </h1>');
});

// levantar servidor
app.listen(PORT,() =>{
    console.log(`Servidor Carriendo en http://localhost:${PORT}`);
});






