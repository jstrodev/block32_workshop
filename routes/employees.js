const express = require('express');
const router = express.Router();
const employees = require('../employees');  // Import the existing employees array

// GET all employees
router.get('/', (req, res) => {
    res.json(employees);
});

// POST new employee
router.post('/', (req, res) => {
    const { name } = req.body;
    
    // Validate name
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).send('Name is required and must be a non-empty string');
    }

    // Create new employee with unique ID
    const newId = Math.max(...employees.map(e => e.id)) + 1;
    const newEmployee = {
        id: newId,
        name: name.trim()
    };
    
    // Add to array and send response
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});

module.exports = router;