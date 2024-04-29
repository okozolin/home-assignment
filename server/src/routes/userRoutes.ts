import express from 'express';
import { getAllUsers } from '../user/userController';

const router = express.Router();

router.get('/', getAllUsers);

export default router;
