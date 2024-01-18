const http = require("node:http");

function sayHello(name) {
  console.log(`Hello , ${name}`);
}

// sayHello("Nikita");
//import
const logger = require("./logger");

// console.log(module);

// logger.log("medwfjkjnfdkjn");

const server = http.createServer();
server.listen(3000);

// http.createServer((req,res)=>{
//     //req from fetch
//     //res from back

// })
