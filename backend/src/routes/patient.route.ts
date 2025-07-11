import express from 'express';
import patientService from '../services/patient.service';
import { toNewPatient } from '../utils/toNewPatient';
import z from 'zod';
const router = express.Router();

router.get('/', (_req, res) => {
  const rs = patientService.getAll();
  res.status(200).json(rs);
});

router.post('/', (req, res) => {
  try {
    const newPatientObj = toNewPatient(req.body);
    const addedPatient = patientService.create(newPatientObj);
    res.json(addedPatient);
  } catch(err: unknown){
    if(err instanceof z.ZodError) res.status(400).send({error: err.issues});
    else res.status(400).send({error: 'unknown error'});
  };
});

/*
router.post('/', (req, res) => {
  const {name, ssn, dateOfBirth, gender, occupation} = req.body;
  const addedPatient = patientService.create({
    name, 
    ssn, 
    dateOfBirth, 
    gender, 
    occupation
  });
  res.status(200).json(addedPatient);
});
*/


export default router;
