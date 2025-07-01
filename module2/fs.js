//1  synchronous
//  file read/ I/O interactive task ----> single thread --> not go thread pool-->


// 2 asynchronous
//  file read ---> single thread --> Even loop --> thread pool ---> task completing

//  read file asynchronous
const fs = require('fs');

// fs.readFile('./helloWorld.txt', { encoding: "utf8" }, (error, data) => {
//     if (error) {
//         console.log("something went wrong !", error);
//     };


//     //  asynchronous write file
//     fs.writeFile("./hello.txt", data, { encoding: "utf8" }, (err) => {
//         if (err) {
//             console.log("Something is error", err);
//             return;
//         }
//         console.log('File written successfully!');

//     })
// }
// );

//  Stream and buffer
const readStream = fs.createReadStream("./helloWorld.txt", { encoding: "utf-8" });
const writeStream = fs.createWriteStream("./hello.txt", { encoding: "utf-8" });

readStream.on("data", (data) => {
    console.log(data);
    writeStream.write(data, (err) => {
        if (err) {
            throw Error("something is error", err)
        }
    })
});

// error catch
readStream.on("error", (err) => {
    if (err) throw Error("something is error", err)
})

// write stream error catch
writeStream.on("error", (err) => {
    if (err) {
        throw Error(err)
    }
});

readStream.on("end", () => {
    console.log("reading ended");
    writeStream.end();
});

writeStream.on("finish", () => {
    console.log("write successfully");
})