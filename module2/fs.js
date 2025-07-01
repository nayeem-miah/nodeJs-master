//1  synchronous
//  file read/ I/O interactive task ----> single thread --> not go thread pool-->


// 2 asynchronous
//  file read ---> single thread --> Even loop --> thread pool ---> task completing

//  read file asynchronous
const fs = require('fs');
let text = "loading text......learning node js"
console.log("task 1");
const data = fs.readFile('./hello.txt', { encoding: "utf8" }, (error, data) => {
    if (error) {
        console.log("something went wrong !", error);
    }
    text = data;
    console.log(data);
}
);
console.log(text);
console.log("task 3");

//  asynchronous write file
const text2 = "hello write file in node js";
fs.writeFile("./hello.txt", text, { encoding: "utf8" }, (err) => {
    if (err) {
        console.log("Something is error", err);
        return;
    }
    console.log('File written successfully!');

})