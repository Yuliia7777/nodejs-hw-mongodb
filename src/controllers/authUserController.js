import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';

import {
  // getAuthUserById,
  getAuthUserByEmail,
  getAuthUsersService,
  createAuthUserService,
  logoutAuthUserService,
} from '../services/authUserService.js';
import {
  getAuthUserSessionById,
  getAuthUserSessionService,
  refreshAuthUsersSessionService,
  setupAuthUserSessionCookies,
  isRefreshTockenExpired,
} from '../services/authUserSessionService.js';

export const registerAuthUserController = async (req, res) => {
  const { email, name } = req.body;
  const authUser = await getAuthUserByEmail(email);
  if (authUser) {
    throw createHttpError(409, 'Email in use');
  }

  await createAuthUserService(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: { name, email },
  });
};

export const getAuthController = async (req, res) => {
  res.send({
    body: req.body,
    data: req.data,
    params: req.params,
    query: req.query,
    sender: 'authUserController',
  });
};
export const getAuthUsersController = async (req, res) => {
  const authUsers = await getAuthUsersService(req.query);
  res.send({
    authUsers,
    body: req.body,
    data: req.data,
    params: req.params,
    query: req.query,
    sender: 'authUserController',
  });
};

export const loginAuthUserController = async (req, res) => {
  const { email, password } = req.body;
  const authUser = await getAuthUserByEmail(email);
  if (!authUser) {
    throw createHttpError(401, 'Unauthorized');
  }

  const isPasswordCorrect = await bcrypt.compare(password, authUser.password);
  if (!isPasswordCorrect) {
    throw createHttpError(401, 'Unauthorized');
  }

  const session = await getAuthUserSessionService(authUser._id);

  setupAuthUserSessionCookies(res, session);

  res.json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: { accessToken: session.accessToken },
  });
};

export const logoutAuthUserController = async (req, res) => {
  if (req.cookies.sessionId) {
    await logoutAuthUserService(req.cookies.sessionId);
  }

  res.clearCookie('sessionId');
  res.clearCookie('refreshToken');

  res.status(204).send();
};

export const refreshAuthUserSessionController = async (req, res) => {
  const { sessionId } = req.cookies;
  // const { sessionId, refreshToken } = req.cookies;

  const session = await getAuthUserSessionById(sessionId);
  if (!session) {
    throw createHttpError(401, 'Session not found');
  }

  const isSessionTokenExpired = await isRefreshTockenExpired(session);
  if (isSessionTokenExpired) {
    throw createHttpError(401, 'Session token expired');
  }

  const authUserSession = await refreshAuthUsersSessionService(session);
  setupAuthUserSessionCookies(res, authUserSession);

  res.json({
    status: 200,
    message: 'Successfully refreshed a session!',
    data: {
      accessToken: authUserSession.accessToken,
    },
  });
};
