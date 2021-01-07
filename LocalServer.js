module.exports = function startServer() {
    const http = require("http");

    const port = process.env.PORT || 3000; // make sure the port matches the one you register with iMIS

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>ASI JS Client</h1>");
    });

    server.listen(port, () => {
        console.log(`Server running at port ${port}`);
    });
};
