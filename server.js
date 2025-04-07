const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
require('events').EventEmitter.defaultMaxListeners = 20

// 加载环境变量
require('dotenv').config()

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Handle the root route to send the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
