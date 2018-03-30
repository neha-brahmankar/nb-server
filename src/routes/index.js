import usersRoute from './users';

export default (app) => {
    app.use('/users', usersRoute);
}