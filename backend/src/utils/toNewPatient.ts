import z from "zod";
import { Gender, NewPatient } from "../types/patient.type";

// name, dateOfBirth, ssn, gender, occupation
export const newPatientSchema = z.object({
  name: z.string(),
  ssn: z.string(),
  dateOfBirth: z.string(),
  occupation: z.string(),
  gender: z.nativeEnum(Gender)
});

export const toNewPatient = (object: unknown): NewPatient => {
  return newPatientSchema.parse(object);
};
