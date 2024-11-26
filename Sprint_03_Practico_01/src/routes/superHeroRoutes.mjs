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

console.log('Entro a la lista de los endpoinds');

const router = express.Router();
// correr con postman
router.get('/heroes', obtenerTodosLosSuperHeroesController);
router.get('/heroes/:id', obtenerSuperHeroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/mayores30', obtenerSuperHeroesMayoresDe30Controller);

//nuevos endpoint agregados del Sprint3
console.log('Cargo los nuevos endpoinds');

router.post('/heroe', insertSuperHeroesController);  //ok
router.put('/heroe/update/:id', updateSuperHeroesController);  
router.delete('/heroe/delete/:id', eliminarSuperHeroesController);  // ok
router.delete('/heroe/deleteByName/:name', eliminarByNameSuperHeroesController);  // ok

export default router;