const genres = require('./routes/genres');
const express = require('express');
const app = express();

app.use('/api/genres', genres);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Connected to ${port}....`);
});
