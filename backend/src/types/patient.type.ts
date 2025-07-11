import z from "zod";
import { newPatientSchema } from "../utils/toNewPatient";

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
};

// export type Patient = {
//   id: string;
//   name: string;
//   dateOfBirth: string;
//   ssn: string;
//   gender: Gender;
//   occupation: string;
// };

// export type NewPatient = Omit<Patient, 'id'>;

export interface Patient extends NewPatient {
  id: string
};

export type NewPatient = z.infer<typeof newPatientSchema>;

export type NonSensitivePatient = Omit<Patient, 'ssn'>;