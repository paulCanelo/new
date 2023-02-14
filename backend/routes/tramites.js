import { Router } from 'express';

import {
  indexTramites,
  createTramites,
  createEtapa,
  indexEtapas,
  indexCampos,
  createCampos
} from './../controllers/tramitesController.js';

//import { authenticateToken } from '../middlewares/jwt.middleware.js';

const router = Router();

router.post('/tramite-index', indexTramites);
router.post('/tramite-create', createTramites);
router.post('/etapas-create', createEtapa);
router.get('/etapas-index/:idTramite', indexEtapas);
router.get('/campos-index', indexCampos);
router.post('/campos-create', createCampos);

router.post('/flujo-create', () => {
  return res.json({
      estado: true,
      mensaje: 'funciona'
  })
});

export default router;