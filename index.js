const express = require('express'); // Import the Express library
const app = express(); // Create an Express application
const path = require("path");

app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req, res) => { 
  res.sendFile(path.join(__dirname, 'public', 'index.html')); 
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}`); 
});
