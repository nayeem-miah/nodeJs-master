
````markdown
# Node.js, CommonJS vs ESM, and File System (`fs`) Module

This project explains key concepts in Node.js, including the difference between **CommonJS** and **ESM** modules, and how to use the **`fs` (File System)** module to work with files.

---

## 🔷 What is Node.js?

**Node.js** is a JavaScript runtime built on Chrome's V8 engine. It allows developers to write server-side code in JavaScript.

### Key Features:
- Asynchronous & event-driven
- Non-blocking I/O
- Built-in modules (like `fs`, `http`, etc.)
- Ideal for building APIs, web servers, and real-time apps

---

## 📦 Module Systems in Node.js

### 1. CommonJS (CJS)
- Default in Node.js
- Uses `require()` and `module.exports`

**Example:**

```js
// commonjs-example.js
const fs = require('fs');

function greet(name) {
  console.log(`Hello, ${name}!`);
}

module.exports = greet;
````

### 2. ECMAScript Modules (ESM)

* Modern JavaScript module system
* Uses `import` and `export`
* Use `.mjs` extension or set `"type": "module"` in `package.json`

**Example:**

```js
// esm-example.mjs
import fs from 'fs';

export function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

### Summary

| Feature        | CommonJS                      | ESM (ECMAScript Modules)                |
| -------------- | ----------------------------- | --------------------------------------- |
| Import         | `require()`                   | `import`                                |
| Export         | `module.exports`              | `export`                                |
| File extension | `.js`                         | `.mjs` or `.js` with `"type": "module"` |
| Use Case       | Older projects, quick scripts | Modern apps, browser compatibility      |

---

## 📂 File System Module (`fs`)

The `fs` module provides file system-related operations.

### 🔹 Reading a File (Asynchronous)

```js
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### 🔹 Writing a File

```js
fs.writeFile('output.txt', 'Hello from Node.js!', (err) => {
  if (err) throw err;
  console.log('File has been saved!');
});
```

### 🔹 Reading a File (Synchronous)

```js
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);
```

### 🔹 Using `fs/promises` with `async/await` (ESM-style)

```js
import { readFile } from 'fs/promises';

const data = await readFile('file.txt', 'utf8');
console.log(data);
```

---

## ✅ Getting Started

1. Install Node.js from [https://nodejs.org](https://nodejs.org)
2. Clone this repo or copy code examples
3. Run using:

```bash
# CommonJS
node commonjs-example.js

# ESM
node esm-example.mjs
```

---

## 📎 References

* [Node.js Documentation](https://nodejs.org/en/docs)
* [MDN JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

---

## 📌 License

This project is licensed under the MIT License.


