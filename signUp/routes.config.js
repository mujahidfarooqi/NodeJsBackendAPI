const controller = require('./controllers/signup.controller');
exports.routesConfig = function (app) {
    app.route('/api/signup').post( function (req, res) {
        controller.signup(req, res, function (result) {
            res.json(result);
        });
    });
    
};
