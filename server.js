const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/public/home.html')
});

app.get('/dashboard', (req, res) => 
{
    res.sendFile(__dirname+'/public/dashboard.html')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))