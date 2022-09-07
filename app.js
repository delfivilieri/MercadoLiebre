const express = require('express')
const app = express()
const path = require('path')

app.listen(process.env.PORT || 3032, function(){
    console.log('Servidor activo')
})

app.use(express.static(path.join(__dirname , './public')))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname , './views/home.html'))
})


app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname , './views/login.html'))
})

app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname , './views/register.html'))
})