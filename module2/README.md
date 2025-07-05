# 📝 Raw Node.js Todo App (File-Based CRUD API)

A lightweight **Todo CRUD API** built with **Raw Node.js** (without Express).  
All data is stored in a local JSON file.

---

## 📁 Project Structure

```

todo-app/
├── server.js              # Node.js server with all routes
└── db/
└── todos.json         # Stores all todos

````

---

## ⚙️ How to Run

```bash
# Clone the repo
git clone https://github.com/nayeem-miah/nodeJs-master/tree/main/module2

cd todo-app-nodejs

# Make sure todos.json exists inside db/ and is initialized like:
# []
mkdir db
echo [] > db/todos.json

# Run the server
node server.js
````

Server runs at:
📍 `http://localhost:5000`

---

## 📬 API Endpoints

### 🔹 Create Todo

* **POST** `/todo/create-todo`
* **Body** (JSON):

```json
{
  "title": "Learn Node",
  "description": "Understand core modules"
}
```

* ✅ Returns: Created todo object

---

### 🔹 Get Single Todo

* **GET** `/todo?title=Learn Node`
* ✅ Returns: Matching todo by title

---

### 🔹 Get All Todos

* **GET** `/todo/getall`
* ✅ Returns: All saved todos

---

### 🔹 Update Todo

* **PATCH** `/todo/update-todo?title=Learn Node`
* **Body** (JSON):

```json
{
  "description": "Updated task description"
}
```

* ✅ Returns: Updated todo

---

### 🔹 Delete Todo

* **DELETE** `/todo/delete-todo?title=Learn Node`
* ✅ Returns: Success message if found

---

## 🧠 Notes

* Each todo has: `title`, `description`, and `createAt`
* All todos are stored in `db/todos.json`
* Search is based on `title` (must be unique)

---

## 🛠️ Technologies

* Node.js (`http`, `fs`, `path`)
* JSON File I/O
* No external libraries

---

## 📄 Sample Todo Data

```json
[
  {
    "title": "Learn Node",
    "description": "Understand core modules",
    "createAt": "7/5/2025, 1:20:35 PM"
  }
]