import { Router } from 'express';

import {
  indexDependencia,
} from '../controllers/dependenciasController.js';

const router = Router();

router.post('/dependencias-index', indexDependencia);

export default router;