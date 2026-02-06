// Import Node.js built-in HTTP module
// This allows us to create a web server
const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
  // HOME ROUTE
  // This runs when the user visits http://localhost:3000/
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Successful \n");
    res.end("Server is running");
  }

  // DIRECTOR AGGREGATES ROUTE
  // This runs when the user visits http://localhost:3000/director/aggregates
  else if (req.url === "/director/aggregates" && req.method === "GET") {
    // Mock (hard-coded) aggregated data
    const totals = {
      revenue: 10000,
      orders: 250,
      products: 18,
    };

    // Convert JavaScript object to JSON string
    const json = JSON.stringify(totals);

    // Send success response with JSON headers
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(json);
  }

  // ANY OTHER URL
  // If the route does not exist, return 404
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
