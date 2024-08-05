const { exec } = require('child_process');
const numCPUs = require('os').cpus().length;

for (let i = 0; i < numCPUs; i++) {
  const port = 15713 + i; // Assign a different port for each instance
  exec(`D:/myproj/NodeService/dist/MyService.exe ${port}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${err.message}`);
      return;
    }

    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }

    console.log(`Stdout: ${stdout}`);
  });
}
