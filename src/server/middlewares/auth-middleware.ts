import axios from 'axios';
import type { NextFunction, Request, Response } from 'express';
import EQueryKeys from '../../shared/queries/query-keys.js';

const getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.cookies.session) {
    next();
    return;
  }

  try {
    const { data } = await axios.get(`${process.env.BACKEND_URL}/auth/user/`, {
      headers: { Authorization: `Bearer ${req.cookies.session}` },
    });

    const { email } = data as PFYUser;

    req.user = { email };
    res.queries[EQueryKeys.User] = req.user;
  } catch (e) {
    console.error('Error: Fetching data from current user', e);
  } finally {
    next();
  }
};

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    res.redirect('/login');
  } else {
    next();
  }
};

// const requireStaff = (req: Request, res: Response, next: NextFunction) => {
//   if (!req.user.is_staff) {
//     res.redirect('/');
//   } else {
//     next();
//   }
// };

const requireGuest = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    res.redirect('/account');
  } else {
    next();
  }
};

export default { getCurrentUser, requireAuth, requireGuest };
