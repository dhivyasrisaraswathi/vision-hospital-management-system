import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, BarChart3, Shield } from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold text-teal-600">
            <Heart className="w-8 h-8 text-blue-500" />
            <span>VisionCare Eye Hospital</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/new-patient"
              className="border-2 border-teal-600 text-teal-600 px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors font-semibold"
            >
              New Patient Registration
            </Link>
            <Link
              to="/login"
              className="bg-teal-600 !text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Advanced Eye Care <span className="text-teal-600">&amp; Vision Management</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Book eye checkups, track vision reports, and manage ophthalmology operations efficiently. Professional vision care at your fingertips.
            </p>
            <div className="flex gap-4">
              <Link
                to="/login"
                className="bg-teal-600 !text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
              >
                Existing Patient Login
              </Link>
              <Link
                to="/new-patient"
                className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold"
              >
                New Patient Registration
              </Link>
            </div>

            {/* Demo Credentials */}
            <div className="mt-12 bg-white rounded-lg p-6 border-l-4 border-teal-600 shadow-lg">
              <h3 className="font-bold mb-3 text-lg">Demo Credentials</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-600">Existing Patient Login</p>
                  <p className="text-sm">Username: <code className="bg-gray-100 px-2 py-1 rounded">patient1</code> Pass: <code className="bg-gray-100 px-2 py-1 rounded">1234</code></p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600">New Patient Login</p>
                  <p className="text-sm">Username: <code className="bg-gray-100 px-2 py-1 rounded">newpatient1</code> Pass: <code className="bg-gray-100 px-2 py-1 rounded">12345</code></p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600">Admin Login</p>
                  <p className="text-sm">Username: <code className="bg-gray-100 px-2 py-1 rounded">admin</code> Pass: <code className="bg-gray-100 px-2 py-1 rounded">admin123</code></p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-8 shadow-lg card-hover">
              <Activity className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Vision Care</h3>
              <p className="text-sm text-gray-600">Real-time appointment tracking for eye examinations and consultations</p>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-teal-50 rounded-lg p-8 shadow-lg card-hover">
              <BarChart3 className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Eye Analytics</h3>
              <p className="text-sm text-gray-600">Comprehensive dashboards for eye department performance metrics</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-lg p-8 shadow-lg card-hover">
              <Heart className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Vision Records</h3>
              <p className="text-sm text-gray-600">Secure patient data and complete vision history management</p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg p-8 shadow-lg card-hover">
              <Shield className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Secure</h3>
              <p className="text-sm text-gray-600">Role-based access and HIPAA-compliant data protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-hover animate-slide-up">
              <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Queue Management</h3>
              <p className="text-gray-600">Monitor examination room queues and waiting times in real-time across all departments</p>
            </div>
            <div className="card-hover animate-slide-up">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Eye Department Analytics</h3>
              <p className="text-gray-600">Track cataract, retina, glaucoma, and LASIK department utilization and efficiency</p>
            </div>
            <div className="card-hover animate-slide-up">
              <div className="bg-cyan-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Insights</h3>
              <p className="text-gray-600">Predictive analysis for patient load patterns and department bottleneck detection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 VisionCare Eye Hospital Management System. All rights reserved. Demo Version</p>
        </div>
      </footer>
    </div>
  );
};
