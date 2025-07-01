const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter { };

const schoolBell = new SchoolBell();
schoolBell.on("ring", () => {
    console.log("yahoo!!!, class shes");
})
schoolBell.on("ring", () => {
    console.log("oh ! have a one class");
})
schoolBell.on("broken", () => {
    console.log("oh no ! class ki aj shes hobe na ");
})
schoolBell.emit("ring");
schoolBell.emit("broken");