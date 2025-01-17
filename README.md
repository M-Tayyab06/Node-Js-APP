# Node-Js-APP

# Task Manager API

## Overview
The Task Manager API is a Node.js application that allows users to manage their tasks programmatically. It provides RESTful endpoints for creating, reading, updating, and deleting tasks.

---

## Features
- Create tasks with a title, description, due date, and completion status.
- View all tasks or specific tasks by ID.
- Update task details or mark them as complete.
- Delete tasks when they are no longer needed.

---

## Requirements
To run this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [Git](https://git-scm.com/)

---

## Installation

### Clone the Repository
```bash
git clone https://github.com/M-Tayyab06/Node-Js-APP.git
cd Node-Js-APP
```

### Install Dependencies
```bash
npm install
```

---

## Usage

### Running the Server
Start the server locally:
```bash
npm start
```
The API will be available at `http://localhost:3000`.

---

## API Endpoints

### Base URL
`http://localhost:3000/api`

### Endpoints

#### 1. **Get All Tasks**
**GET** `/tasks`
- **Description**: Retrieve a list of all tasks.
- **Response**:
  ```json
  [
    {
      "id": 1,
      "title": "Learn Node.js",
      "description": "Study REST APIs and Express.js",
      "dueDate": "2025-01-20",
      "completed": false
    }
  ]
  ```

#### 2. **Get a Specific Task**
**GET** `/tasks/:id`
- **Description**: Retrieve details of a specific task by ID.
- **Response**:
  ```json
  {
    "id": 1,
    "title": "Learn Node.js",
    "description": "Study REST APIs and Express.js",
    "dueDate": "2025-01-20",
    "completed": false
  }
  ```

#### 3. **Create a Task**
**POST** `/tasks`
- **Description**: Add a new task.
- **Body** (JSON):
  ```json
  {
    "title": "Write documentation",
    "description": "Prepare the project README",
    "dueDate": "2025-01-22"
  }
  ```
- **Response**:
  ```json
  {
    "id": 2,
    "title": "Write documentation",
    "description": "Prepare the project README",
    "dueDate": "2025-01-22",
    "completed": false
  }
  ```

#### 4. **Update a Task**
**PUT** `/tasks/:id`
- **Description**: Update a task’s details.
- **Body** (JSON):
  ```json
  {
    "title": "Write documentation (Updated)",
    "completed": true
  }
  ```
- **Response**:
  ```json
  {
    "id": 2,
    "title": "Write documentation (Updated)",
    "description": "Prepare the project README",
    "dueDate": "2025-01-22",
    "completed": true
  }
  ```

#### 5. **Delete a Task**
**DELETE** `/tasks/:id`
- **Description**: Remove a task by ID.
- **Response**: Status `204 No Content`.

---

## Docker Integration

### Dockerfile
The project includes a `Dockerfile` for containerization:
```dockerfile
# Use Node.js LTS as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

### Build and Run the Docker Container

1. Build the Docker image:
   ```bash
   docker build -t task-manager-api .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 task-manager-api
   ```

---

## Testing
Use **Postman** or **cURL** to interact with the API. See the "API Endpoints" section for details.

---
