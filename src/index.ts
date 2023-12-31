import { createServer } from '@packlify/core';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import express from 'express';
import favicon from 'serve-favicon';
import apiRouter from './api/router.js';
import appRouter from './server/router.js';

config();

const port = process.env.PORT || 3000;

(async () => {
  try {
    const app = await createServer({ hmrPort: 3001 });

    app.use(express.json());
    app.use(favicon('public/favicon.ico'));
    app.use(cookieParser());
    app.use('/', express.static('public'));

    app.use('/api', apiRouter);

    app.use('/', appRouter);

    app.use((_, res) => {
      res.send('Error 404: Page not found');
    });

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch {
    console.log('Error starting server');
  }
})();
