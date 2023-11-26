import express from 'express';
import authController from './controllers/auth-controller.js';

const apiRouter = express.Router();

apiRouter.post('/auth/login', authController.login);

export default apiRouter;
