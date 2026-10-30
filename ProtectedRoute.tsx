import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LoadingSpinner } from './Utils';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'patient' | 'admin' | 'new';
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const { isAuthenticated, user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // For patient role, allow both 'patient' and 'new' user types
  if (requiredRole === 'patient' && user?.type !== 'patient' && user?.type !== 'new') {
    return <Navigate to="/" replace />;
  }

  // For other roles, check exact match
  if (requiredRole && requiredRole !== 'patient' && user?.type !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
