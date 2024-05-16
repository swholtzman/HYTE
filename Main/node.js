const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs").promises;

// Configuration
const port = process.env.PORT || 8000;

// Serve static files from the "hyteTestPage" directory
app.use(express.static(path.join(__dirname, 'hyteTestPage')));

// Serve favicon.ico from "hyteTestPage"
app.use('/favicon.ico', express.static(path.join(__dirname, 'hyteTestPage/favicon.ico')));

// Define a route for the home page
app.get("/", async (req, res) => {
    try {
        // Asynchronously read the HTML document from the file system
        const doc = await fs.readFile(path.join(__dirname, 'hyteTestPage/test.html'), 'utf8');
        res.send(doc);
    } catch (error) {
        console.error("Error reading HTML file:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Generic 404 route
app.use((req, res) => {
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
