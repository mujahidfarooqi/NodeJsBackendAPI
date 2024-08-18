const dbHelper = require('../helpers/db.helper');
const queryHelper = require('../src/auditLogs/queries/auditlog.queries');
const { getCurrentDateTime } = require('../helpers/constants');

exports.auditLog = (req,res, next) => {
    const user = req.authData.user ? req.authData.user.username : 'anonymous'; // Assuming req.user is set after authentication
    const details = {};
    details.user=user;    
    details.method=req.method;
    details.url= req.originalUrl;
    details.body= req.body;
    details.params= req.params;
    details.date=getCurrentDateTime();
  const sql = queryHelper.getInsert(details);
  dbHelper.executeSelectCommand(sql, [], function (obj) {
    next();
});
};
