import logger from 'morgan';
import bodyParser from 'body-parser';

//get app instance and configure middlewares
export default (app) => {
    app.use(logger('dev'));
    app.use(bodyParser.json());
}