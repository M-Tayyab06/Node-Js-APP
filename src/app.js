const express = require("express");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/tasks");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/tasks", taskRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Task Manager API is running at http://localhost:${PORT}`);
});
