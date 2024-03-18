const express = require('express')
const mongoose = require('mongoose');

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))


// database and server connection
mongoose.connect('mongodb+srv://9845shashi:Mq5WrB42Venv2pxn@content.8c6lllb.mongodb.net/?retryWrites=true&w=majority&appName=content')
    .then(() => {console.log('Connected to database!')
        app.listen(8080, () => {
        console.log("server is running...");
        })
    })
    .catch(() => {
        console.log("Connection failed!")
})


app.get('/',(req, res) => {
    res.render('index.ejs')
})

app.get('/verify', (req, res) => {
    res.render('verify.ejs')
})


