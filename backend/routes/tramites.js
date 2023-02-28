import { Router } from 'express';

import {
  indexTramites,
  createTramites,
  createEtapa,
  indexEtapas,
  indexCampos,
  createCampos,
  flujoCreate,
  flujoIndex
} from './../controllers/tramitesController.js';

//import { authenticateToken } from '../middlewares/jwt.middleware.js';

const router = Router();

router.get('/tramite-index', indexTramites);
router.post('/tramite-create', createTramites);
router.post('/etapas-create', createEtapa);
router.get('/etapas-index/:idTramite', indexEtapas);
router.get('/campos-index', indexCampos);
router.post('/campos-create', createCampos);

router.post('/flujo-create', flujoCreate);
router.get('/flujo-index/:idTramite', flujoIndex);

export default router;