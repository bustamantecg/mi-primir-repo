import express from 'express';
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
import { body, validationResult } from 'express-validator';

const router = express.Router();

// correr con postman

router.get('/heroes', obtenerTodosLosSuperHeroesController);
router.get('/heroes/:id', obtenerSuperHeroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/buscar/mayores30', obtenerSuperHeroesMayoresDe30Controller);

//nuevos endpoint agregados del Sprint_03_TP_1
// Nuevos endpoinds 
// se agregan validaciones


router.post('/heroe', [
  body('nombreSuperHeroe')
  .notEmpty()
  .withMessage('Nombre de SuperHeroe es Requerido')
  .isLength({min:3, max:60})
  .withMessage('El nombre del Superheroe dene tener entre 3 y 60 caracteres')
  .trim()
  .escape()
], insertSuperHeroesController);  // ok

router.put('/heroe/update/:id', updateSuperHeroesController); 
router.delete('/heroe/delete/:id', eliminarSuperHeroesController);
router.delete('/heroe/deleteByName/:name', eliminarByNameSuperHeroesController);


export default router;