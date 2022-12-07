const os=require('os');
//platform
console.log(os.platform())
//cpu arch
console.log(os.cpus().length)
//architecture
console.log(os.arch())
//free memory
console.log(os.freemem())
//total memory
console.log(os.totalmem());
//uptime
console.log(os.uptime())