import usersRoute from './users';

const ROUTES = [
    {key: 'users', handler: usersRoute},
]

export default (app) => ROUTES.map(route => app.use(`/api/${route.key}`,route.handler));
    