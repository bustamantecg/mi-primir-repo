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
  eliminarByNameSuperHeroesController 
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

//nuevos endpoint agregados del Sprint_03_TP_1
// Nuevos endpoinds 
    // se agregan validaciones
router.post('/heroe', superheroesValidaciones, manejadorValidacionErrores, insertSuperHeroesController);  // ok
router.put('/heroe/update/:id', superheroesValidaciones, updateSuperHeroesController); 

router.delete('/heroe/delete/:id', eliminarSuperHeroesController);
router.delete('/heroe/deleteByName/:name', eliminarByNameSuperHeroesController);


export default router;