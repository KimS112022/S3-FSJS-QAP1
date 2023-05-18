// os = this module provides functions for interacting with the operating system.  Provides methods to get info regarding the operating system, ie. hostname, platform,memory usage, etc.
// os uses= in addition to above, also allows you to work with the file system, network interfaces and process related operations.

// Sample code to retrieve operating system info:

// Import the 'os' module
const os = require("os");

// Get the hostname of the operating system
const hostname = os.hostname();
console.log("Hostname:", hostname);

// Get the platform of the operating system
const platform = os.platform();
console.log("Platform:", platform);

// Get the CPU architecture of the operating system
const cpuArch = os.arch();
console.log("CPU Architecture:", cpuArch);

// Get the total memory available on the operating system
const totalMemory = os.totalmem();
console.log("Total Memory:", totalMemory);

// Get the free memory available on the operating system
const freeMemory = os.freemem();
console.log("Free Memory:", freeMemory);
