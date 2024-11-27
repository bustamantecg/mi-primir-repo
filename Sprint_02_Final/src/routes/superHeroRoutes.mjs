import express from 'express';
import { 
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroePorAtributoController,
  obtenerSuperheroesMayoresDe30Controller
} from '../controllers/superheroesController.mjs';

console.log('Entro a la lista de los endpoinds')
const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroePorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);



export default router;