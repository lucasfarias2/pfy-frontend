import type { PacklifyServerRequest, PacklifyServerResponse } from '@packlify/core';
import type { NextFunction } from 'express';
import EQueryKeys from '../../shared/queries/query-keys.js';

const fetch = async (req: PacklifyServerRequest, res: PacklifyServerResponse, next: NextFunction) => {
  next();
};

const render = (req: PacklifyServerRequest, res: PacklifyServerResponse) => {
  res
    .loadQueryKeys([EQueryKeys.User])
    .renderView('home', { initialState: res.locals.initialState, device: req.device });
};

export default { render, fetch };
