import axios from 'axios';
import type { Diagnosis } from '../types/patient.type';

const baseUrl = import.meta.env.VITE_BASE_URL;

const getAll = async () => {
  const res = await axios.get<Diagnosis[]>(
    `${baseUrl}/diagnoses`
  )
  return res.data;
}

export default {
  getAll
}