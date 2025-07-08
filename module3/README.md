## 📁 Final Folder Structure:

```
todo-ts-app/
│
├── src/
│   ├── app/
│   │   └── todos/
│   │       └── todos.routes.ts
│   ├── config/
│   │   └── mongodb.ts
│   ├── app.ts
│   └── server.ts
│
├── .env
├── tsconfig.json
├── package.json
└── README.md
```

---

### 📄 `src/app.ts`

```ts
import express, { Application, Request, Response, NextFunction } from "express";
import todosRouter from "./app/todos/todos.routes.js";

const app: Application = express();

app.use(express.json());

// routes
app.use("/todos", todosRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  next();
}, async (req: Request, res: Response) => {
  res.send("Welcome to Todo App");
});

// test error
app.get("/error", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // throw new Error("Test Error");
    res.send("Something went wrong");
  } catch (error) {
    next(error);
  }
});

// not found route
app.use((req: Request, res: Response) => {
  res.status(404).send({
    message: "Route not found"
  });
});

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  res.status(400).json({
    message: "Something went wrong",
    error: error.message || error
  });
});

export default app;
```

---

### 📄 `src/server.ts`

```ts
import app from "./app.js";
import { client } from "./config/mongodb.js";

const port = 5000;

const bootstrap = async () => {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
  }
};

bootstrap();
```

---

### 📄 `src/config/mongodb.ts`

```ts
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb://localhost:27017/todosDB";

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
```

---

### 📄 `src/app/todos/todos.routes.ts`

```ts
import express, { Request, Response } from "express";
import { client } from "../../config/mongodb.js";
import { ObjectId } from "mongodb";

const todosRouter = express.Router();
const db = client.db("todosDB").collection("todos");

// Get all todos
todosRouter.get("/all-todos", async (req: Request, res: Response) => {
  const result = await db.find().toArray();
  res.send(result);
});

// Create a todo
todosRouter.post("/create-todos", async (req: Request, res: Response) => {
  const todos = req.body;
  const result = await db.insertOne(todos);
  res.send(result);
});

// Get single todo
todosRouter.get("/todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await db.findOne({ _id: new ObjectId(id) });
  res.json(result);
});

// Update todo
todosRouter.put("/update/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const { title, description, priority, isCompleted } = req.body;

  const result = await db.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        title,
        description,
        priority,
        isCompleted
      }
    },
    { upsert: true }
  );

  res.send(result);
});

// Delete todo
todosRouter.delete("/deleted/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await db.deleteOne({ _id: new ObjectId(id) });
  res.json(result);
});

export default todosRouter;
```

---

### 📄 `.env`

```
PORT=5000
```

---

### 📄 `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Node",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

---

### 📄 `package.json` (scripts part)

```json
"scripts": {
  "dev": "nodemon src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
},
"type": "module"
```

---

### 📄 `README.md`

```md
# 📝 TypeScript Todo API

A simple and modular Todo API built using **TypeScript**, **Express.js**, and **MongoDB**.

## 🚀 Features

- Create, Read, Update, Delete Todos
- Modular Folder Structure
- Global Error Handling
- ESM + TypeScript Support

---

## 📁 Folder Structure

```

src/
├── app/                    # Todos feature logic
│   └── todos/
│       └── todos.routes.ts
├── config/                 # MongoDB connection
│   └── mongodb.ts
├── app.ts                  # Express app setup
└── server.ts               # Server startup

````

---

## 🛠 Setup Instructions

### 1. Clone and Install

```bash
git clone https://github.com/your-username/todo-ts-app.git
cd todo-ts-app
npm install
````

### 2. Start MongoDB

Make sure MongoDB is running locally:

```bash
mongod
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build and Run Production

```bash
npm run build
npm start
```

---

## 📬 API Endpoints

| Method | Route                 | Description       |
| ------ | --------------------- | ----------------- |
| GET    | `/todos/all-todos`    | Get all todos     |
| POST   | `/todos/create-todos` | Create a new todo |
| GET    | `/todos/todo/:id`     | Get a todo by ID  |
| PUT    | `/todos/update/:id`   | Update a todo     |
| DELETE | `/todos/deleted/:id`  | Delete a todo     |

---

## 🧑‍💻 Tech Stack

* TypeScript
* Express.js
* MongoDB (Native Driver)
* Nodemon + ts-node
* ESM module system

---
