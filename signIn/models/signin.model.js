const dbHelper = require('../../helpers/db.helper');
const queryHelper = require('../queries/signin.queries');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs-extra');
const path = require('path');

// Use __dirname to get the current directory of the executing script
const configPath = path.join('D:/myproj/Node.jsBackend/NodeJsBackendAPI', 'config.json');
let rawdata = fs.readFileSync(configPath);
let config = JSON.parse(rawdata);

exports.add = async (data, callBack) => {
    let sql = queryHelper.getUser(data);
    dbHelper.executeSelectCommand(sql, [], async function (obj) {
        var signInData = obj.Data;
        if (signInData.length > 0) {
            try {
                // Compare the password asynchronously
                const isMatch = await bcrypt.compare(data.password, signInData[0].hashpassword);
                
                if (isMatch) {
                    // Generate JWT token
                    jwt.sign({ user: data }, config.jwt.jwt_secret, (error, token) => {
                        if (error) {
                            console.error('Error generating token:', error);
                            return callBack({ Status: 'Error', Message: 'Error generating token' });
                        }

                        console.log(token);
                        callBack({ token });
                    });
                } else {
                    callBack({ Status: 'Error', Message: 'Invalid password' });
                }
            } catch (err) {
                console.error('Error verifying password:', err);
                callBack({ Status: 'Error', Message: 'Internal server error' });
            }
        } else {
            callBack({ Status: 'Error', Message: 'User not found' });
        }
    });
};
