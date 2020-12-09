import express from 'express';
const router = express.Router();
import { protect,admin } from '../middleware/authMiddleware.js';

import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers
} from '../controllers/userController.js';

router.route('/login').post(authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route('/').post(registerUser).get(protect,admin,getUsers);

export default router;
