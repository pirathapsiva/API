require('dotenv').config();

const express = require('express');
var cors =require('cors')
var app = express();

app.use(cors());
app.get('/',(req,res) => {
  res.send('Hello World');
});

 
app.listen(process.env.PORT, () =>
  console.log('Example app listening on port ${process.env.PORT}!'),
);

