// Create web server
const http = require("http");
const server = http.createServer(function(req, res) {
  // Write HTTP header
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  // Send response body "Hello World"
  res.end("Hello World\n");
});
// Print URL for accessing server
console.log("Server running at http://