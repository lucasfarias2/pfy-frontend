import type { PacklifyServerRequest, PacklifyServerResponse } from '@packlify/core';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { NextFunction } from 'express';

const withQueryMiddleware = (req: PacklifyServerRequest, res: PacklifyServerResponse, next: NextFunction) => {
  res.queries = {};

  res.loadQueryKeys = queryKeys => {
    const queryClient = new QueryClient();

    queryKeys.forEach(queryKey => {
      queryClient.setQueryData([queryKey], res.queries[queryKey]);
    });

    res.locals.initialState = dehydrate(queryClient);

    queryClient.clear();

    return res;
  };

  return next();
};

export default withQueryMiddleware;
