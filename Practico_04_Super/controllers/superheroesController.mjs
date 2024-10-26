import {obtenerSuperheroes, obtenerSuperheroePorId, agregarSuperheroe, actualizarSuperheroe, eliminarSuperheroe, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30YConFiltros } from '../services/superheroesService.mjs';

import { renderizarListaSuperheroes, renderizarSuperheroes } from '../views/responseView.mjs';

export function obtenerTodosLosSuperheroes(req, res){
    const Superheroes = obtenerSuperheroes();
    res.send(renderizarListaSuperheroes(Superheroes));
}

export function obtenerSuperheroePorIdController(req, res){
    const {id} = req.params;
    const Superheroe = obtenerSuperheroePorId(parseInt(id));
    if (Superheroe){
        res.send(renderizarSuperheroes(Superheroe));
    }else{
        //res.status(404).send({mensaje:`Superheroe ID: ${id} NO encontrado`});
        res.status(404).send({mensaje:"Superheroe NO encontrado"});
    }
}

export function agregarNuevoSuperheroe(req, res){
    const datos= req.body;
    const nuevoSuperheroe = agregarSuperheroe(datos);
    res.send(nuevoSuperheroe);
}

export function actualizarSuperheroePorId(req, res){
    const {id} = req.params;    
    const datos = req.body;
    const resultado = actualizarSuperheroe(parseInt(id), datos);
    res.send(resultado ? 'Superheroe Actualizado':'Superheroe No Encontrado');
}

export function eliminarSuperheroePorId(req, res){
    const {id} = req.params;
    const resultado = eliminarSuperheroe(parseInt(id));
    res.send(resultado ? 'Superheroe Eliminado': 'Superheroe No Encontrado');
}

export function buscarSuperheroesPorAtributoController(req, res){
    const {atributo, valor} = req.params;
    const superheroes = buscarSuperheroesPorAtributo(atributo, valor);
    res.send(renderizarListaSuperheroes(superheroes));
}

export function obtenerSuperheroesMayoresDe30YConFiltrosController(req, res){
    const superheroes = obtenerSuperheroesMayoresDe30YConFiltros();
    res.send(renderizarListaSuperheroes(superheroes));
}