var express = require("express");
var app = express();
//**Routes **/
// "/" -> "hi there"
// "/bye" -> "GoodBye"
// "/dog" -> "Meow"

//define the route
//request and response
app.get("/", function(req, res){
    res.send("Hi There");
});

// Tell Express to listen for request (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});