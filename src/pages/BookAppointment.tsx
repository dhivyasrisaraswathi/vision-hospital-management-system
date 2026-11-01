import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AppointmentData {
  department: string;
  doctor: string;
  date: string;
  timeSlot: string;
  reason: string;
}

interface AppointmentConfirmation extends AppointmentData {
  patientUsername: string;
  estimatedWaitTime: number;
}

const doctorsByDepartment: Record<string, string[]> = {
  'Cataract': ['Dr. Sharma', 'Dr. Gupta'],
  'Retina': ['Dr. Patel', 'Dr. Desai'],
  'LASIK': ['Dr. Kumar', 'Dr. Nair'],
  'General': ['Dr. Verma', 'Dr. Rao']
};

const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];

export const BookAppointment: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AppointmentData>({
    department: '',
    doctor: '',
    date: '',
    timeSlot: '',
    reason: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmation, setConfirmation] = useState<AppointmentConfirmation | null>(null);

  const availableDoctors = formData.department ? doctorsByDepartment[formData.department] || [] : [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Reset doctor when department changes
    if (name === 'department') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        doctor: '' // Reset doctor selection
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.doctor) newErrors.doctor = 'Doctor is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.timeSlot) newErrors.timeSlot = 'Time slot is required';
    if (!formData.reason.trim()) newErrors.reason = 'Reason for visit is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Create confirmation data
      const confirmationData: AppointmentConfirmation = {
        ...formData,
        patientUsername: user?.username || 'Patient',
        estimatedWaitTime: 15
      };

      setConfirmation(confirmationData);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted && confirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <Navbar />

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            {/* Success Card */}
            <div className="bg-white rounded-lg shadow-xl p-8 text-center card-hover">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-200 rounded-full opacity-30 animate-pulse"></div>
                  <CheckCircle className="w-20 h-20 text-green-500 relative" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Your Appointment Has Been Scheduled Successfully!
              </h2>
              <p className="text-gray-600 mb-8">
                Thank you for booking with VisionCare Eye Hospital. Your appointment details are below.
              </p>

              {/* Confirmation Details */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-8 mb-8 text-left border-l-4 border-teal-600">
                <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">Appointment Details</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 font-semibold mb-1">Patient Username</p>
                    <p className="text-lg font-bold text-gray-800">{confirmation.patientUsername}</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 font-semibold mb-1">Department</p>
                    <p className="text-lg font-bold text-gray-800">{confirmation.department}</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600 font-semibold mb-1">Doctor</p>
                        <p className="text-lg font-bold text-gray-800">{confirmation.doctor}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-teal-600" />
                      <div>
                        <p className="text-sm text-gray-600 font-semibold mb-1">Date</p>
                        <p className="text-lg font-bold text-gray-800">
                          {new Date(confirmation.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <div>
                        <p className="text-sm text-gray-600 font-semibold mb-1">Time</p>
                        <p className="text-lg font-bold text-gray-800">{confirmation.timeSlot}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 font-semibold mb-1">Reason for Visit</p>
                    <p className="text-lg font-bold text-gray-800">{confirmation.reason}</p>
                  </div>
                </div>

                {/* Estimated Waiting Time */}
                <div className="mt-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg p-4 text-center">
                  <p className="text-sm font-semibold mb-1">⏱️ Estimated Waiting Time</p>
                  <p className="text-3xl font-bold">{confirmation.estimatedWaitTime} minutes</p>
                </div>
              </div>

              {/* Important Info */}
              <div className="bg-amber-50 border-l-4 border-amber-600 rounded-lg p-6 mb-8 text-left">
                <h4 className="font-bold text-gray-800 mb-3">📋 Important Information</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Please arrive <strong>10 minutes early</strong> to complete check-in</li>
                  <li>✓ Bring a valid ID and insurance card if applicable</li>
                  <li>✓ Bring any recent eye test reports if you have them</li>
                  <li>✓ You will receive an SMS confirmation with appointment details</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    if (user?.type === 'new') {
                      navigate('/new-patient-dashboard');
                    } else {
                      navigate('/patient-dashboard');
                    }
                  }}
                  className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-semibold text-lg"
                >
                  ← Go Back to Dashboard
                </button>

                <Link
                  to="/"
                  className="block text-center text-teal-600 hover:text-teal-700 font-semibold py-2 border-t border-gray-200 pt-4"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Book Your Eye Appointment
            </h1>
            <p className="text-gray-600 text-lg">
              Schedule your consultation with our experienced ophthalmologists
            </p>
          </div>

          {/* Info Banner */}
          <div className="mb-8 bg-gradient-to-r from-blue-100 to-teal-100 border-l-4 border-teal-600 rounded-lg p-6">
            <p className="text-sm text-gray-700">
              <strong>ℹ️ Note:</strong> Please select your preferred department, doctor, date, and time slot. Our team will confirm your appointment shortly.
            </p>
          </div>

          {/* Booking Form Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 card-hover">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Department Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Select Department *
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${
                    errors.department ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Choose a department...</option>
                  <option value="Cataract">Cataract Surgery</option>
                  <option value="Retina">Retina Care</option>
                  <option value="LASIK">LASIK Surgery</option>
                  <option value="General">General Eye Checkup</option>
                </select>
                {errors.department && (
                  <p className="text-red-500 text-sm mt-2">{errors.department}</p>
                )}
              </div>

              {/* Doctor Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Select Doctor *
                </label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  disabled={!formData.department}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${
                    errors.doctor ? 'border-red-500' : 'border-gray-300'
                  } ${!formData.department ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                >
                  <option value="">
                    {formData.department ? 'Choose a doctor...' : 'Select a department first'}
                  </option>
                  {availableDoctors.map((doctor) => (
                    <option key={doctor} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>
                {errors.doctor && (
                  <p className="text-red-500 text-sm mt-2">{errors.doctor}</p>
                )}
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Select Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${
                    errors.date ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-2">{errors.date}</p>
                )}
              </div>

              {/* Time Slot Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Select Time Slot *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, timeSlot: slot }));
                        if (errors.timeSlot) {
                          setErrors(prev => ({ ...prev, timeSlot: '' }));
                        }
                      }}
                      className={`py-3 px-4 rounded-lg font-semibold transition ${
                        formData.timeSlot === slot
                          ? 'bg-teal-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {errors.timeSlot && (
                  <p className="text-red-500 text-sm mt-2">{errors.timeSlot}</p>
                )}
              </div>

              {/* Reason for Visit */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Reason for Visit *
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Describe your reason for visit (e.g., routine checkup, vision correction, etc.)"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition resize-none ${
                    errors.reason ? 'border-red-500' : 'border-gray-300'
                  }`}
                  rows={4}
                />
                {errors.reason && (
                  <p className="text-red-500 text-sm mt-2">{errors.reason}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all font-semibold text-lg hover:scale-105 transform"
                >
                  ✓ Confirm & Book Appointment
                </button>
              </div>
            </form>

            {/* Back Link */}
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  if (user?.type === 'new') {
                    navigate('/new-patient-dashboard');
                  } else {
                    navigate('/patient-dashboard');
                  }
                }}
                className="text-gray-600 hover:text-gray-800 font-semibold"
              >
                ← Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
