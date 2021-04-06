const http=require("http"); //  Import http Module 
const fs=require("fs"); // Import fs Module 
const hostname="127.0.0.1"; // Set local host
const port=3000; // set port
 
const home=fs.readFileSync("index.html"); 
const about=fs.readFileSync("about.html");
const services=fs.readFileSync("services.html");
const contact=fs.readFileSync("contact.html");


const server=http.createServer((req, res)=>{

    res.statusCode=200
    res.setHeader("content-type","text/html");
    console.log(req.url)
    url=req.url

    if (url=="/")
    {
        res.end(home);
    }
    
    else if (url=="/about")
    {
        res.end(about);
    }
    
    else if (url=="/services")
    {
        res.end(services);
    }
    
    else if (url=="/contact")
    {
        res.end(contact);
    }

    else
    {
        res.statusCode=404
        res.end("<h1>404 Not Found</h1>")
    }

})

// listen the server
server.listen(port, hostname , ()=>{
    console.log(`Server Running At: http://${hostname}:${port}/`)
})
