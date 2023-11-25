import express from 'express';
import authController from './controllers/auth-controller.js';

const apiRouter = express.Router();

apiRouter.post('/auth/signup', authController.signup);

apiRouter.post('/auth/mock', (req, res) => {
  console.log('req.body', req.body);
  res.send('ok');
});

export default apiRouter;
