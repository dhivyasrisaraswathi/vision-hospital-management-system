import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Heart, AlertCircle } from 'lucide-react';
import { LoadingSpinner } from '../components/Utils';

export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (!username || !password) {
      setError('Please enter both username and password');
      setIsLoading(false);
      return;
    }

    const success = login(username, password);

    if (success) {
      // Determine which dashboard to navigate to
      if (username === 'admin') {
        navigate('/admin-dashboard');
      } else if (username === 'newpatient1') {
        navigate('/new-patient-dashboard');
      } else {
        navigate('/patient-dashboard');
      }
    } else {
      setError('Invalid username or password. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 via-white to-blue-50 flex items-center justify-center px-4">
      {isLoading && <LoadingSpinner message="Authenticating..." fullScreen />}

      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8 animate-slide-up">
          <div className="flex justify-center mb-4">
            <Heart className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">VisionCare Eye Hospital</h1>
          <p className="text-gray-600 mt-2">Hospital Management System</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-xl p-8 card-hover animate-slide-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800">Authentication Failed</p>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-600 focus:border-transparent transition"
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-600 focus:border-transparent transition"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-medical-600 text-white px-4 py-2 rounded-lg hover:bg-medical-700 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* Demo Credentials Info */}
          <div className="mt-8 pt-8 border-t border-gray-200 space-y-3">
            <p className="text-sm font-semibold text-gray-700">Demo Credentials:</p>
            <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-medical-600">
              <p className="text-xs font-semibold text-gray-700">Existing Patient</p>
              <p className="text-xs text-gray-600">Username: <code className="bg-white px-1">patient1</code></p>
              <p className="text-xs text-gray-600">Password: <code className="bg-white px-1">1234</code></p>
            </div>
            <div className="bg-teal-50 rounded-lg p-3 border-l-4 border-teal-600">
              <p className="text-xs font-semibold text-gray-700">New Patient</p>
              <p className="text-xs text-gray-600">Username: <code className="bg-white px-1">newpatient1</code></p>
              <p className="text-xs text-gray-600">Password: <code className="bg-white px-1">12345</code></p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-600">
              <p className="text-xs font-semibold text-gray-700">Admin</p>
              <p className="text-xs text-gray-600">Username: <code className="bg-white px-1">admin</code></p>
              <p className="text-xs text-gray-600">Password: <code className="bg-white px-1">admin123</code></p>
            </div>
          </div>
        </div>

        {/* Back to Home and Register Link */}
        <div className="text-center mt-6 space-y-3">
          <div>
            <Link to="/" className="text-teal-600 hover:text-teal-700 font-semibold">
              ← Back to Home
            </Link>
          </div>
          <div className="border-t pt-3">
            <p className="text-gray-600 text-sm mb-2">Don't have an account?</p>
            <Link 
              to="/new-patient" 
              className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
            >
              Register as New Patient
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
