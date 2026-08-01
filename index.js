require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('welcome to about page')
})

app.get('/login', (req, res) => {
  res.send('<h1> welcome to login page </h1>')
})

app.get('/sinup', (req, res)=>{
  res.send("<em><h1> welcome to sinup page </h1></em>")
})

app.get('/name', (req, res)=>{
  res.send("<em><h2> my name is sirajul </h2></em>")
})

app.get('/friend', (req, res)=>{
  res.send("<em><h2> my friends are Arian, etc. </h2></em>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})