/* -----figlet 사용----- */

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

/* -----expres 설치----- */

const express = require('express')
var cors = require('cors')

const app = express()
const port = 3000;

app.use(cors())

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(port, () => {
//     console.log(`Example application listening on port ${port}`)
// })

/* -----동물 소리 API 구현하기 ----- */

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dog', function (req, res) {
  res.send("<a href='https://www.youtube.com/watch?v=1NRp0FyJO1Q&list=PLU9-uwewPMe0sQkZlOhnhl8MRb_uFJBID&index=26'>조코딩 유튜브</a>")
})

app.get('/cat', function (req, res) {
  res.json({'sound' : 'Meow'})
})

app.get('/sound/:name', function (req, res) {
  const { name } = req.params

  if(name == "dog"){
    res.json({'sound' : '멍멍'})
  }else if(name == "cat"){
    res.json({'sound' : '야옹'})
  }else if(name == "pig"){
    res.json({'sound' : '꿀꿀'})
  }else {
    res.json({'sound' : '알수없음'})
  }

})


app.listen(port, () => {
    console.log(`Example application listening on port ${port}`)
})

app.get('/user/:id', (req, res) => {
    const q = req.params;
    console.log(q);

})

app.get('/user/:id', (req, res) => {
  // const q = req.params;
  // console.log(q);

  const q = req.query;
  console.log(q)

  res.json({'userid': q.id})

})

