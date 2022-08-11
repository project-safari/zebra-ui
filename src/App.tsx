import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import SignUp from './components/Register/SignUp';
import SignIn from './components/SignIn/SignIn';
import Home from './components/Lease/Home';
import LeaseHome from './components/Lease/LeaseOffice/Home';
import UserHome from './components/UserPersona/Home';
import ResourceDatagrid from './components/Datagrid/ResourceDatagrid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Session from './components/Session/Session';
import axios from 'axios';

const apiUrl = 'https://127.0.0.1:6666';
/* 
axios.interceptors.request.use(
  config => {
    const { origin } = new URL(config.url: string) : string;
    const allowedOrigins = [apiUrl];
    const jwt = localStorage.getItem('jwt');

    if (allowedOrigins.includes(origin) && jwt) {
      config.headers.Authorization = `Bearer ${jwt}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
*/
export default function App() {
  const storedJwt = localStorage.getItem('jwt');
  const [jwt, setJwt] = useState(storedJwt || null);
  const [foods, setFoods] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const getJwt = async () => {
    const { data } = await axios.get(`/jwt`);
    setJwt(data.jwt);
  }
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<UserHome />} />
        <Route path="/lease" element={<LeaseHome />} />
        <Route path='/datagrid' element={<ResourceDatagrid/>} />
      </Routes>
    </Router>
  );
  }
