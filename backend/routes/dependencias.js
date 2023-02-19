import { Router } from 'express';

import {
  indexDependencia,
  createDependencia
} from '../controllers/dependenciasController.js';

const router = Router();

router.post('/dependencias-index', indexDependencia);
router.post('/dependencias-create', createDependencia);

export default router;