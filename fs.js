const fs = require('fs');
console.log('*****************');
var data  = fs.readFileSync('hello.js', {encoding:'utf-8'});
console.log(data);


console.log('################');
fs.readFile('hello.js', {encoding:'utf-8'}, function(err, data){
    console.log('22222222');
    console.log(data);
})
console.log('4444444');