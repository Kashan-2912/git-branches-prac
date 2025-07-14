const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (HTML, JS, etc.) from the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from express server!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
