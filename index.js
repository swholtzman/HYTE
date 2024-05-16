// index.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'Main' directory
app.use(express.static(path.join(__dirname, 'Main')));

// Send 'main.html' for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Main', 'main.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
