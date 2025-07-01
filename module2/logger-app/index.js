// console.log(process.argv)
const path = require("path");
const fs = require("fs")
const inputArgument = process.argv.slice(2);
const text = inputArgument.join(" ").concat("\n");
const timeStands = new Date().toString();
const message = `${text} ${timeStands} \n`
if (!message) {
    console.log("❌ please provide a message to log");
    console.log("Example : node index.js hello world");
    process.exit(1)
}
const filePath = path.join(__dirname, "log.txt")
fs.appendFile(filePath, message, { encoding: "utf-8" }, () => {
    console.log("path log success");
})