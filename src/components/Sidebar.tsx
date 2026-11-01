import React, { useState } from 'react';
import { Menu, X, LayoutDashboard, FileText, BarChart3 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface MenuItemPatient {
  label: string;
  icon: React.ElementType;
  action: () => void;
}

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user } = useAuth();

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems: MenuItemPatient[] = user?.type === 'admin' ? [
    { label: 'Dashboard', icon: LayoutDashboard, action: () => handleScroll('dashboard') },
    { label: 'Analytics', icon: BarChart3, action: () => handleScroll('analytics') },
    { label: 'Reports', icon: FileText, action: () => handleScroll('reports') }
  ] : [
    { label: 'Dashboard', icon: LayoutDashboard, action: () => handleScroll('dashboard') },
    { label: 'Medical Records', icon: FileText, action: () => handleScroll('medical-records') },
    { label: 'Appointments', icon: BarChart3, action: () => handleScroll('appointments') }
  ];

  return (
    <>
      <div className={`${isOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-medical-700 to-medical-800 text-white transition-all duration-300 fixed h-screen left-0 top-0 shadow-lg z-40`}>
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-medical-600 p-2 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <nav className="mt-8 space-y-2 px-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-medical-600 transition-colors group text-white"
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="text-sm font-semibold text-white">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-4 left-0 right-0 px-4">
          <div className={`bg-medical-600 rounded-lg p-3 text-center ${!isOpen && 'p-2'}`}>
            {isOpen ? (
              <p className="text-xs font-semibold">Hospital Management System</p>
            ) : (
              <p className="text-xs font-semibold">HMS</p>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar spacing for main content */}
      <div className={`${isOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}></div>
    </>
  );
};
