import { body } from 'express-validator';

const superheroesValidaciones = [
    body('nombreSuperHeroe')
      .trim().not().isEmpty()
      .withMessage('El nombre del superhéroe es requerido')
      .isLength({ min: 3, max: 60 }).withMessage('El nombre del Superheroe dene tener entre 3 y 60 caracteres'),      
    body('nombreReal')
      .trim().not().isEmpty()
      .withMessage('El nombre Real del Superheroe es requerido')
      .isLength({ min: 3, max: 60 }).withMessage('El nombre Real debe tener mínimo 3 y un máximo de 60 caracteres'),      
    body('edad')
      .trim().not().isEmpty().
      withMessage('La edad en años es requerida')
      .isNumeric()
      .withMessage('La edad en años debe ser numérica')
      .isInt({ min: 0 })
      .withMessage('La mínima edad en años es cero'),
    body('poderes')
      .customSanitizer((value) => {
        if (typeof value === 'string') {
          return value.split(',').map((item) => item.trim()); // Convertir el string a array
        }
        return value;
      })
      .isArray().
      withMessage('Poderes debe ser un tipo de dato array')
      .not().isEmpty()
      .withMessage('Poderes es un dato Requerido, no puede estar vacío')
      .custom((value) => {
        // personalizamos las validaciones para todos los elementos del vector poderes
        if (!Array.isArray(value)) return false;
        for (const poder of value) {
          if (typeof poder !== 'string' || !poder.trim() || poder.length < 3 || poder.length > 60) {
            return false;
          }
        }
        return true;
      }).withMessage('Poderes es Requerido, debe contener mínimo 3 caracteres y un máximo de 60 caracteres'),
  ]
  
  export default superheroesValidaciones;