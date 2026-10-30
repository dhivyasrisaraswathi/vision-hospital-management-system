import React from 'react';
import { Heart, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface NavbarProps {
  onMenuToggle?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Heart className="w-8 h-8 text-blue-300" />
          <h1 className="text-2xl font-bold">VisionCare Eye Hospital</h1>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <span className="text-sm opacity-90">
            {user?.type === 'admin' ? '👤 Admin' : '👤 Patient'}
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <button onClick={() => setShowMenu(!showMenu)} className="md:hidden">
          {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {showMenu && (
        <div className="md:hidden bg-teal-700 px-4 py-3 flex flex-col gap-2">
          <span className="text-sm opacity-90">
            {user?.type === 'admin' ? '👤 Admin' : '👤 Patient'}
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};
