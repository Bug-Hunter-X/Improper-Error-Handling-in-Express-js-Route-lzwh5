const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUserById(userId, (err, user) => {
    if (err) {
      console.error('Error fetching user:', err);
      if (err.code === 'USER_NOT_FOUND') {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(500).json({ error: 'Failed to fetch user' });
      }
    } else {
      res.json(user);
    }
  });
});