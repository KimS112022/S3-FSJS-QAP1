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
