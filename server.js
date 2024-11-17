const express = require('express');
const app = express();

app.get('/name', (req, res) => {
  res.status(200).send('Adnan Ahmed');
});

app.get('/hobby', (req, res) => {
  res.status(200).json({ hobby: 'Reading books' });
});

app.get('/dream', (req, res) => {
  res.status(200).send('Reach for the stars, never stop dreaming!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
