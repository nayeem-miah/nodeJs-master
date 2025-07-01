//1  synchronous
//  file read/ I/O interactive task ----> single thread --> not go thread pool-->


// 2 asynchronous
//  file read ---> single thread --> Even loop --> thread pool ---> task completing

const fs = require("fs");
console.log("task1 ");
// writeFileSync and readFileSync
const text = "learning file system"

fs.writeFileSync("./hello.txt", text);

console.log("task2 ");

const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });
console.log("task3 ");
console.log(data);
console.log("task4");