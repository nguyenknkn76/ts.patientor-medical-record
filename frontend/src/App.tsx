import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Container, Toolbar, AppBar, IconButton, Box, Typography } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

import PatientListPage from "./components/Patients/ViewPatient/PatientList";
import patientService from "./services/patient.service";
import type { Patient } from "./types/patient.type";
import diagnoseService from "./services/diagnose.service";
import WelcomePage from "./pages/Public/WelcomePage";
import Page1 from "./pages/Public/Page1";
import Page2 from "./pages/Public/Page2";
import LoginPage from "./pages/Auth/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store/store";
import { login, logout } from "./store/slices/userSlice";


const baseUrl = import.meta.env.VITE_BASE_URL;

const App = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  
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

  useEffect(() => {
  const savedUser = localStorage.getItem("loggedin-user");
  if (savedUser) {
      dispatch(login(JSON.parse(savedUser)));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('loggedin-user');
  };

  const navLinkStyle = {
    marginRight: 20,
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <Router>
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* ICON */}
          <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
            <Link to="/">
              <LocalHospitalIcon />
            </Link>
          </IconButton>

          {/* NAV-BAR */}
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/" style={navLinkStyle}>Home</Link>
            <Link to="/page1" style={navLinkStyle}>Page1</Link>
            <Link to="/page2" style={navLinkStyle}>Page2</Link>
            <Link to="/doctor/patients" style={navLinkStyle}>Patients</Link>
          </Box>

          {/* LOGIN */}
          {user.isLoggedIn ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <img
                src={user.photoURL}
                alt="avatar"
                style={{ width: 40, height: 40, borderRadius: '50%' }}
              />
              <Typography variant="body1">{user.displayName}</Typography>
              <Link
                to="/"
                style={{ color: 'white', textDecoration: 'none' }}
                onClick={handleLogout}
              >
                Logout
              </Link>
            </Box>
          ) : (
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
              Login
            </Link>
          )}

        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/doctor/patients" element={<PatientListPage patients={patients} setPatients={setPatients} />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;