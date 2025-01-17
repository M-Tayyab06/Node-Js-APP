class Task {
    constructor(id, title, description, dueDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
    }
}

module.exports = Task;
