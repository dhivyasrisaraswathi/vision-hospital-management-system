import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, CheckCircle } from 'lucide-react';

export const NewPatient: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    visionType: '',
    preferredDepartment: '',
    username: '',
    password: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const prefillDemoData = () => {
    setFormData({
      fullName: 'Arjun Kumar',
      age: '28',
      gender: 'Male',
      phone: '9876543210',
      email: 'arjun.kumar@email.com',
      visionType: 'Myopia',
      preferredDepartment: 'Retina',
      username: 'arjun_kumar_28',
      password: 'SecurePass@123'
    });
    setErrors({});
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.visionType) newErrors.visionType = 'Vision type is required';
    if (!formData.preferredDepartment) newErrors.preferredDepartment = 'Preferred department is required';
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (formData.username.length < 4) newErrors.username = 'Username must be at least 4 characters';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate registration success
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6 flex justify-center">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Registration Successful!</h2>
            <p className="text-gray-600 mb-6">
              User successfully added for booking appointment. Please login into your Patient Portal.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
              <p className="text-sm text-green-700">
                <strong>Username:</strong> {formData.username}
              </p>
            </div>
            <Link
              to="/login"
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold inline-block"
            >
              Go to Patient Login
            </Link>
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

      {/* Registration Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              First-Time Patient Registration
            </h1>
            <p className="text-gray-600 text-lg">
              Register to book your first eye consultation at VisionCare Eye Hospital.
            </p>
          </div>

          {/* Demo Credentials Info Box */}
          <div className="mb-8 bg-gradient-to-r from-blue-50 to-teal-50 border-l-4 border-blue-500 rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">📋 Demo Data Example</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600"><strong>Full Name:</strong> Arjun Kumar</p>
                <p className="text-gray-600"><strong>Age:</strong> 28</p>
                <p className="text-gray-600"><strong>Gender:</strong> Male</p>
                <p className="text-gray-600"><strong>Phone:</strong> 9876543210</p>
              </div>
              <div>
                <p className="text-gray-600"><strong>Email:</strong> arjun.kumar@email.com</p>
                <p className="text-gray-600"><strong>Vision Type:</strong> Myopia</p>
                <p className="text-gray-600"><strong>Department:</strong> Retina Care</p>
                <p className="text-gray-600"><strong>Username:</strong> arjun_kumar_28</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">Tip: Use similar data format for your registration</p>
          </div>

          {/* Registration Form Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 card-hover">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              {/* Age and Gender */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Age *</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.age ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Age"
                  />
                  {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Gender *</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.gender ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                </div>
              </div>

              {/* Phone and Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="10-digit number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Vision Type and Preferred Department */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Vision Type *</label>
                  <select
                    name="visionType"
                    value={formData.visionType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.visionType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Vision Type</option>
                    <option value="Myopia">Myopia (Nearsightedness)</option>
                    <option value="Hyperopia">Hyperopia (Farsightedness)</option>
                    <option value="Astigmatism">Astigmatism</option>
                    <option value="Normal">Normal Vision</option>
                  </select>
                  {errors.visionType && <p className="text-red-500 text-sm mt-1">{errors.visionType}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Department *</label>
                  <select
                    name="preferredDepartment"
                    value={formData.preferredDepartment}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.preferredDepartment ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Department</option>
                    <option value="Cataract">Cataract</option>
                    <option value="Retina">Retina Care</option>
                    <option value="LASIK">LASIK Surgery</option>
                    <option value="General Checkup">General Checkup</option>
                  </select>
                  {errors.preferredDepartment && <p className="text-red-500 text-sm mt-1">{errors.preferredDepartment}</p>}
                </div>
              </div>

              {/* Account Credentials */}
              <div className="border-t-2 border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Create Your Account</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Username *</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.username ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Choose a username"
                    />
                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Password *</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Minimum 6 characters"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-lg"
                >
                  Register & Proceed
                </button>
                <button
                  type="button"
                  onClick={prefillDemoData}
                  className="w-full bg-blue-100 text-blue-700 py-2 rounded-lg hover:bg-blue-200 transition-colors font-medium text-sm border border-blue-300"
                >
                  🧪 Prefill Demo Data (for testing)
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="text-teal-600 font-semibold hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPatient;
