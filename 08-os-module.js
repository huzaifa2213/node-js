const os = require('os');

//Info about current user
const user = os.userInfo();
console.log(user);


//methods return the system uptime in seconds
console.log(`The System Uptime is ${os.uptime}`);


const currentOS= {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}

console.log(currentOS);