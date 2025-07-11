import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import diagnoseRouter from './routes/diagnose.route';
import patientRouter from './routes/patient.route';

const app = express();
dotenv.config({quiet: true});
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.use(`/api/diagnoses`, diagnoseRouter );
app.use(`/api/patients`, patientRouter);

app.listen(PORT, ()=> {
  console.log(`server is running on port ${PORT}`);
  console.log(`ping: http://localhost:${PORT}/api/patients`);
});
