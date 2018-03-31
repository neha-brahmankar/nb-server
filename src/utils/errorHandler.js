export default (app) => {
    app.use((req, res, next) => {
        const err = new Error('Requested service is unavailable');
        err.status = 404;
        next(err);
    });
    app.use((err, req, res, next) => {
        const error = app.get('env') === 'development' ? err : {}
        const status = err.status || 500;
        //Response client
        res.status(status).json({
            error: {
                message: error.message
            }
        });
        //Response ourselves
        console.log('Error', err)
    });
}