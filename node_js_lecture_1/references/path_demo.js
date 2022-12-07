const path=require("path");
//file name
console.log(__filename);
//directory name
console.log(path.dirname(__filename))
//File Extension
console.log(path.extname(__filename))
//concatenate
console.log(path.join(__dirname,'public','index.html'))


// // const path=require("path");
// // console.log(__filename);

// // const path=require("path")
// // console.log(path.dirname(__filename))


// const path=require("path");
// //console.log(path.extname(__filename));
// console.log(path.join(__dirname,'public','index.html'))