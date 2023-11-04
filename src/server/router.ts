import express from 'express';
import cloudController from './controllers/cloud-controller.js';
import homeController from './controllers/home-controller.js';

const appRouter = express.Router();

appRouter.get('/', homeController.fetch, homeController.render);
appRouter.get('/cloud', cloudController.fetch, cloudController.render);
appRouter.get('/cloud/forge', cloudController.fetch, cloudController.render);
appRouter.get('/cloud/projects', cloudController.fetch, cloudController.render);

export default appRouter;
