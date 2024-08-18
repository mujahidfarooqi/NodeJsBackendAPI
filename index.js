const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs-extra');
const jwt=require('jsonwebtoken');
const path = require('path');

// Use __dirname to get the current directory of the executing script
const configPath = path.join('D:/myproj/NodeService', 'config.json');
let rawdata = fs.readFileSync(configPath);
let config = JSON.parse(rawdata);

const route = require('./Routes.js');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
route.initializeRoutes(app);
const server = app.listen(config.Ports.serverPort, function () {
	const port = server.address().port;
    server.timeout = 108000;
    console.log(`Express Server Started at http://localhost:${port}`);
	
    
});