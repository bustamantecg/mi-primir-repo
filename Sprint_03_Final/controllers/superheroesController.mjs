import { 
  obtenerSuperHeroePorId, 
  obtenerTodosLosSuperHeroes, 
  buscarSuperHeroesPorAtributo, 
  obtenerSuperHeroesMayoresDe30, 
  insertSuperHero,
  updateSuperHeroes, 
  deleteSuperHeroes , 
  deleteByNameSuperHeroes 
} from '../services/superheroesService.mjs';

import {
  renderizandoListaSuperheroes, 
  renderizandoSuperheroe
} from '../views/responseView.mjs';

import { validationResult } from 'express-validator';
//--------------------------------------------------------------------------------------
export async function obtenerSuperHeroePorIdController(req, res){
  const { id } = req.params;
  const superheroe = await obtenerSuperHeroePorId(id);
  
  if(superheroe){
      res.send(renderizandoSuperheroe(superheroe));
  }
  else{
      res.status(404).send({mensaje: "Superheroe no encontrado"});
  }
}
//--------------------------------------------------------------------------------------

export async function obtenerTodosLosSuperHeroesController(req, res){
  const superheroes = await obtenerTodosLosSuperHeroes();

   // Renderiza y formatea la lista de superhéroes
  const listaRenderizada = renderizandoListaSuperheroes(superheroes);
  // Envía la respuesta como JSON
  //res.json(listaRenderizada);
  res.render('index', {listaRenderizada});
}

//--------------------------------------------------------------------------------------
export async function buscarSuperheroesPorAtributoController(req, res){
  const {atributo, valor} = req.params;
  const superheroes = await buscarSuperHeroesPorAtributo(atributo, valor);

  if(superheroes.length > 0){
      res.send(renderizandoListaSuperheroes(superheroes));
  }
  else{
      res.status(404).send({mensaje: "No se encontraron Superheroes con ese atributo"});
  }
}
//--------------------------------------------------------------------------------------

export async function obtenerSuperHeroesMayoresDe30Controller(req, res){
  //console.log(`Método: ${req.method}, Ruta: ${req.path}`);
  const superheroes = await obtenerSuperHeroesMayoresDe30();
  res.send(renderizandoListaSuperheroes(superheroes));
}
//--------------------------------------------------------------------------------------

export async function insertSuperHeroesController(req, res){  
    // Verificar los errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Retornar los errores en un formato legible
      return res.status(400).json({
        errors: errors.array().map(err => ({
          campo: err.param,
          mensaje: err.msg
        }))
      });
    }
  
  try {    
      const superheroNuevo = await insertSuperHero(req, res);
      const renderizado = renderizandoSuperheroe(superheroNuevo); 
      res.status(201).send(renderizado); 

  } catch (error) {
      console.error("Error en el controlador insertSuperHeroes:", error.message);
      res.status(500).send({ error: "Error al insertar el nuevo superheroe" });
  }
}

//--------------------------------------------------------------------------------------
export async function updateSuperHeroesController(req, res){
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Retornar los errores en un formato legible
    return res.status(400).json({
      errors: errors.array().map(err => ({
        campo: err.param,
        mensaje: err.msg
      }))
    });
  }
  
  try {
      const superheroe = await updateSuperHeroes(req, res);
      if (!superheroe) {
          return res.status(404).send({ error: 'Superhéroe no encontrado' });
      }
      const superheroeRenderizado = renderizandoSuperheroe(superheroe);
      res.status(200).send(superheroeRenderizado);
  } catch (error) {
      console.error("Error en el controlador:", error.message);
      res.status(500).send({ error: "Error al actualizar el superhéroe" });
  }
}
/*
export async function eliminarSuperHeroesController(req, res){
  try {
      const superheroe = await deleteSuperHeroes(req, res);

      //const superheroeRenderizado = renderizandoSuperheroe(superheroe);
      //res.render('index', {listaRenderizada});
      const superheroes = await obtenerTodosLosSuperHeroes();

      // Renderiza y formatea la lista de superhéroes
      const listaRenderizada = renderizandoListaSuperheroes(superheroes);
      // Envía la respuesta como JSON
      //res.json(listaRenderizada);
      res.render('index', {listaRenderizada});

  } catch (error) {
      console.error("Error en el controlador:", error.message);
      res.status(500).send({ error: 'Error al eliminar el superhéroe' });
  }
}
*/
export async function eliminarSuperHeroesController(req, res) {
  try {
    // Elimina el superhéroe y verifica si fue eliminado correctamente
    const superheroeEliminado = await deleteSuperHeroes(req, res);
    if (!superheroeEliminado) {
      return res.status(404).send({ error: 'Superhéroe no encontrado o no pudo ser eliminado' });
    }

    // Obtén la lista actualizada de todos los superhéroes
    const superheroes = await obtenerTodosLosSuperHeroes();
    
    // Asegúrate de que hay superhéroes para renderizar
    if (!superheroes || superheroes.length === 0) {
      return res.render('index', { mensaje: 'No hay superhéroes disponibles.' });
    }

    // Renderiza y formatea la lista de superhéroes
    const listaRenderizada = renderizandoListaSuperheroes(superheroes);

    // Renderiza la vista 'index' con la lista de superhéroes
    res.render('index', { listaRenderizada });

  } catch (error) {
    console.error("Error en el controlador:", error.message);
    // Si algo falla, envía un mensaje de error adecuado
    res.status(500).send({ error: 'Error al eliminar el superhéroe' });
  }
}

export async function eliminarByNameSuperHeroesController(req, res) {
  try {
      const { name } = req.params;

      if (!name) {
        return res.status(400).send({ error: "El nombre del superhéroe es requerido." });
      }

      const superheroe = await deleteByNameSuperHeroes(name);
      const superheroeRenderizado = renderizandoSuperheroe(superheroe); // Si esta función existe.
      res.status(200).send(superheroeRenderizado);
  } catch (error) {
      console.error("Error en el controlador:", error.message);

      if (error.message.includes("no encontrado")) {
          return res.status(404).send({ error: error.message });
      }
      res.status(500).send({ error: "Error al eliminar el superhéroe por su nombre (500)" });
  }
}
