var express = require('express');
var app = express();

let comments = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
// app.get('/', function(req, res) {
//   res.render('index', { num:3});
// });

app.get('/', function(req, res) {
    res.render('index', { comments: comments });
  });

app.get('/create', function(req, res) {
    console.log(req.query)
  res.send('hi');
});

app.post('/create', function(req, res) {
    console.log(req.body)

    const  { content } = req.body;

    comments.push(content);
  res.redirect('/');
});

app.listen(8080);
console.log('Server is listening on port 8080');

/*
SQL lite
- RDB(Relational Database) 의 한 종류다.

CRUD (Create Read Update Delete)

*/

app.get('/', async function(req, res) {
  const comments = await Comments.findAll();

  res.render('index', { comments: comments});
});

app.post('/create', async function(req, res) {
  console.log(req.body);

  const { content } = req.body; //request된 객체 중 body에 담긴 내역을 content라는 객체에 담아라.
  await Comments.create({content: content});
  //Comments라는 table에 생성할 것이다. 무엇을? 새 정보를.
    //content라는 컬럼에 변수 content의 값을.

  res.redirect('/');
});

app.post('/update/:id', async function(req, res) {
  console.log(req.params);
  console.log(req.body);

  const { content } = req.body;
  res.redirect('/');
});

app.post('/delete/:id', async function(req, res) {
  console.log(req.params);
  const { id } = req.params
  
  await Comments.destroy({
    where: {
      id: id
    }
  });

  res.redirect('/')
});