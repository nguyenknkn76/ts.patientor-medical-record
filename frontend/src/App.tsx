import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Button, Divider, Container, Typography } from '@mui/material';

import PatientListPage from "./components/PatientListPage";
import patientService from "./services/patient.service";
import type { Patient } from "./types/patient.type";
import diagnoseService from "./services/diagnose.service";
import HomePage from "./pages/HomePage";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import LoginPage from "./pages/LoginPage";

const baseUrl = import.meta.env.VITE_BASE_URL;

const App = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  // const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    void axios.get<void>(`${baseUrl}/ping`)
    const fetchPatientList = async () => {
      const patients = await patientService.getAll();
      setPatients(patients);
    };
    void fetchPatientList();

    const fetchDiagnoseList = async () => {
      const diagnoses = await diagnoseService.getAll();
      return diagnoses;
    }
    console.log(fetchDiagnoseList());
  }, []);

  return (
    <div className="App">
      <Router>
        <Container>
          <Typography variant="h3" style={{ marginBottom: "0.5em" }}>
            Patientor
          </Typography>
          <Button component={Link} to="/" variant="contained" color="primary">
            Home
          </Button>
          <Button component={Link} to="/home" variant="contained" color="primary">
            Home Page
          </Button>
          <Divider hidden />
          
          <Routes>
            <Route path="/" element={<PatientListPage patients={patients} setPatients={setPatients} />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
};

export default App;