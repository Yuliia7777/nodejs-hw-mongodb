import { Router } from 'express';
import authUserRouter from './authUserRouter.js';
import contactsRouter from './contactsRouter.js';
import { auth } from '../middlewares/auth.js';

const router = Router();

router.use('/auth', authUserRouter);
router.use('/contacts', auth, contactsRouter);

export default router;
