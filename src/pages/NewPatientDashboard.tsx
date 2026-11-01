import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Heart, AlertCircle, Calendar } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const NewPatientDashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            New Patient Dashboard – VisionCare Eye Hospital
          </h1>
          <p className="text-gray-600">
            Welcome, <strong>{user.username}</strong>! This is your first visit to our hospital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-8 text-white shadow-lg animate-slide-up">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👋</div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Welcome to VisionCare Eye Hospital!</h2>
                  <p className="text-blue-50">
                    This appears to be your first visit. We're excited to serve you and help you achieve optimal eye health.
                  </p>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* No Previous Appointments */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500 card-hover">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">No Previous Appointments</h3>
                    <p className="text-gray-600 text-sm">
                      You don't have any scheduled appointments yet. Let's get you scheduled for your first eye consultation!
                    </p>
                  </div>
                </div>
              </div>

              {/* No Medical History */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-500 card-hover">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">No Medical History Available</h3>
                    <p className="text-gray-600 text-sm">
                      Your medical records will be created after your first consultation. Our team will capture your complete vision history.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps Info Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border-l-4 border-orange-500 shadow-md">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Next Steps</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-orange-600 text-lg">1.</span>
                  <span>Book your first eye consultation appointment below</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-orange-600 text-lg">2.</span>
                  <span>Our ophthalmologist will perform a comprehensive eye examination</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-orange-600 text-lg">3.</span>
                  <span>Receive your personalized vision care plan</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-orange-600 text-lg">4.</span>
                  <span>Access your medical history and test reports in your dashboard</span>
                </li>
              </ol>
            </div>

            {/* Call to Action Button */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to Book Your First Appointment?</h3>
              <button
                onClick={() => navigate('/book-appointment')}
                className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all transform hover:scale-105 font-semibold text-lg"
              >
                📅 Book an Appointment
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Patient Info Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
              <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Patient Information
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600 font-semibold">Username</p>
                  <p className="text-gray-800">{user.username}</p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Patient ID</p>
                  <p className="text-gray-800">{user.id}</p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Status</p>
                  <p className="text-gray-800">
                    <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold">
                      New Patient
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg shadow-lg p-6 border-l-4 border-teal-600">
              <h3 className="font-bold text-gray-800 mb-3">📞 Support</h3>
              <p className="text-sm text-gray-700 mb-3">
                Have questions? Contact our patient support team for assistance with booking or any inquiries.
              </p>
              <p className="text-xs text-gray-600 font-semibold">
                📱 Phone: 1-800-VISION-1<br/>
                📧 Email: support@visioncare.com
              </p>
            </div>

            {/* Important Notes */}
            <div className="bg-blue-50 rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-gray-800 mb-3">✅ What to Expect</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ Comprehensive eye exam</li>
                <li>✓ Vision prescription check</li>
                <li>✓ Eye health assessment</li>
                <li>✓ Dr. consultation</li>
                <li>✓ Personalized care plan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPatientDashboard;
