Here’s a professional, well-structured README file for your **Library Management System API** project:

---

# 📚 Library Management System API

A backend API built for managing a **library system** where staff and members can efficiently handle **books, memberships, borrowing, and returning activities**. The system is built using **Prisma ORM, Node.js, Express.js, PostgreSQL, and TypeScript**.

---

## 🚀 Live Deployment

🔗 **Live URL:** \[Your Deployed Link Here]

---

## 🛠️ Technology Stack

* **Node.js** – Server-side JavaScript runtime
* **Express.js** – Web framework for routing and middleware
* **Prisma ORM** – Type-safe database ORM
* **PostgreSQL** – Relational database
* **TypeScript** – Strongly typed language for JavaScript
* **UUID** – For unique identification of records

---

## 📂 Database Schema

### **Book Table**

| Field           | Type   | Description                     |
| --------------- | ------ | ------------------------------- |
| bookId (PK)     | UUID   | Unique identifier for each book |
| title           | String | Title of the book               |
| genre           | String | Genre/category                  |
| publishedYear   | Int    | Year of publication             |
| totalCopies     | Int    | Total number of copies          |
| availableCopies | Int    | Copies available for borrowing  |

### **Member Table**

| Field          | Type     | Description                       |
| -------------- | -------- | --------------------------------- |
| memberId (PK)  | UUID     | Unique identifier for each member |
| name           | String   | Member’s name                     |
| email          | String   | Unique email                      |
| phone          | String   | Contact number                    |
| membershipDate | DateTime | Date joined                       |

### **BorrowRecord Table**

| Field         | Type     | Description                       |
| ------------- | -------- | --------------------------------- |
| borrowId (PK) | UUID     | Unique identifier for each record |
| borrowDate    | DateTime | Date when book was borrowed       |
| returnDate    | DateTime | Nullable, date when returned      |
| bookId (FK)   | UUID     | References Book                   |
| memberId (FK) | UUID     | References Member                 |

---

## 🔑 Key Features

✅ **Book Management** – Add, view, update, delete books
✅ **Member Management** – Register, update, delete members
✅ **Borrow & Return System** – Borrow books, track returns
✅ **Overdue Tracking** – Identify overdue borrow records (14-day policy)
✅ **Error Handling** – Consistent error response structure

---

## 📌 API Endpoints

### **Books**

* `POST /api/books` – Create a book
* `GET /api/books` – Get all books
* `GET /api/books/:bookId` – Get a book by ID
* `PUT /api/books/:bookId` – Update a book
* `DELETE /api/books/:bookId` – Delete a book

### **Members**

* `POST /api/members` – Create a member
* `GET /api/members` – Get all members
* `GET /api/members/:memberId` – Get a member by ID
* `PUT /api/members/:memberId` – Update a member
* `DELETE /api/members/:memberId` – Delete a member

### **Borrow & Return**

* `POST /api/borrow` – Borrow a book
* `POST /api/return` – Return a book

### **Overdue**

* `GET /api/borrow/overdue` – Get overdue borrow list

---

## ⚠️ Error Handling

All errors follow a consistent response structure:

```json
{
  "success": false,
  "status": <HTTP_STATUS_CODE>,
  "message": "<Error message>"
}
```

Example:

```json
{
  "success": false,
  "status": 404,
  "message": "Invalid book ID"
}
```

---

## 🛠️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/b3-assignment-8.git
   cd b3-assignment-8
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables** (`.env`)

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/librarydb"
   PORT=5000
   ```

4. **Run Prisma migrations**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the server**

   ```bash
   npm run dev
   ```

---

## 🧪 Testing the API

You can test using **Postman**, **Thunder Client**, or `curl`.

Example:

```bash
curl -X GET http://localhost:5000/api/books
```

---

## 🐞 Known Issues / Limitations

* No authentication/authorization implemented
* Return policy fixed at **14 days** (not configurable)
* Minimal validation on phone number format

---

## 📌 Submission Requirements

* ✅ Live backend deployment (Supabase/Render/other)
* ✅ GitHub repository with at least **10 meaningful commits**

---

## 👨‍💻 Author

Developed by **\[Raiyan]** 🚀
Part of **Apollo-Level2-Web-Dev – Assignment 8**

---

