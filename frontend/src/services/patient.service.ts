import axios from "axios";
import type { Patient, PatientFormValues } from "../types/patient.type"; 

const baseUrl = import.meta.env.VITE_BASE_URL;

const getAll = async () => {
  const res = await axios.get<Patient[]>(
    `${baseUrl}/patients`
  )
  return res.data
}

const create =  async (obj: PatientFormValues) => {
  const res = await axios.post<Patient>(
    `${baseUrl}/patients`,
    obj
  );
  return res.data;
}

export default {
  getAll,
  create,
}
