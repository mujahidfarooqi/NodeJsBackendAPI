const dbHelper = require('../../../helpers/db.helper');
const queryHelper = require('../queries/employee.queries');

exports.get = (data, callBack) => {
    let sql = queryHelper.getSelectAll();
    dbHelper.executeSelectCommand(sql, [], function (obj) {
        callBack(obj);
    });
};
exports.add = (data, callBack) => {
    let sql = queryHelper.getInsert(data);
    dbHelper.executeSelectCommand(sql, [], function (obj) {
    callBack({ Status: obj.Status, Message:obj.Message, Data: data});
    });
};
exports.delete = (data, callBack) => {
    let sql = queryHelper.getDelete(data);
    dbHelper.executeSelectCommand(sql, [], function (obj) {
        callBack(obj);
    });
};
exports.update = (data, callBack) => {
    let sql = queryHelper.getUpdate(data);
    dbHelper.executeSelectCommand(sql, [], function (obj) {
        callBack(obj);
    });
};