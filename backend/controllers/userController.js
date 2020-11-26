import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
});

export { authUser };
