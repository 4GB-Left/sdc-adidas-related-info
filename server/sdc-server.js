// require dependencies
const express = require('express');
const path = require('path');

// declare constant
const PORT = 5000;
const app = express();

// define express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));


// Add listener on application
app.listen(PORT, () => {
  console.log(`Server is listening on port: http://localhost:${PORT}`)
});














