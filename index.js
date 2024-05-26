// HYTE/index.js
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const app = express();
const port = 3000;

// Serve the favicon from the 'Main/images' directory
app.use(favicon(path.join(__dirname, 'Main', 'images', 'favicon.png')));

// Serve static files from the 'HYTE' directory
app.use(express.static(path.join(__dirname)));

// Send 'main.html' for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Main', 'main.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});
