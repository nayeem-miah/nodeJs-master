
# 📝 TypeScript Todo API

A simple RESTful API for managing todos built with **TypeScript**, **Express.js**, and **MongoDB**. This project follows a modular file structure with proper error handling and development tools.

---

## 📁 Folder Structure

```

src/
├── app/            # Todos route handler
│   └── todos/
├── config/         # MongoDB config
├── app.ts          # Express setup
└── server.ts       # Server bootstrap

````

---

## 🚀 Getting Started

### 1. Clone and Install
```bash
git clone https://github.com/nayeem-miah/nodeJs-master.git
cd cd nodeJs-master/module3
npm install
````

### 2. Start MongoDB

```bash
mongod
```

### 3. Run in Development

```bash
npm run dev
```

### 4. Build and Run in Production

```bash
npm run build
npm start
```

---

## 📬 API Endpoints

| Method | Endpoint              | Action            |
| ------ | --------------------- | ----------------- |
| GET    | `/todos/all-todos`    | Get all todos     |
| POST   | `/todos/create-todos` | Create a new todo |
| GET    | `/todos/todo/:id`     | Get todo by ID    |
| PUT    | `/todos/update/:id`   | Update todo       |
| DELETE | `/todos/deleted/:id`  | Delete todo       |

---

## 🧑‍💻 Tech Stack

* TypeScript + Express.js
* MongoDB (Native Driver)
* ESM Module System
* Nodemon + ts-node (Dev)

