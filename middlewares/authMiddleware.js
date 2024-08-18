const jwt = require('jsonwebtoken');
const fs = require('fs-extra');
let rawdata = fs.readFileSync('config.json');
let config = JSON.parse(rawdata);
exports.verifyToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    
    if (typeof bearerHeader !== "undefined") {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;

        console.log('Received token:', bearerToken);

        // Verify the token
        jwt.verify(req.token, config.jwt.jwt_secret, (err, authData) => {
            if (err) {
                console.error('Token verification error:', err);
                res.status(403).json({ message: 'Invalid token', error: err.message });
            } else {
                req.authData = authData;
                next();
            }
        });
    } else {
        res.sendStatus(403);
    }
};
