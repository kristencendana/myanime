// Here we downloaded express (for backend), app (for server), and path (for pathing)
const express = require('express');
const app = express();
const path = require('path');



// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../dist/build')));

// FIRST, need to get proper log-in credentials
  // need to get first HTML element (for login) with root '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
})

// AFTER login, then on second page show display of anime list


// IF GIVEN MORE TIME,
// need to get anime information using fetch request to API





app.listen(3000) //listens on port 3000 -> http://localhost:3000/