import axios from 'axios';
import type { Request, Response } from 'express';

const options = { maxAge: 60 * 60 * 24 * 5 * 1000, httpOnly: true, secure: true, path: '/' };

const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { data } = await axios.post(`http://localhost:3000/api/auth/mock`, {
      email,
      password,
    });

    res.cookie('session', data.token, options);

    res.send(data.token);
  } catch (err) {
    console.log(err);
    res.status(401).send('Error signing up');
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password, token } = req.body;

  try {
    const { data } = await axios.post(`http://localhost:8080/api/v1/auth/login`, {
      token,
    });

    res.cookie('session', data, options);

    console.log('data from backend', data);

    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).send('Error signing in');
  }
};

export default { signup, login };
