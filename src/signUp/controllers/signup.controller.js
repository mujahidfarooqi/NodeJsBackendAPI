const model = require('../models/signup.model');
exports.signup = (req, res, callBack) => {
    model.add(req.body, function (result) {
        callBack(result);
    });
};