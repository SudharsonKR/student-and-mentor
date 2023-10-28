const fs=require("fs")
// console.log(process.argv);

// const[, , name1, name2]=process.argv
// console.log("Output is", name1, name2);

// fs.readFile("./sampletext.txt",(err, data)=>{
// if(err){
//     console.log(err)
// }
// else{
//     console.log(data)
// }
// })


// fs.readFile("./sampletext.txt", "utf-8", (err, data)=>{if(err){
//     console.log(err)} else{console.log(data)}
// })

// fs.writeFile("./newWritefilecreate.txt","newly typed and crate write file", (err)=>
// {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("successfully created")
//     }
// })

// const content="\n appending for newly entered text"
// fs.appendFile("./sampletext.txt", content, (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("append results success")
//     }
// })

// fs.unlink("./newWritefilecreate.txt", (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("deleted successfully")
//     }
// })

const os = require("os")

console.log("Freememory:", os.freemem())
console.log("version", os.version())
console.log("cpu..", os.cpus())

/// Date packages..
let time = Date.now();
console.log("Time", time)

const date = new Date();
console.log("Date----", date)
console.log("Today----", date.getDate())
console.log("Month----", date.getMonth())
console.log("Year----", date.getFullYear())
console.log("UTCString----", date.toUTCString().slice(0,16))

console.log("toLocaleDateString----", date.toLocaleDateString())

console.log("current file direcotry:", __dirname)
console.log("current file direcotry:", __filename)

//fs. readdir (path, callbackFunction)