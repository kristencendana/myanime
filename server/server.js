// Here we downloaded express (for backend), app (for server), and path (for pathing)
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const mongoose = require('mongoose');
// the mongoDB database
const MONGO_URI = "mongodb+srv://kcendana:testing1234@cluster0.hnq6jje.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: "people",
})
.then(() => {
  console.log("Connected to Mongo DB.")
  // console.log(NODE_ENV);
  // console.log(process.env.NODE_ENV);
})
.catch((err) => console.log(err));

// controllers:
const userController = require("./controllers/userController");
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');
// app.use('/static', express.static(path.join(__dirname, '../client/build//static')));
// app.get('*', function(req, res) {
//   res.sendFile('index.html', {root: path.join(__dirname, '../../client/build/')});
// });

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../dist/build')));
app.use(express.json());
app.use(express.urlencoded());
// FIRST, need to get proper log-in credentials
  // need to get first HTML element (for login) with root '/'
  // app.get('*', function(req, res) {
  //   res.sendFile('index.html', {root: path.join(__dirname, '../../dist/build')});
  // });
app.get('/', cookieController.setCookie, (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
})

// app.get('/proxy', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../index.html'));
// })
// for css styling
// app.get("/styles.css", (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname + "/client/styles.css"));
// });

//actual
// app.get("/api/signup", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/signup.html"));
// });
// if clicks sign up
//proxy
app.get("/signup", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/signup.html"));
});

// app.post('/api/signup', userController.createUser, (req, res) => {
//   return res.status(200).redirect("/");
// })

//posting signup
app.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).redirect("/"); // maybe redirect??
})
//cookieController.setSSIDCookie,

// login userController.verifyUser,
app.post('/login', userController.verifyUser, cookieController.setSSIDCookie, 
(req, res) => {
  return res.status(200).send("User Found and Logged In!");
  // .sendFile(path.resolve(__dirname, "../client/loggedin.html"));
})
// app.post('/api/login', (req, res) => {
//   return res.status(200).redirect("/success");
//   // .sendFile(path.resolve(__dirname, "../client/loggedin.html"));
// })

// AFTER login, then on second page show display of anime list


// IF GIVEN MORE TIME,
// need to get anime information using fetch request to API



//errors
// local error handler status = 404
app.use("/", (req, res) => {
  return res.status(404).sendFile(path.join(__dirname + "/client/404.html"));
});

// global errors
// Global error handling middleware
// How can we trigger this to run?
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
}); //listens on port 3000 -> http://localhost:3000/