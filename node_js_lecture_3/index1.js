const http=require("http");
const fs=require("fs");
const path=require("path");

const server=http.createServer((req,res)=>{
    // if(req.url==="/index"){
    //     fs.readFile(path.join(__dirname,"public","index.html"),(err,data)=>{
    //     if(err) console.log(err)
    //     res.writeHead(200,{"Content-Type":"text/html"})
    //     res.end(data);
    //     })
    // }
    // else if(req.url==="/about"){
    //         fs.readFile(path.join(__dirname,"public","about.html"),(err,data)=>{
    //         if(err) console.log(err)
    //         res.writeHead(200,{"Content-Type":"text/html"})
    //         res.end(data);
    //     })
    // }
    // else if(req.url==="/services"){
    //         fs.readFile(path.join(__dirname,"public","services.html"),(err,data)=>{
    //         if(err) console.log(err)
    //         res.writeHead(200,{"Content-Type":"text/html"})
    //         res.end(data)
    //     })
    // }
    // else{
    //         fs.readFile(path.join(__dirname,"public","error.html"),(err,data)=>{
    //         if(err) console.log(err)
    //         res.writeHead(404,{"Content-Type":"text/html"})
    //         res.end(data);
    //     })
    // }  

    //Build File Path
    let filePath=path.join(__dirname,"public",req.url==="/"?"index.html":req.url)
    // console.log(filePath);

    //Extension of the file
    let extname=path.extname(filePath)

    //initial content type
    let ContentType="text/html"

    switch(extname){
        case '.js':
            ContentType="text/javascript"
            break;
        case '.css':
            ContentType="text/css"
            break;
        case '.png':
            ContentType="text/png"
            break;
        case '.jpg':
            ContentType="text/jpeg"
            break;
    }
    //read file
    fs.readFile(filePath,(err,content)=>{
        if(err){
            fs.readFile(path.join(__dirname,"public","error.html"),(err,data)=>{
                if(err) console.log(err)
                res.writeHead(404,{"Content-Type":ContentType})
                res.end(data);
            })
        }
        else{
            fs.readFile(filePath,(err,data)=>{
                if(err) console.log(err)
                res.writeHead(200,{"Content-Type":ContentType})
                res.end(data)
            })
        }
    })
})
const PORT=3200;
server.listen(PORT,()=>console.log(`Server is running at port ${PORT}`))
