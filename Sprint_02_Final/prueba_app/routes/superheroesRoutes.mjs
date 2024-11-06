import express from 'express';
import { 
  buscarSuperheroePorAtributoController, 
  obtenerSuperheroesMayoresDe30Controller, 
  obtenerSuperheroesPorIdController, 
  obtenerTodosLosSuperheroesController 
} from '../controllers/superhearoesController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroesPorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroePorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

export default router;