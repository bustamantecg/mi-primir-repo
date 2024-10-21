import express from 'express';

import {obtenerTodosLosSuperheroes, obtenerSuperheroePorIdController, 
    agregarNuevoSuperheroe, actualizarSuperheroePorId, 
    eliminarSuperheroePorId, buscarSuperheroesPorAtributoController, 
    obtenerSuperheroesMayoresDe30YConFiltrosController} 
 from './controllers/superheroesController.mjs';

const app = express();
app.use(express.json());

const PORT = 3005;  

app.get('/superheroes', obtenerTodosLosSuperheroes);
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.post('/superheroes', agregarNuevoSuperheroe);
app.put('/superheroes/:id', actualizarSuperheroePorId);
app.delete('/superheroes/:id', eliminarSuperheroePorId);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/filtros/avanzados', obtenerSuperheroesMayoresDe30YConFiltrosController);

app.listen(PORT,() =>{
    console.log(`Servidor Carriendo en http://localhost:${PORT}`);
    console.log(`Ctrl+C para bajar servidor`);
});