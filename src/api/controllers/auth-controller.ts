import type { PacklifyServerRequest, PacklifyServerResponse } from '@packlify/core';
import axios from 'axios';

const options = { maxAge: 60 * 60 * 24 * 5 * 1000, httpOnly: true, secure: true, path: '/' };

const signup = async (req: PacklifyServerRequest, res: PacklifyServerResponse) => {
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

const login = async (req: PacklifyServerRequest, res: PacklifyServerResponse) => {
  const { token } = req.body;

  try {
    const { data } = await axios.post(`http://localhost:8080/api/v1/auth/login`, {
      token,
    });

    res.cookie('session', data, options);

    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).send('Error signing in');
  }
};

const currentUser = async (req: PacklifyServerRequest, res: PacklifyServerResponse) => {
  if (!req.cookies.session) {
    return res.status(401).send('No session found');
  }

  try {
    const { data } = await axios.get(`http://localhost:8080/api/v1/auth/user`, {
      headers: { session: req.cookies.session },
    });

    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).send('Error fetching currentUser');
  }
};

export default { signup, login, currentUser };
