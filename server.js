const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, 'build');

port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`, publicPath);
});
