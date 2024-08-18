const controller = require('./controllers/employee.controller');
const { verifyToken } = require('../../middlewares/authMiddleware');
const { auditLog } =require('../../middlewares/auditLogMiddleware');
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
