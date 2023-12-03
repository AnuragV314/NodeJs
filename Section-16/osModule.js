let os = require('os')

console.log("Hostmname: " + os.hostname())
console.log("Platform: " + os.platform())
console.log("Architecture: " + os.arch())
console.log("CPU: " + os.cpus())
console.log("Network Interfaces: " + os.networkInterfaces())
console.log("Type: " + os.type())
console.log("Uptime: " + os.uptime())

console.log("OS: "+os.release())
console.log("Total Memory: " + os.totalmem())
console.log("Free Memory: " + os.freemem())

console.log("Home Directory: " + os.homedir())
console.log("Temparary Directory: " + os.tmpdir())


