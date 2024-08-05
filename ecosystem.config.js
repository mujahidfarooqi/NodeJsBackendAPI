module.exports = {
    apps: [
        {
            name: 'MyService',
            script: './wrapper.js',
            args: 'D:/myproj/NodeService/dist/config.json', // Pass the config file if needed
            interpreter: 'none', // IMPORTANT: Tell PM2 not to use a Node.js interpreter
            out_file: 'D:/myproj/NodeService/logs/output.log', // Output log file
            error_file: 'D:/myproj/NodeService/logs/error.log', // Error log file
            instances: 'max',
            exec_mode: 'cluster',
            watch: false,
            autorestart: true, // Disable auto-restart for debugging
            env: {
                NODE_ENV: "production" // Set any environment variables needed
            }
        }
    ]
};
