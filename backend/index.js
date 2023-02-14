import express from 'express';
import cors from 'cors';
import { Router } from 'express';

import tramitesRoutes from './routes/tramites.js'
import usuariosRoutes from './routes/usuarios.js'
import dependenciasRoutes from './routes/dependencias.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', [
  tramitesRoutes,
  usuariosRoutes,
  dependenciasRoutes
]);

app.use('/', (req, res) => {
    return res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto:', PORT);
});