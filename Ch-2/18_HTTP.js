// HTTP Module

var http = require("http");
//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("<h1>Hello World!</h1>"); //write a response to the client
    res.end(); //end the response
}).listen(3124); //Server listening on port


{/* localhost always accept is more than 3000 value. 
    send = response
    200 = ok server.
    run = localhost:port address(3124)
*/}