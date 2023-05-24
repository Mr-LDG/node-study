const express = require('express'),
    app = express(),
    port = 3000,
    bird = require('./bird');


app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//////////////////////////////////////
app.route('/down')
    .get((req,res,next) => {
        console.log("다운로드 들어옴");
        // res.download('public/random.txt');
        // next();
    },(req,res) => {
        res.send('다운로드');
    });
//////////////////////////////////////    
app.get('/r', function(req, res, next) {
    console.log('first call r');
    next();
}, function (req, res) {
    console.log('second call r');
    res.send('this is second');
})

var cb0 = function(req,res,next) {
    console.log('cb0');
    next();
}
var cb1 = function(req,res,next) {
    console.log('cb1');
    next();
}
var cb2 = function(req,res,next) {
    console.log('cb2');
    res.send('this callback test');
}
app.get('/r2', [cb0, cb1, cb2]);

app.get('/dynamic', function(req,res) {
    let list = '';
    for(i=0; i<5; i++) {
        list += `<li>this is list${i}`;
    }

    let time = Date();

    let output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

    </head>
    <body>
        ${list}
        <br>
        ${time}
    </body>
    </html>
    `

    res.send(output);
});

app.get('/pug', function(req, res) {
    res.render('index', {title: 'Hey', message: 'Hello there~', item: 'tems', time: Date()});
})
app.get('/form', function(req, res) {
    res.render('form');
})
app.post('/form_receiver', function(req, res) {
    console.log(req.body);
    res.send("it's post!!!!");
})
app.get('/topic', function(req, res) {
    var topics = [
        'menu1',
        'menu2',
        'menu3'
    ];
    let text = topics[req.query.id-1];

    var links = `
        <a href='/topic?id=1'> menu1 </a><br>
        <a href='/topic?id=2'> menu2 </a><br>
        <a href='/topic?id=3'> menu3 </a><br>
        ${text}
    `

    res.send(links);
    
})
app.get('/semantic/:id', function(req, res) {
    var topics = [
        's Menu1',
        's Menu2',
        's Menu3'
    ];
    let text = topics[req.params.id-1];

    var links = `
        <a href='/semantic/1'> this is semantic menu1 </a><br>
        <a href='/semantic/2'> this is semantic menu2 </a><br>
        <a href='/semantic/3'> this is semantic menu3 </a><br>
        ${text}
    `

    res.send(links);
    
})
/////////////////////////////////////////////////////

app.use('/bird', bird);
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/node_modules/bootstrap'));

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});