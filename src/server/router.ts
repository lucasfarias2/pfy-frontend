import express from 'express';
import homeController from './controllers/homeController.js';

const appRouter = express.Router();

appRouter.get('/', homeController.fetch, homeController.render);
appRouter.get('/create', homeController.fetch, homeController.render);
appRouter.get('/projects', homeController.fetch, homeController.render);

export default appRouter;
