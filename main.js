var http=require('http');

var server=http.createServer(function(req,res){

    if(req.url=="/"){

        res.writeHead(200,{'Content-Type':'Text/html'});
        res.write('<h1>Debashis Roy</h1>Full Stack Developer<p></p>');
        res.end();


    }
    else if(req.url=="/About"){
        res.writeHead(200,{'Content-Type':'Text/html'});
        res.write('<h1>About</h1> <p>I am a Software Engineer. I Am Mern Stact Developer</p>');
        res.end();



    }
    else if(req.url=="/Contact"){
        res.writeHead(200,{'Content-Type':'Text/html'});
        res.write('<h1>Contact:</h1><p>Phn:0129323, Email:asd@gmail.com</p>');
        res.end();



    }



    

});


server.listen(5050);
console.log("Server run successfully!");