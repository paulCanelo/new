import { Router } from 'express';

/*import {
  reportarResponsable,
  enviarRespuesta,
  getBuzon,
  getCiudades,
  getTiposDocumentos,
  radicarSiscar,
  getPlazoPersonalizado
} from '../controllers/radicados.controller.js';*/

//import { authenticateToken } from '../middlewares/jwt.middleware.js';

const router = Router();

router.post('/create', () => {
    return res.json({
        estado: true,
        mensaje: 'Metodo de crear'
    })
});

router.put('/usuario-update', () => {
    return res.json({
        estado: true,
        mensaje: 'Metodo de editar'
    })
});

router.get('/usuario-view:id', () => {
    return res.json({
        estado: true,
        mensaje: 'Metodo de visualizacion'
    })
});

export default router;