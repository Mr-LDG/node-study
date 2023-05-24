var express = require('express'),
    router = express.Router();

router.use(function timelog(req, res, next) {
    console.log(`Time: ${Date.now()}`);
    next();
});

router.get('/', function(req,res){
    res.send('Birds home page');
});

router.get('/about', function(req,res) {
    res.send('About bird');
});

module.exports = router;