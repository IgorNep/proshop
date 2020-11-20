import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@sample.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Will Smith',
    email: 'smith@sample.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Maria Sharapova',
    email: 'mshar@sample.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
