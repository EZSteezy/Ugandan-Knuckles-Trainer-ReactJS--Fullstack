const express = require('express');
const app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/api/scores', (req, res) => {
  const scores = [
    { name: 'Player 1', score: 100 },
    { name: 'Player 2', score: 200 },
    { name: 'Player 3', score: 300 },
  ];
  
  res.json(scores);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});