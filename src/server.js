import express from 'express';
import { PORT, HOST } from './config.js';
import logger from './middlewares/logger.js'
//Import das Rotas
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'

//Middlewares
const app = express();
app.use(logger)
// Rotas
app.use('/user', userRouter)
app.use('/product', productRouter)


app.listen(PORT, () => {
  console.log(`Server running on  ${HOST}:${PORT}`);
});
