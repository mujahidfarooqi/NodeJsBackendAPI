const fs = require('fs-extra')
const Examples = require('./src/employee/routes.config');
const SignIn = require('./src/signIn/routes.config');
const SignUp = require('./src/signUp/routes.config');
module
.exports = function () {
    /**
     * Set up routes and middleware of the express server
     * */
    let initializeRoutes = (app) => {

        app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Credentials', 'true');
            res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
            res.header('Access-Control-Expose-Headers', 'Content-Length');
            res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
            if (req.method === 'OPTIONS') {
                return res.send(200);
            } else {
                return next();
            }
        });

        Examples.routesConfig(app);
        SignIn.routesConfig(app);
        SignUp.routesConfig(app);
        
    };

    return {
        initializeRoutes
    };
}();