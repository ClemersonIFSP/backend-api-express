import express from 'express';
import { PORT, HOST } from './config.js';
const app = express();

app.get('/', (req, res) => {
  res.send({ msg:'Hello World!' });
});

app.post('/produto', (req,res) =>{
    res.post({ msg:'Hello World! Post' })
})



app.listen(PORT, () => {
  console.log(`Server running on  ${HOST}:${PORT}`);
});
