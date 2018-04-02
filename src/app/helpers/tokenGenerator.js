import JWT from 'jsonwebtoken';
import { JWT_SECRET } from '../../config';

export default (user) => JWT.sign({
    iss: 'nbServer',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1),
}, JWT_SECRET);