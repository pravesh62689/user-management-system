

# User Management System

## Project Overview

This project is a **User Management System** built using the **MERN stack**. It provides functionality for managing users, associating hobbies, and visualizing their relationships interactively. The system incorporates modular components for scalability and maintainability.

---

## Features

- **User CRUD Operations**: Add, view, edit, and delete users.
- **Hobby Management**: Associate hobbies with users through drag-and-drop functionality.
- **Interactive Visualization**: Display user and hobby relationships using **React Flow**.
- **State Management**: Utilizes **Redux** for managing application state.
- **Fast Frontend Development**: Configured with **Vite** for efficient development and build processes.

---

## Technologies Used

- **Frontend**: React, Vite, React Flow, Redux Toolkit, Axios
- **Backend**: Node.js, Express, MongoDB
- **Database**: MongoDB (with Mongoose for ORM)

---

## Project Structure

### Frontend

```
frontend/
├── src/
│   ├── components/
│   │   ├── NodeVisualization.jsx   # Visualizes user and hobby relationships
│   │   ├── Sidebar.jsx             # Sidebar for draggable hobbies
│   │   └── UserForm.jsx            # Form for adding new users
│   ├── redux/
│   │   ├── slice.js                # Redux slice for managing users and hobbies
│   │   └── store.js                # Configures Redux store
│   ├── services/
│   │   └── api.js                  # API calls for interacting with the backend
│   └── App.jsx                     # Main application component
├── vite.config.js                   # Vite configuration
└── index.html                       # Entry point for the React app
```

### Backend

```
backend/
├── controllers/
│   ├── userController.js           # Handlers for user-related API endpoints
│   └── hobbyController.js          # Handlers for hobby-related API endpoints
├── models/
│   ├── User.js                     # Mongoose model for users
│   └── Hobby.js                    # Mongoose model for hobbies
├── routes/
│   ├── userRoutes.js               # User API routes
│   └── hobbyRoutes.js              # Hobby API routes
├── server.js                        # Entry point for the Express server
└── .env                             # Environment variables (e.g., MongoDB URI)
```

---

## How to Run

### Prerequisites

- **Node.js** (v14 or later)
- **MongoDB** (local or cloud instance)

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

![Screenshot 2025-01-16 221119](https://github.com/user-attachments/assets/4806d8d6-f1eb-487f-809c-feaec430d03d)
![Screenshot 2025-01-16 221101](https://github.com/user-attachments/assets/fe56f477-1ee4-4ed3-ac6b-7e80a234bb2a)
![Screenshot 2025-01-16 221257](https://github.com/user-attachments/assets/70f05c6a-10cc-4670-af1a-a37df3bd3ab8)
![Screenshot 2025-01-16 221212](https://github.com/user-attachments/assets/15a259a1-290e-4861-8868-dab6e365bb67)


## Usage

1. Start the backend and frontend servers as mentioned above.
2. Open the application in your browser (default URL: `http://localhost:5173`).
3. Use the UI to:
   - Add new users.
   - Drag hobbies from the sidebar and drop them onto users in the visualization area.
   - View relationships between users and their hobbies interactively.

---



