import { Router } from 'express';

import {
  createUsuarios,
  indexUsuarios,
  viewUsuarios
} from '../controllers/usuariosController.js';

//import { authenticateToken } from '../middlewares/jwt.middleware.js';

const router = Router();

router.post('/create-usuarios', createUsuarios);
router.get('/index-usuarios', indexUsuarios);
router.get('/usuario-view/:id', viewUsuarios);

export default router;