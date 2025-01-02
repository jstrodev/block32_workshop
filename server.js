const express = require("express");
const app = express();
const PORT = 3000;

// IMPORTANT: This middleware must come before routes
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// Make sure this path matches your actual file location
const employeesRouter = require('./routes/employees');
app.use('/employees', employeesRouter);

// Error handlers
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
