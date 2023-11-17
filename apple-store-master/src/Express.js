const express = require('express');
const Fuse = require('fuse.js');
const app = express();
const port = 3001;

const products = [
  // Your product data with synonyms
];

const fuseOptions = {
  keys: ['name', 'synonyms'],
  threshold: 0.3,
};

const fuse = new Fuse(products, fuseOptions);

app.use(express.json());

app.post('/api/search', (req, res) => {
  const { query } = req.body;
  const results = fuse.search(query);
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
