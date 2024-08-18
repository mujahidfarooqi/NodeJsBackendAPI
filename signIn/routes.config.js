const controller = require('./controllers/signin.controller');

exports.routesConfig = function (app) {
    app.route('/api/login').post( function (req, res) {
        controller.login(req, res, function (result) {
            res.json(result);
        });
    });
    
};