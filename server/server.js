const express = require('express');
const app = express();
let bodyParser = require('body-parser')
let quotes = [];
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, () => {
    console.log('Listening on port:', port);
    
})

app.get('/quotes', (req, res)=> {
    console.log('Handing the GET request for /quotes');
    res.send(quotes);
})

app.post('/quotes', (req, res)=>{
    console.log('in POST hit for /quotes route', req.body);
    
    quotes.push(req.body);
    console.log(quotes);
    
    res.sendStatus(200);
})