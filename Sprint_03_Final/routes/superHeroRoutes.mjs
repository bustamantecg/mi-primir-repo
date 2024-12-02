import express from 'express';
import { body } from 'express-validator';
import { 
  obtenerTodosLosSuperHeroesController,  
  obtenerSuperHeroePorIdController, 
  buscarSuperheroesPorAtributoController,
  obtenerSuperHeroesMayoresDe30Controller,
// nuevos endpoints
  insertSuperHeroesController,
  updateSuperHeroesController,
  eliminarSuperHeroesController,
  eliminarByNameSuperHeroesController,
  FormularioNuevoSuperheroeController
} from '../controllers/superheroesController.mjs';

// nuevo tema validaciones

import superheroesValidaciones from '../validations/superHeroesValidations.mjs';
import { manejadorValidacionErrores } from "../middlewares/errorMiddleware.mjs";

const router = express.Router();

// correr con postman

router.get('/heroes', obtenerTodosLosSuperHeroesController);
router.get('/heroes/:id', obtenerSuperHeroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/buscar/mayores30', obtenerSuperHeroesMayoresDe30Controller);

router.get('/heroe/crear', FormularioNuevoSuperheroeController); 

router.post('/heroe/crear', (req, res, next) => {
  //console.log("Datos", req.body); // Muestra los datos enviados desde el formulario
  req.body.poderes = req.body.poderes.split(',').map(p => p.trim());
  next();
}, superheroesValidaciones(), manejadorValidacionErrores, insertSuperHeroesController);


router.put('/heroe/update/:id', superheroesValidaciones, updateSuperHeroesController); 

router.delete('/heroe/delete/:id', eliminarSuperHeroesController);
router.delete('/heroe/deleteByName/:name', eliminarByNameSuperHeroesController);

router.post('/test', (req, res) => {
  console.log('Datos recibidos:', req.body);
  res.send('Datos procesados');
});

export default router;