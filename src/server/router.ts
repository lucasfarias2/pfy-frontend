import express from 'express';
import cloudController from './controllers/cloud-controller.js';
import dashboardController from './controllers/dashboard-controller.js';
import homeController from './controllers/home-controller.js';
import loginController from './controllers/login-controller.js';
import registerController from './controllers/register-controller.js';

const appRouter = express.Router();

appRouter.get('/', homeController.fetch, homeController.render);
appRouter.get('/toolkits', homeController.fetch, homeController.render);
appRouter.get('/contact', homeController.fetch, homeController.render);

appRouter.get('/register', registerController.fetch, registerController.render);
appRouter.get('/login', loginController.fetch, loginController.render);

appRouter.get('/dashboard', dashboardController.fetch, dashboardController.render);

appRouter.get('/cloud', cloudController.fetch, cloudController.render);
appRouter.get('/cloud/projects', cloudController.fetch, cloudController.render);
appRouter.get('/cloud/users', cloudController.fetch, cloudController.render);
appRouter.get('/cloud/settings', cloudController.fetch, cloudController.render);

export default appRouter;
