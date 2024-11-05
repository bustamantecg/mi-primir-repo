import express from 'express';

import path from 'path';
//import { fileURLToPath } from 'url';

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);


const app = express();
app.use(express.json());
const PORT = 3000;
import {obtenerTodasLasTareas, obtenerTareaPorIdController,  agregarNuevaTarea, actualizarTareaPorId, eliminarTareaPorId } from './controllers/tareaController.mjs';
     

app.get('/tareas', obtenerTodasLasTareas);
app.get('/tareas/:id', obtenerTareaPorIdController);
app.post('tareas', agregarNuevaTarea);
app.put('/tareas/:id', actualizarTareaPorId);
app.delete('/tarea/:id', eliminarTareaPorId);

app.listen(PORT,() =>{
    console.log(`Servidor Carriendo en http://localhost:${PORT}`);
    console.log(`Ctrl+C para bajar servidor`);
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 