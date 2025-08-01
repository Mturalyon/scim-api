const express = require('express');
const app = express();

// Example API route
app.get('/api/user', (req, res) => {
  res.json({ 
    name: 'Marius Sæteraas',
    id: "e5e499e0-e109-4dab-a016-a3dd16868c30",
    email: "marsat@signicat.com"
   });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});