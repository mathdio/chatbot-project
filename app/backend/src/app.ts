import express from 'express';
require('express-async-errors');
import errorHandler from './middlewares/ErrorHandler';
import userRouter from './routes/UserRouter';

const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/health', (_req, res) => res.status(200).send({ message: 'API is up!' }));
app.use('/users', userRouter);

app.use(errorHandler);

export default app;