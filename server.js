// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Set the content type to HTML
    res.setHeader('Content-Type', 'text/html');

    // Read the index.html file
    const filePath = path.join(__dirname, 'index.html');
    const stream = fs.createReadStream(filePath);

    // Pipe the file content to the response
    stream.pipe(res);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
