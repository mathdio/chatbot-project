import express from 'express';
import errorHandler from './middlewares/ErrorHandler';
import characterRouter from './routes/CharacterRouter';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => res.status(200).send({ message: 'API is up!' }));
app.use('/characters', characterRouter);

app.use(errorHandler);

export default app;