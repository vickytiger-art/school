// api.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

 // Enable CORS for all routes
// app.use(express.json());

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'vikram', // Replace with your DB password
  database: 'school'    // Replace with your DB name
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  }
  console.log('Database connected!');
});

// API Functions

/**
 * Register a new user
 * Endpoint: POST /register
 * Body Parameters: username, password
 */


/**
 * User login
 * Endpoint: POST /login
 * Body Parameters: username, password
 */
const loginUser = (req, res) => {
  const { username, password } = req.body;

  // Basic validation
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).send('Server error');
    }

    if (results.length === 0) {
      return res.status(400).send('User not found');
    }

    const user = results[0];

    // Simple password check (in real applications, use hashing)
    if (password !== user.password) {
      return res.status(401).send('Invalid credentials');
    }

    res.status(200).send('Login successfull');
  });
};

/**
 * Get all users
 * Endpoint: GET /users
 */
const getAllUsers = (req, res) => {
  const query = 'SELECT id, username, created_at FROM users';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).send('Server error');
    }

    res.status(200).json(results);
  });
};

/**
 * Get a specific user by ID
 * Endpoint: GET /users/:id
 */
const getUserById = (req, res) => {
  const userId = req.params.id;

  const query = 'SELECT id, username, created_at FROM users WHERE id = ?';
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).send('Server error');
    }

    if (results.length === 0) {
      return res.status(404).send('User not found');
    }

    res.status(200).json(results[0]);
  });
};

/**
 * Update a user's information
 * Endpoint: PUT /users/:id
 * Body Parameters: username, password
 */
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { username, password } = req.body;

  // Basic validation
  if (!username && !password) {
    return res.status(400).send('At least one field (username or password) is required to update');
  }

  // Build dynamic query based on provided fields
  let query = 'UPDATE users SET ';
  const fields = [];
  const values = [];

  if (username) {
    fields.push('username = ?');
    values.push(username);
  }

  if (password) {
    fields.push('password = ?');
    values.push(password);
  }

  query += fields.join(', ') + ' WHERE id = ?';
  values.push(userId);

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error updating user:', err);
      return res.status(500).send('Server error');
    }

    if (results.affectedRows === 0) {
      return res.status(404).send('User not found');
    }

    res.status(200).send('User updated successfully');
  });
};

/**
 * Delete a user
 * Endpoint: DELETE /users/:id
 */
const deleteUser = (req, res) => {
  const userId = req.params.id;

  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error deleting user:', err);
      return res.status(500).send('Server error');
    }

    if (results.affectedRows === 0) {
      return res.status(404).send('User not found');
    }

    res.status(200).send('User deleted successfully');
  });
};

// Add or Update Class
const addOrUpdateClasses = (req, res) => {
  const { classes } = req.body;

  // Validation
  if (!Array.isArray(classes) || classes.length === 0) {
    return res.status(400).send('Classes array is required and cannot be empty');
  }

  // Prepare queries for each class
  const queries = classes.map(({ class_name, status }) => {
    return new Promise((resolve, reject) => {
      if (!class_name || typeof status !== 'number') {
        return reject(new Error('Invalid class_name or status'));
      }

      const checkQuery = 'SELECT * FROM classes WHERE class_name = ?';
      db.query(checkQuery, [class_name], (err, results) => {
        if (err) return reject(err);

        if (results.length > 0) {
          // If class exists, update the status
          const updateQuery = 'UPDATE classes SET status = ?, date = CURRENT_DATE WHERE class_name = ?';
          db.query(updateQuery, [status, class_name], (err) => {
            if (err) return reject(err);
            resolve();
          });
        } else {
          // If class doesn't exist, insert a new record
          const insertQuery = 'INSERT INTO classes (class_name, status, date) VALUES (?, ?, CURRENT_DATE)';
          db.query(insertQuery, [class_name, status], (err) => {
            if (err) return reject(err);
            resolve();
          });
        }
      });
    });
  });

  // Execute all queries
  Promise.all(queries)
    .then(() => res.status(200).send('Classes added/updated successfully'))
    .catch((err) => {
      console.error('Error processing classes:', err);
      res.status(500).send('Server error');
    });
};

const getAllClasses = (req, res) => {
  const query = 'SELECT class_name, status FROM classes';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching classes:', err);
      return res.status(500).send('Server error');
    }

    res.status(200).json(results);
  });
};

// Define Routes

// app.post('/register', registerUser);
app.post('/login', loginUser);
app.get('/users', getAllUsers);
app.get('/users/:id', getUserById);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);
app.post('/addOrUpdate', addOrUpdateClasses);
app.get('/classes', getAllClasses);

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
