require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT;

const welcome_page = 
`
<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
    <style>
        /* Center everything on the screen */
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: sans-serif;
            background-color: #f4f4f9;
        }

        /* Style the welcome text box */
        .welcome-box {
            text-align: center;
            padding: 20px;
            border: 2px solid #333;
            border-radius: 8px;
            background-color: white;
        }

        h1 {
            color: #2c3e50;
            margin: 0;
        }
    </style>
</head>
<body>

    <!-- HTML Layout -->
    <div class="welcome-box">
        <h1>Welcome!</h1>
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