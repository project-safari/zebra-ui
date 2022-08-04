import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SignUp from './components/Register/SignUp';
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Lease/Home';
import LeaseHome from './components/Lease/LeaseOffice/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import InventoryTable from './components/Table/Table';
import ResourceDatagrid from './components/Datagrid/ResourceDatagrid';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/leasing" element={<LeaseHome />} />
        <Route path='/datagrid' element={<ResourceDatagrid/>} />
      </Routes>
    </Router>
  );
  }
