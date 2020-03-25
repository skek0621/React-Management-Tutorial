const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req,res) => {
    res.send([
        {
        'id' : 1,
        'image': 'https://placeimg.com/64/64/any',
        'name' : '차현민',
        'birthday' : '950621',
        'gender' : '여자',
        'job' : '직장인'
        },
        {
        'id' : 2,
        'image': 'https://placeimg.com/64/64/1',
        'name' : '정현우',
        'birthday' : '870301',
        'gender' : '남자',
        'job' : '공무원'
        },
        {
          'id' : 3,
          'image': 'https://placeimg.com/64/64/2',
          'name' : '정지원',
          'birthday' : '930306',
          'gender' : '여자',
          'job' : '직장인'
        }
      ])
});

app.listen(port,()=> console.log(`Listening on port ${port}`));