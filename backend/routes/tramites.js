import { Router } from 'express';

import {
  indexTramites
} from './../controllers/tramitesController.js';

//import { authenticateToken } from '../middlewares/jwt.middleware.js';

const router = Router();

router.post('/tramite-index', indexTramites);
router.post('/etapas-create', () => {
  return res.json({
      estado: true,
      mensaje: 'funciona'
  })
});

router.post('/campos-create', () => {
  return res.json({
      estado: true,
      mensaje: 'funciona'
  })
});

router.post('/flujo-create', () => {
  return res.json({
      estado: true,
      mensaje: 'funciona'
  })
});

export default router;