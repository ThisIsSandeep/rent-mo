const express = require('express');
const app = express();

app.use(express.json());

const genres = [
  { id: 1, name: 'Sci-Fi' },
  { id: 2, name: 'Horror' },
  { id: 3, name: 'Comedy' },
  { id: 4, name: 'Thriller' }
];

app.get('/api/genres', (req, res) => {
  res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
  const genre = genres.find(g => g.id === parseInt(req.params.id));
  if (!genre) {
    res.status(404).send('The genre you are looking for is not found');
    return;
  } else {
    res.send(genre);
  }
});

app.post('/api/genres', (req, res) => {
  const genre = {
    id: genres.length + 1,
    name: req.body.name
  };
  genres.push(genre);
  res.send(genre);
});

app.put('/api/genres/:id', (req, res) => {
  const genre = genres.find(g => g.id === parseInt(req.params.id));
  if (!genre) {
    res.status(404).send('The genre you looking for update is not found!!');
    return;
  }

  genre.name = req.body.name;
  res.send(genre);
});

app.delete('/api/genres/:id', (req, res) => {
  const genre = genres.find(g => g.id === parseInt(req.params.id));
  if (!genre) {
    res.status(404).send('The genre you looking for delete is not found!');
    return;
  }

  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send(genre);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Connected to ${port}....`);
});
