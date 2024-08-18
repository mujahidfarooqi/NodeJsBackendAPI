const controller = require('./controllers/example.controller');
const { verifyToken } = require('../authMiddleware.js');
const jwt=require('jsonwebtoken');
const bodyParser = require('body-parser');
const fs = require('fs-extra');
let rawdata = fs.readFileSync('config.json');
let config = JSON.parse(rawdata);
exports.routesConfig = function (app) {
    
    app.route('/api/employees/get').post(verifyToken, function (req, res) {
        controller.get(req, res, function (result) {
            res.json(result);
            if(result.Data.length >0)
            {
                console.log('Employees Data is retrieved')
            }
        });
    });
    app.route('/api/employees/add').post( function (req, res) {
        controller.insert(req, res, function (result) {
            res.json(result);
        });
    });
    app.route('/api/employees/delete').post( function (req, res) {
        controller.delete(req, res, function (result) {
            res.json(result);
        });
    });
    app.route('/api/employees/edit').post( function (req, res) {
        controller.update(req, res, function (result) {
            res.json(result);
        });
    });
};
