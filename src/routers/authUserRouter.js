import { Router } from 'express';
import { controllerWrapper } from '../controllers/controllerWrapper.js';
import {
  loginAuthUserSchema,
  registerAuthUserSchema,
  resetAuthUserPasswordSchema,
  requestAuthUserResetEmailSchema,
} from '../validation/authValidation.js';
import {
  // getAuthController,
  getAuthUsersController,
  loginAuthUserController,
  logoutAuthUserController,
  registerAuthUserController,
  refreshAuthUserSessionController,
  sendAuthUserResetPasswordEmailController,
  resetAuthUserPasswordController,
} from '../controllers/authUserController.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = Router();

router.get('/users', controllerWrapper(getAuthUsersController));

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

//#region : hw-6.1
router.post(
  '/send-reset-email',
  validateBody(requestAuthUserResetEmailSchema),
  controllerWrapper(sendAuthUserResetPasswordEmailController),
);
router.post(
  '/reset-pwd',
  validateBody(resetAuthUserPasswordSchema),
  controllerWrapper(resetAuthUserPasswordController),
);
//#endregion

export default router;
