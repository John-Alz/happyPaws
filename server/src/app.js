import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js'
import petRoutes from './routes/pets.routes.js'
import walkRouter from './routes/walks.routes.js';
import cookieParser from 'cookie-parser';
import usersRouter from './routes/users.routes.js';

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(cookieParser());

app.use('/api', authRoutes)
app.use('/api', petRoutes)
app.use('/api', walkRouter)
app.use('/api', usersRouter)

export default app;