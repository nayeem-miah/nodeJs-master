

## 📦 Module 4 - Node.js with TypeScript (MVC Pattern)

This project follows the **MVC (Model-View-Controller)** architecture using **Node.js**, **Express**, and **TypeScript**.

---

### 📁 Folder Structure:

```
module4/
│
├── dist/                       # Compiled JS files
├── node_modules/               # Dependencies
├── src/                        # Source code
│   ├── app/
│   │   ├── controllers/        # Route handler logic (controllers)
│   │   │   ├── notes.controller.ts
│   │   │   └── user.controller.ts
│   │   ├── interfaces/         # TypeScript interfaces for models
│   │   │   ├── notes.interface.ts
│   │   │   └── user.interface.ts
│   │   └── models/             # Mongoose models
│   │       └── user.model.ts
│   ├── app.ts                  # Express app configuration
│   └── server.ts               # Server entry point
│
├── .env                        # Environment variables
├── .gitignore                  # Git ignored files
├── package.json                # Project metadata and scripts
├── package-lock.json           # Dependency lock file
├── README.md                   # Project documentation
└── tsconfig.json               # TypeScript compiler options
```

---

### 🚀 How to Run This Project

Follow these steps to clone and run the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/nayeem-miah/nodeJs-master.git

# 2️⃣ Go to the project folder
cd nodeJs-master/module4

# 3️⃣ Install dependencies
npm install

# 4️⃣ Create a .env file and add your MongoDB URI and other configs
touch .env

# Example .env content:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/module4DB

# 5️⃣ Run the development server (with ts-node-dev)
npm run dev

# OR build and run the compiled code
npm run build
npm start
```

---

### ⚙️ Technologies Used

* Node.js
* Express.js
* TypeScript
* MongoDB + Mongoose
* dotenv

---

### ✍️ Author

**MD Nayeem Miah**
📧 [nayeem5113a@gmail.com](mailto:nayeem5113a@gmail.com)
🌐 [Portfolio](ahttps://nayeem-miah.vercel.app)

