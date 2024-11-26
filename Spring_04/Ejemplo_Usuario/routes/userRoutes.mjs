//import express from 'express';

import { Router } from "express";

const router = Router();

// simulando datos, pueden venir de un result, Json o de otro planeta.
const users =[
    {id:1, nombre:'Carlos Bustamante', edad:54},
    {id:2, nombre:'Guillermo Franchela', edad:64},
    {id:3, nombre:'Charly Garcia', edad:74}
];

// ruta 1) para listar los usuarios
router.get('/', (req, res) =>{
    res.render('users', {users})
});


// ruta 2) para Mostrar un usuario especifico
router.get('/:id', (req, res) =>{
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(user){
        res.render('userProfile', {user});
    }else {
        res.status(404).send('Usuario no existe');
    }
});

export default router;