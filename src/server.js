import express from 'express';
import { PORT, HOST } from './config.js';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on  ${HOST}:${PORT}`);
});
