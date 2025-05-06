const express = require('express');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

let tasks = [];
let nextId = 1;

// Render the page with current tasks
app.get('/', (req, res) => {
  res.render('index', { tasks });
});

// Add new task (from form)
app.post('/addTask', (req, res) => {
  const { taskName } = req.body;
  if (taskName) {
    tasks.push({ id: nextId++, taskName });
  }
  res.redirect('/');
});

// Delete task by ID
app.delete('/task/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
