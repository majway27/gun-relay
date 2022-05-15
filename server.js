const GUN = require('gun/gun');
var http = require('http');

//counter = 1
console.log('relay start')
//console.log('start counter: ' +  counter)
server = http.createServer(function (req, res) {
    //console.log('counter: ' +  counter)
    //counter = counter + 1
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

//const server = require('http').createServer().listen(8080);
const gun = GUN({web: server});