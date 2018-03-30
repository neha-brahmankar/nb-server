import express from 'express';
import { configureMiddlewares, errorHandler, dbConnection } from "./utils";
import configureRoutes from './routes';

const app = express();
configureMiddlewares(app);
dbConnection();
configureRoutes(app);

errorHandler(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, (server) => console.log(`Server listening at ${PORT}`));
