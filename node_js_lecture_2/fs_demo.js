// const fs=require('fs')
// const path=require("path")

// //create folder
// // fs.mkdir(path.join(__dirname,"/test"),function(err){
// //     if(err) console.log(err)
// //     console.log("folder is created successfully.");
// // })



// //create file
// // fs.writeFile(path.join(__dirname,'/test',"hello.txt"),"This is the new file in which new text is write",function(err){
// //     if(err) console.log(err)
// //     console.log("The folder is created successfully!!!");
// // })

// // read file
// fs.readFile(path.join(__dirname,"/test","hello.txt"),'utf8',function(err,data){
//     if(err) console.log(err);
//     console.log(data)
// })

// //rename file
// fs.rename(path.join(__dirname,"/test","hello.txt"),path.join(__dirname,"/test","greetings.txt"),function(err){
//     if(err) console.log(err)
//     console.log("File renamed successfully!!!")
// })

const fs=require("fs")
const path=require("path")

// fs.mkdir(path.join(__dirname,"/test2"),function(err){
//     if(err) console.log(err)
//     console.log("Folder created successfully.");
// })

// fs.writeFile(path.join(__dirname,"/test2","text2.txt"),"This is the new file and we are here creating some new text.",function(err){
//     if(err) console.log(err)
//     console.log("Text write in the file successfully");
// })

// fs.readFile(path.join(__dirname,"/test2","text2.txt"),"utf-8",function(err,data){
//     if(err) console.log(err)
//     console.log("The data shown to the user successfully")
//     console.log(data);
// })

fs.rename(path.join(__dirname,"/test2","hello2.txt"),path.join(__dirname,"/test2","hello.txt"),function(err){
    if(err) console.log(err)
    console.log("The file name renamed successfully.")
})