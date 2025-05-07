const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const { sendEmail } = require('./mail.js');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('./newsletter.db');

db.run(`
  CREATE TABLE IF NOT EXISTS subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL
  )
`);

app.post('/subscribe', (req, res) => {
    const { email } = req.body;
    console.log("Received email:", email); // Log the incoming email
    if (!email) return res.status(400).json({ error: 'Email is required' });
  
    const stmt = db.prepare('INSERT INTO subscribers (email) VALUES (?)');
    stmt.run(email, function (err) {
      if (err) {
        console.error("Error inserting into database:", err); // Log any errors
        return res.status(500).json({ error: 'Database error' });
      }
      console.log("Inserted email:", email); // Log successful insert
      res.status(200).json({ message: 'Subscription successful' });
      sendEmail(email, 'Subscription Confirmation', 'Thank you for subscribing to my newsletter! \n Expect future updates on my projects and more. \n\n Best, \n Samuel Thorson');
    });
  });
  

app.get('/subscribers', (req, res) => {
    db.all('SELECT * FROM subscribers', (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch subscribers' });
      }
      res.status(200).json(rows);
    });
  });

app.delete('/unsubscribe', (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });
  
    const stmt = db.prepare('DELETE FROM subscribers WHERE email = ?');
    stmt.run(email, function (err) {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Email not found' });
      }
      res.status(200).json({ message: 'Unsubscription successful' });
    });
  });

// Start server
app.listen(PORT, () => {
  console.log(`Newsletter backend running at http://localhost:${PORT}`);
});
