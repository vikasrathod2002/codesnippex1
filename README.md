![Screenshot 2025-03-03 205004](https://github.com/user-attachments/assets/0c677e0d-8637-4fa2-aa97-6f13861f8eab)


   # 🧩 CodeSnippeX - Full-Stack Code Snippet Management Application
    🌐 Live Demo : https://codesnippex1-5.onrender.com/
    
**CodeSnippeX** is a fully-featured **code snippet management platform** built using the **MERN stack** — MongoDB, Express.js, React.js, and Node.js. This platform allows users to securely create, store, manage, and search for code snippets with advanced ranking and popularity features.

---

## 🚀 Tech Stack

| Technology     | Purpose                                   |
|----------------|-------------------------------------------|
| **MongoDB**    | Database for storing user data and code snippets |
| **Express.js** | Backend framework for handling API requests |
| **React.js**   | Frontend for dynamic user interface       |
| **Node.js**    | Server-side logic and API management      |
| **JWT Auth**   | Secure user authentication & authorization |
| **CSS**        | Custom styling for UI components          |
| **JavaScript** | Core scripting language for frontend & backend |

---

## ✨ Key Features

✅ **Full-Stack Development** — Built with **MERN (MongoDB, Express.js, React.js, Node.js)** stack.  
✅ **User Authentication** — Secure **JWT-based authentication & authorization** for registration and login.  
✅ **CRUD Operations** — Full support for **creating, reading, updating, deleting** code snippets.  
✅ **Snippet Search & Filtering** — Easily search and filter snippets by title, tags, or programming language.  
✅ **Popularity-Based Ranking** — Implemented an **upvote/downvote system** to rank popular snippets higher.  
✅ **Responsive Design** — Fully responsive interface optimized for desktop, tablet, and mobile devices.  
✅ **RESTful API** — Clean, well-structured API endpoints for managing user accounts and snippets.  
✅ **Error Handling & Validation** — Comprehensive backend validation and error responses.  
✅ **Token Expiry & Refresh** — Added token expiration and refresh logic for improved security.  

---

## 📂 Folder Structure
    client                # React Frontend
    /src
        /components    # Reusable UI components (Header, Footer, etc.)
        /pages         # Main pages (Home, Dashboard, Login, Register, etc.)
        /services      # API handlers (axios functions)
        /context       # Global context for state management
        /assets        # Static files (icons, images, etc.)
        /styles        # CSS files

    /server                # Node.js + Express Backend
      /routes            # API routes (auth, snippets, etc.)
      /controllers       # Route handler functions (business logic)
      /models            # Mongoose schemas (User, Snippet, etc.)
      /middleware        # Authentication and error-handling middleware
      /utils             # Utility functions (JWT handling, etc.)
     /config            # Database connection and environment configuration
---

## 🔐 Authentication & Security

- Secure **JWT-based authentication** for registration, login, and protected routes.
- Passwords hashed using **bcrypt** before storing in MongoDB.
- Tokens stored securely in **HTTP-Only Cookies** to prevent XSS attacks.
- Input validation using libraries like **Joi/Yup** to prevent malicious input.
- Proper **CORS configuration** to allow secure cross-origin requests.

---

## ⚙️ Core Functionalities

### 🔑 User Management
- Register new users
- Login with secure password verification
- JWT token issuance on successful login
- Edit user profiles

### 📝 Code Snippet Management
- Create new code snippets with title, tags, and description
- Edit and update existing snippets
- Delete snippets (soft delete or permanent)
- Search snippets by **title**, **tags**, or **language**

### 📊 Ranking & Popularity
- **Upvote/Downvote System** to determine snippet popularity
- Snippets with higher votes are ranked higher in search results
- Prevent users from voting multiple times on the same snippet

---

    📊 API Documentation
     Endpoint	Method	Description
    /api/auth/register	POST	Register new user
    /api/auth/login	POST	Login user
    /api/snippets	GET	Fetch all snippets
    /api/snippets/:id	GET	Fetch snippet by ID
    /api/snippets	POST	Create new snippet
    /api/snippets/:id	PUT	Update snippet
    /api/snippets/:id	DELETE	Delete snippet
    /api/snippets/:id/vote	POST	Upvote/Downvote snippet
---
     Install Dependencies
     Backend (Server)
     cd server
     npm install

     Frontend (Client)
     cd client
     npm install

     Environment Variables
     backend/.env
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-secret-key
     PORT=8080
     REACT_APP_API_BASE_URL=http://localhost:8080

     Run Application Locally
     Start Backend Server
     cd server
     npm run dev

     Start Frontend Server
     cd client
     npm start

     Access Application
     Open your browser at: http://localhost:3000

  🔗 Follow Me
📧 Contact: vikassrathod2002@gmail.com
