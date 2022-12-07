// const http=require("http");
// const server=http.createServer((req,res)=>{
//     //console.log(req.url)
    
// })
// const PORT=2000;
// server.listen(PORT,()=>console.log(`The server is running at port ${PORT}`))


const http=require('http')
const fs=require("fs");
const path=require("path");
const server=http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url==="/"){
        fs.readFile(path.join(__dirname,"public","index.html"),(err,data)=>{
            if(err) console.log(err)
            res.writeHead(200,{"Content-Type": "text/html"})
            res.end(data)
        })
    }
})
const PORT=3000;
server.listen(PORT,()=>console.log(`Server is running at PORT ${PORT}`));