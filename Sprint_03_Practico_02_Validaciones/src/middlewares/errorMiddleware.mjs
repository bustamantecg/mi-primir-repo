import { validationResult } from "express-validator";

export const manejadorValidacionErrores = (req, res, next) =>{
    const errores = validationResult(req);
    if (!errores.isEmpty()){
        return res.status(400).json({
            status:'error',
            message: 'Fallo la Validación',
            errores: errores.array().map(error=>({
                field: error.param,
                message: error.msg,
            }))
        });
    }
    next();
};