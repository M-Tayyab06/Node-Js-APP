const express = require("express");
const Task = require("../models/task");

const router = express.Router();
let tasks = []; // In-memory storage
let idCounter = 1;

// Get all tasks
router.get("/", (req, res) => {
    res.json(tasks);
});

// Get a specific task
router.get("/:id", (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});

// Create a new task
router.post("/", (req, res) => {
    const { title, description, dueDate } = req.body;
    const newTask = new Task(idCounter++, title, description, dueDate);
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Update a task
router.put("/:id", (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (task) {
        const { title, description, dueDate, completed } = req.body;
        if (title) task.title = title;
        if (description) task.description = description;
        if (dueDate) task.dueDate = dueDate;
        if (completed !== undefined) task.completed = completed;
        res.json(task);
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});

// Delete a task
router.delete("/:id", (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});

module.exports = router;
