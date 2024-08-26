import { Router } from 'express';
import authUserRouter from './authUserRouter.js';
import contactsRouter from './contactsRouter.js';
import { auth } from '../middlewares/auth.js';

const router = Router();

router.use('/auth', authUserRouter);
// router.use('/auth', authUserResetRouter);
// router.use('/contacts/all', contactsRouter);
router.use('/contacts', auth, contactsRouter);
export default router;
