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
