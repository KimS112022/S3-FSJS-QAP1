// Node.js
// Core Modules and Examples
// Question 1

// http = This module allows creation of an HTTP server and HTTP requests.  Provides classes, methods and events to handle HTTP related operations.  Commonly used to build webservers and interact with APIs.
// http uses = create server instances, handle incoming requests, and send responses.

// Sample code to create an HTTP server:

// Import the 'http' module
const http = require("http");

// Create a server instance
const server = http.createServer((req, res) => {
  // Set the response status and content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  // Send a response to the client
  res.end("Hello, World!");
});

// Start the server and listen on a specific port
server.listen(3000, "localhost", () => {
  console.log("Server running at http://localhost:3000/");
});

// fs = this module allows you to interact with the file system. Provides methods for reading, writing, updating, deleting and manipulating files and directories.
// fs uses= mainly for working with files, performing file related operations and building file based applications.

// Sample code to read a file and log its info:

// Import the 'fs' module
const fs = require("fs");

// Read a file asynchronously
fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Log the file contents
  console.log(data);
});

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
