const model = require('../models/employee.model');

exports.get = (req, res, callBack) => {
    model.get(req.body, function (result) {
        callBack(result);
    });
};
exports.insert = (req, res, callBack) => {
    model.add(req.body, function (result) {
        callBack(result);
    });
};
exports.delete = (req, res, callBack) => {
    model.delete(req.body, function (result) {
        callBack(result);
    });
};
exports.update = (req, res, callBack) => {
    model.update(req.body, function (result) {
        callBack(result);
    });
};