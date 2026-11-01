import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { PatientDashboard } from './pages/PatientDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { NewPatient } from './pages/NewPatient';
import { FirstAppointment } from './pages/FirstAppointment';
import { NewPatientDashboard } from './pages/NewPatientDashboard';
import { BookAppointment } from './pages/BookAppointment';
import './App.css';

const AppRoutes: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to={user?.type === 'admin' ? '/admin-dashboard' : user?.type === 'new' ? '/new-patient-dashboard' : '/patient-dashboard'} /> : <LoginPage />} />
      <Route path="/new-patient" element={<NewPatient />} />
      <Route path="/first-appointment" element={<FirstAppointment />} />
      
      <Route
        path="/patient-dashboard"
        element={
          <ProtectedRoute requiredRole="patient">
            <PatientDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/new-patient-dashboard"
        element={
          <ProtectedRoute requiredRole="new">
            <NewPatientDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/book-appointment"
        element={
          <ProtectedRoute requiredRole="patient">
            <BookAppointment />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Catch all - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
