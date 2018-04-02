import expressRouter from 'express-promise-router';
import { UsersController } from '../controllers';
import routeHelpers from '../helpers';

const router = expressRouter();
const { validateBody, schemas } = routeHelpers;

router.route('/signup')
    .post(validateBody(schemas.authSchema),UsersController.signup);

router.route('/signin')
    .post(UsersController.signin);

router.route('/secret')
    .get(UsersController.secret);

export default router;