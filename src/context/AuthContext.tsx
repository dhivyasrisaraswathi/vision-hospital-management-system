import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  username: string;
  type: 'patient' | 'admin' | 'new';
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (username: string, password: string): boolean => {
    // Hardcoded credentials
    if (username === 'patient1' && password === '1234') {
      const patientUser: User = {
        id: 'P1001',
        username: 'patient1',
        type: 'patient'
      };
      setUser(patientUser);
      localStorage.setItem('user', JSON.stringify(patientUser));
      return true;
    }
    
    if (username === 'newpatient1' && password === '12345') {
      const newPatientUser: User = {
        id: 'P1002',
        username: 'newpatient1',
        type: 'new'
      };
      setUser(newPatientUser);
      localStorage.setItem('user', JSON.stringify(newPatientUser));
      return true;
    }
    
    if (username === 'admin' && password === 'admin123') {
      const adminUser: User = {
        id: 'A001',
        username: 'admin',
        type: 'admin'
      };
      setUser(adminUser);
      localStorage.setItem('user', JSON.stringify(adminUser));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
