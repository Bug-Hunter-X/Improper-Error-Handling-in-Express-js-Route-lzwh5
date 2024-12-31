const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUserById(userId, (err, user) => {
    if (err) {
      // Improper error handling; sends 500 for all errors
      res.status(500).send('Error');
    } else {
      res.json(user);
    }
  });
});