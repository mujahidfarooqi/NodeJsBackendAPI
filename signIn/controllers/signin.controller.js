const model = require('../models/signin.model');
exports.login = (req, res, callBack) => {
    model.add(req.body, function (result) {
        callBack(result);
    });
};
