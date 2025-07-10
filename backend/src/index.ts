import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config({quiet: true});
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.get('/ping', (_req, res) => {
  res.send('pong');
  console.log('pong');
})

app.listen(PORT, ()=> {
  console.log(`server is running on port ${PORT}`)
  console.log(`ping: http://localhost:${PORT}/ping`)
})
