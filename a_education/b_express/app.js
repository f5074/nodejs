const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var port=process.env.PORT || 80;

app.use(express.static(__dirname + '/'));
// app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Hello World!\n');
 });

app.listen(port);

app.get('/public', (req, res) => {
  return res.render('./public/index.html');
});


// 1. 리스트 조회
app.get('/users', (req, res) => {
  return res.json(users);
});

// 2. 특정 아이디 조회
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(400).json({error: 'Incorrect id'});
  }

  let user = users.filter(user => user.id === id)[0]
  if (!user) {
    return res.status(404).json({error: 'Unknown user'});
  }

  return res.json(user);
});

// 3. 특정 아이디 삭제
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(400).json({error: 'Incorrect id'});
  }

  const userIdx = users.findIndex(user => user.id === id);
  if (userIdx === -1) {
    return res.status(404).json({error: 'Unknown user'});
  }

  users.splice(userIdx, 1);
  res.status(204).send();
});

// 4. 특정 아이디 추가
app.post('/users', (req, res) => {
  const name = req.body.name || '';
  if (!name.length) {
    return res.status(400).json({error: 'Incorrenct name'});
  }
  const id = users.reduce((maxId, user) => {
    return user.id > maxId ? user.id : maxId
  }, 0) + 1;
  const newUser = {
    id: id,
    name: name
  };
  users.push(newUser);
  return res.status(201).json(newUser);
});


// pesudo code
let users = [
  {
    id: 1,
    name: 'alice'
  },
  {
    id: 2,
    name: 'bek'
  },
  {
    id: 3,
    name: 'chris'
  }
]

