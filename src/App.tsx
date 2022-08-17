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
import TemplateHome from './components/Templates/Home';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Session from './components/Session/Session';
import axios from 'axios';
import { AuthProvider } from './context/AuthContext';
import RequireAuth from './utils/PrivateRoute';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/home" element={
            <RequireAuth redirectTo='/login'>
              <Home />
            </RequireAuth>
          } />
          <Route path="/" element={
            <RequireAuth redirectTo='/login'>
              <UserHome />
            </RequireAuth>
          } />
          <Route path="/lease" element={
            <RequireAuth redirectTo='/login'>
              <LeaseHome />
           </RequireAuth>   
          } />
          <Route path="/templates" element={
            <RequireAuth redirectTo='/login'>
              <TemplateHome />
            </RequireAuth>
          } />
          <Route path='/datagrid' element={<ResourceDatagrid/>} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
  }
  
