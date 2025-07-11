import { Gender, NewPatient } from "../types/patient.type";

export const toNewPatientWithNoZod = (object: unknown) : NewPatient => {
  if(!object || typeof object !== "object") throw new Error('Incorrect or missing new patient data');
  if ('name' in object && 'dateOfBirth' in object && 'gender' in object && 'ssn' in object && 'occupation' in object){
    const newPatient : NewPatient = {
      name: parseName(object.name),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      gender: parseGender(object.gender),
      ssn: parseSsn(object.ssn),
      occupation: parseOccupation(object.occupation)
    };  
    return newPatient;
  }
  throw new Error('Incorrect data: some are missing');
};

// name, dateOfBirth, ssn, gender, occupation
const isString = (text: unknown) : text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseName = (name: unknown) : string => {
  if (!name || !isString(name)) 
    throw new Error('Incorrect or missing name');
  return name;
};

const isDate = (date: string) : boolean => {
  return Boolean(Date.parse(date));
};

const parseDateOfBirth = (date: unknown): string => {
  if(!date || !isString(date) || !isDate(date)) 
    throw new Error('Incorrect or missing date');
  return date;
}; 

const parseSsn = (ssn: unknown) : string => {
  if (!ssn || !isString(ssn)) 
    throw new Error('Incorrect or missing ssn');
  return ssn;
};

const parseOccupation = (occupation: unknown) : string => {
  if (!occupation || !isString(occupation)) 
    throw new Error('Incorrect or missing ssn');
  return occupation;
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender).map(g => g.toString()).includes(param);
};

const parseGender = (gender: unknown) : Gender => {
  if(!gender || !isString(gender) || !isGender(gender))
    throw new Error('Incorrect or missing gender');
  return gender;
};