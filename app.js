const express = require("express");
const app = express();
const port = 8080;
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session')

app.use(cookieParser())
app.use(express.json())

app.use(cookieSession({
    name: 'user_session', // name of the cookie
    httpOnly: true,
    sameSite: 'strict',
    secret: '*******',
  }))
  
  app.get('/login', function (req, res, next) {
//   app.post('/login', function (req, res, next) {
    // if (loginSuccess(req.body.username, req.body.password)) {
    //   req.session.username = req.body.username;
      req.session.username = 'Harkerfield';
    // }

    let userNameData = req.session.username;
    res.status(200).send(`<span>APPROVED</span><p>Logged in: ${userNameData}. \n Navigating away in 3.2.1.</p>`);
  })


app.get('/hello', function(req, res) {
    let userNameData = req.session.username;
    res.status(200).send(`<p>Hello: ${userNameData}.</p>`);
})



app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
