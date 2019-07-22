const cluster = require('cluster');

const numCPUs = require('os').cpus().length;



// When script is run initially it will be the master
if (cluster.isMaster) {
    // Start a new fork for each CPU
    for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
      console.log('connected CPU = ',i);
    }

    cluster.on('exit', function(worker, code, signal) {
      console.log('worker ' + worker.process.pid + ' died');
    });
} else { // If script was called from cluster.fork() it is not the master
    
    // Run Server
    const app = require('./app');
    const port = process.env.PORT || 5000;
    app.listen(port);
    console.log(`Server listening at ${port}`);
    console.log(`connect api : http://localhost:${port}/`);
}