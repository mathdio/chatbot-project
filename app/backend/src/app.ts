import express from 'express';
import errorHandler from './middlewares/ErrorHandler';
import userRouter from './routes/UserRouter';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => res.status(200).send({ message: 'API is up!' }));
app.use('/users', userRouter);

app.use(errorHandler);

export default app;