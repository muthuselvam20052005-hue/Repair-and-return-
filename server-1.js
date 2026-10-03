const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Customer page - root la customer.html kaamikkanum
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'customer.html'));
});

// Org page
app.get('/org', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'org.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('Server running on ' + PORT);
});
