const dbHelper = require('../../helpers/db.helper');
const queryHelper = require('../queries/signup.queries');
const bcrypt = require('bcrypt');

exports.add = async (data, callBack) => {
    var signUpData = data;
    try {
        const saltRounds = 10;
        // Await the hash operation correctly
        const hashedPassword = await bcrypt.hash(signUpData.password, saltRounds);

        // Update signInData with the hashed password
        signUpData.hashPassword = hashedPassword;

        // Generate the SQL query
        let sql = queryHelper.getInsert(signUpData);

        // Execute the SQL command
        dbHelper.executeSelectCommand(sql, [], function (obj) {
            callBack({ Status: obj.Status, Message: obj.Message });
        });
    } catch (err) {
        console.error('Error hashing password:', err);
        callBack({ Status: 'Error', Message: 'Internal server error' });
    }
};
