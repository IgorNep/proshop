import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.js';

import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js';

router.route('/login').post(authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route('/').post(registerUser);

export default router;
