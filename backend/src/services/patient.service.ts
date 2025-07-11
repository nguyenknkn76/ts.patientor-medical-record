import patientsData from "../data/patients";
import { NewPatient, Patient } from "../types/patient.type";
import {v1 as uuid} from 'uuid';

const getAll = () => {
  return patientsData;
};

const getById = (id: string)  => {
  const rs = patientsData.find(p => p.id === id);
  return rs;
};

const create = (obj: NewPatient ): Patient => {
  const  newPatient = {
    id: uuid(),
    ...obj
  };
  patientsData.push(newPatient);
  return newPatient;
};
export default {
  getAll,
  getById,
  create
};