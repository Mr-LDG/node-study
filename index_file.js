const express = require('express');
const fs = require('fs');
const app = express();
const port = 3030;

app.set('views', './views_file');
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    console.log("들어오긴함..?");
    res.send('this is mini app');
})

app.get('/menu/new', function(req,res) {
    
    res.render('new');
})

app.post('/menu', function(req, res) {
    let title = req.body.title;
    let desc = req.body.description;

    fs.writeFile('data/'+title, desc, function(err) {
        if(err) {
            console.log(err);
            res.status(500).send('Internal server error')
        }
        res.redirect('/menu');
    })
})

app.get(['/menu', '/menu/:name'], function(req, res) {

    fs.readdir('data/', function(err, files) {
        if(err) {
            console.error(err);
            res.status(500).send('Internal server error')
        }
        
        console.log('files > ',files);
        
        if(req.params.name) {
            let filename = req.params.name;
            fs.readFile('data/'+filename, {encoding: 'utf-8'}, (err, data) => {
                if(err) {
                    logger.error(err);
                    res.status(500).send('Internal server error')
                }
                
                res.render('file-list', {list: files, title: filename, content: data});
            });
        } else {
            res.render('file-list', {list: files, title: '제목', content: '내용'})
        }
    }) 
})

app.use(express.static(__dirname+'/public_file'));
app.use(express.static(__dirname+'/node_modules/bootstrap'));

app.listen(port, () => {
    console.log(`file app start with ${port}`)
})