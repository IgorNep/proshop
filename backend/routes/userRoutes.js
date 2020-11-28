import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.js';

import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userController.js';

router.route('/login').post(authUser);
router.route('/profile').get(protect, getUserProfile);
router.route('/').post(registerUser);

export default router;
