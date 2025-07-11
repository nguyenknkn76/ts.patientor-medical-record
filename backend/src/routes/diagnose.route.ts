import express from 'express';
import diagnoseService from '../services/diagnose.service';
const router = express.Router();

router.get(`/`, (_req, res) => {
  // res.send('fetching all diagnoses data');
  const rs = diagnoseService.getAll();
  res.status(200).send(rs);
});

export default router;