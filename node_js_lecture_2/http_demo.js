// const http=require("http");
// //create server
// const serverhandler=(req,res)=>{
//     console.log("Hello this is the test of the server");
//     res.write("<h1>Hello World!! This is nitin's own server</h1>")
//     res.end()
// }
// http.createServer(serverhandler).listen(5000,()=>console.log("Server is running at port 5000"));


// const http=require("http");
// const serverhandler=(req,res)=>{
//     console.log("This is the test of the server");
//     res.write("<h1> This is the current live of the server</h1>")
//     res.end();
// }
// http.createServer(serverhandler).listen(3000,()=>console.log("The server is running at prot 3000"));

const http=require("http");
const serverhandler=(req,res)=>{
    console.log("This is the test of the server");
    res.write("<h1>This is the webpage created by using node js <h1>")
    res.end()
}

http.createServer(serverhandler).listen(3000,()=>console.log("This server is running at port 3000")); 