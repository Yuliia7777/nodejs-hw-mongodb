import { Router } from 'express';
import { controllerWrapper } from '../controllers/controllerWrapper.js';
import {
  loginAuthUserSchema,
  registerAuthUserSchema,
} from '../validation/authValidation.js';
import {
  getAuthController,
  getAuthUsersController,
  loginAuthUserController,
  logoutAuthUserController,
  registerAuthUserController,
  refreshAuthUserSessionController,
  getAuthUsersSessionsController,
} from '../controllers/authUserController.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = Router();

router.get('/', controllerWrapper(getAuthController));
router.get('/users', controllerWrapper(getAuthUsersController));
router.get('/sessions', controllerWrapper(getAuthUsersSessionsController));

router.post(
  '/register',
  validateBody(registerAuthUserSchema),
  controllerWrapper(registerAuthUserController),
);

router.post(
  '/login',
  validateBody(loginAuthUserSchema),
  controllerWrapper(loginAuthUserController),
);

router.post('/logout', controllerWrapper(logoutAuthUserController));

router.post('/refresh', controllerWrapper(refreshAuthUserSessionController));

export default router;
