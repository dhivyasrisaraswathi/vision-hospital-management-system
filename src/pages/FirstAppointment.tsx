import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, CheckCircle, Clock, User, Calendar, Clock3 } from 'lucide-react';

export const FirstAppointment: React.FC = () => {
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    timeSlot: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Mock data
  const departments = [
    { id: 'cataract', name: 'Cataract' },
    { id: 'retina', name: 'Retina Care' },
    { id: 'glaucoma', name: 'Glaucoma' },
    { id: 'lasik', name: 'LASIK Surgery' },
    { id: 'general', name: 'General Checkup' }
  ];

  const doctorsByDepartment: Record<string, { id: string; name: string }[]> = {
    cataract: [
      { id: 'dr1', name: 'Dr. Sharma' },
      { id: 'dr2', name: 'Dr. Gupta' }
    ],
    retina: [
      { id: 'dr3', name: 'Dr. Patel' },
      { id: 'dr4', name: 'Dr. Desai' }
    ],
    glaucoma: [
      { id: 'dr5', name: 'Dr. Mehta' },
      { id: 'dr6', name: 'Dr. Singh' }
    ],
    lasik: [
      { id: 'dr7', name: 'Dr. Kumar' },
      { id: 'dr8', name: 'Dr. Nair' }
    ],
    general: [
      { id: 'dr9', name: 'Dr. Verma' },
      { id: 'dr10', name: 'Dr. Rao' }
    ]
  };

  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      date: e.target.value
    }));
    if (errors.date) {
      setErrors(prev => ({
        ...prev,
        date: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.department) newErrors.department = 'Please select a department';
    if (!formData.doctor) newErrors.doctor = 'Please select a doctor';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.timeSlot) newErrors.timeSlot = 'Please select a time slot';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const selectedDepartment = departments.find(d => d.id === formData.department);
  const selectedDoctor = formData.doctor
    ? doctorsByDepartment[formData.department]?.find(d => d.id === formData.doctor)
    : null;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        {/* Navbar */}
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-teal-600">
              <Heart className="w-8 h-8 text-blue-500" />
              <span>VisionCare Eye Hospital</span>
            </Link>
            <Link
              to="/login"
              className="bg-teal-600 !text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
            >
              Sign In
            </Link>
          </div>
        </nav>

        {/* Success Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6 flex justify-center">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Appointment Successfully Booked!</h2>
              <p className="text-gray-600 mb-8">Your first appointment has been confirmed. Please arrive 10 minutes early.</p>

              {/* Appointment Details */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-6 mb-8 border-l-4 border-teal-600">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Your Appointment Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <User className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-600">Department</p>
                      <p className="text-lg font-semibold text-gray-800">{selectedDepartment?.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <User className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-600">Doctor</p>
                      <p className="text-lg font-semibold text-gray-800">{selectedDoctor?.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <Calendar className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="text-lg font-semibold text-gray-800">{formData.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <Clock3 className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-600">Time</p>
                      <p className="text-lg font-semibold text-gray-800">{formData.timeSlot}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Waiting Time Info */}
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <p className="text-sm text-blue-600 font-semibold">Estimated Waiting Time</p>
                    <p className="text-2xl font-bold text-blue-700">15 minutes</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  to="/login"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold inline-block"
                >
                  Go to Patient Login
                </Link>
                <Link
                  to="/"
                  className="w-full border-2 border-teal-600 text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold inline-block"
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
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-teal-600">
            <Heart className="w-8 h-8 text-blue-500" />
            <span>VisionCare Eye Hospital</span>
          </Link>
          <Link
            to="/login"
            className="bg-teal-600 !text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Appointment Booking */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Book Your First Eye Appointment
            </h1>
            <p className="text-gray-600 text-lg">
              Schedule your initial consultation at VisionCare Eye Hospital today.
            </p>
          </div>

          {/* Info Banner */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 mb-8">
            <p className="text-blue-900 font-semibold">
              ℹ️ This is your first visit. Please select your preferred appointment type.
            </p>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 card-hover">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Department Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Select Department *</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    errors.department ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Choose a department...</option>
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
                {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
              </div>

              {/* Doctor Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Select Doctor *</label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  disabled={!formData.department}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    errors.doctor ? 'border-red-500' : 'border-gray-300'
                  } ${!formData.department ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                >
                  <option value="">
                    {formData.department ? 'Choose a doctor...' : 'Select a department first'}
                  </option>
                  {formData.department && doctorsByDepartment[formData.department].map(doc => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name}
                    </option>
                  ))}
                </select>
                {errors.doctor && <p className="text-red-500 text-sm mt-1">{errors.doctor}</p>}
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Select Date *</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={handleDateChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    errors.date ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
              </div>

              {/* Time Slot Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Select Time Slot *</label>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, timeSlot: slot }))}
                      className={`p-3 rounded-lg border-2 transition-all font-semibold ${
                        formData.timeSlot === slot
                          ? 'border-teal-600 bg-teal-50 text-teal-600'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-teal-400'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {errors.timeSlot && <p className="text-red-500 text-sm mt-1">{errors.timeSlot}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-lg"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstAppointment;
