import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });
app.listen(PORT, () =>
  console.log(
    `Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
