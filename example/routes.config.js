const controller = require('./controllers/example.controller');
const { verifyToken } = require('../authMiddleware.js');
const { auditLog } =require('../auditLogMiddleware.js');
exports.routesConfig = function (app) {
    
    app.route('/api/employees/get').post(verifyToken, auditLog, function (req, res) {
        controller.get(req, res, function (result) {
            res.json(result);
            if(result.Data.length >0)
            {
                console.log('Employees Data is retrieved')
            }
        });
    });
    app.route('/api/employees/add').post(verifyToken, auditLog, function (req, res) {
        controller.insert(req, res, function (result) {
            res.json(result);
        });
    });
    app.route('/api/employees/delete').post(verifyToken, auditLog, function (req, res) {
        controller.delete(req, res, function (result) {
            res.json(result);
        });
    });
    app.route('/api/employees/edit').post(verifyToken, auditLog, function (req, res) {
        controller.update(req, res, function (result) {
            res.json(result);
        });
    });
};
