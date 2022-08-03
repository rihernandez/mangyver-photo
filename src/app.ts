import express, { Application} from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express'
import swaggerDocs from './swagger/swagger-doc'

import indexRoutes from './routes/index'

// Initializations
const app: Application = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

// Routes
app.use('/api/v1', indexRoutes);

// this folders for this application will be used to store public file images
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;