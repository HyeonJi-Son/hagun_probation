// console.log("Hello world!")

// var figlet = require("figlet");

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

const express = require('express')
const app = express()
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Example application listening on port ${port}`)
})