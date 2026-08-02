require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT;

const welcome_page = 
`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome</title>

<style>
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:Arial, Helvetica, sans-serif;
    }

    body{
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background:linear-gradient(135deg,#d8f3dc,#95d5b2);
    }

    .card{
        background:white;
        padding:50px 70px;
        border-radius:20px;
        text-align:center;
        box-shadow:0 12px 30px rgba(0,0,0,0.15);
        margin: 10px;
        box-sizing: border-box;
    }

    h1{
        color:#1b4332;
        font-size:48px;
        margin-bottom:10px;
    }

    p{
        color:#52796f;
        font-size:18px;
    }

    button{
        margin-top:25px;
        padding:12px 28px;
        border:none;
        border-radius:10px;
        background:#2d6a4f;
        color:white;
        font-size:16px;
        cursor:pointer;
        transition:0.3s;
    }

    button:hover{
        background:#1b4332;
        transform:translateY(-2px);
    }
</style>
</head>
<body>

<div class="card">
    <h1>🌿 Welcome</h1>
    <p>Glad you're here. Have a wonderful day!</p>
    <button>Get Started</button>
</div>

</body>
</html>
`

app.get('/', (req, res) => {
  res.send(welcome_page)
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