import express from 'express';
import { configureMiddlewares, errorHandler, dbConnection } from "./utils";
import configureRoutes from './app/routes';
import { CONNECTION_STRING } from './config';

const app = express();
app.use(express.static(`${__dirname}/public`));

configureMiddlewares(app);
dbConnection(CONNECTION_STRING);
configureRoutes(app);
errorHandler(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening at ${PORT}`));
