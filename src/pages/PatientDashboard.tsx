import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import {
  PatientCard,
  AppointmentCard,
  WaitingStatusCard,
  AlertBox
} from '../components/Cards';
import { RefreshCounter, LoadingSpinner } from '../components/Utils';
import { patientData, appointmentData, medicalRecords } from '../data/mockData';
import { FileText, Plus } from 'lucide-react';

export const PatientDashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <Sidebar />
        <main className="ml-20 md:ml-64 px-4 md:px-8 py-8">
          <LoadingSpinner message="Loading your dashboard..." />
        </main>
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="ml-20 md:ml-64 flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 px-4 md:px-8 py-8">
          {/* Header */}
          <div id="dashboard" className="flex justify-between items-start mb-8 scroll-mt-20">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Welcome, {patientData.name}! 👋
              </h1>
              <p className="text-gray-600">Here's your eye care dashboard</p>
            </div>
            <RefreshCounter interval={5} />
          </div>

          {/* Book Appointment Button */}
          <div className="mb-8 text-center">
            <Link
              to="/book-appointment"
              className="inline-block bg-gradient-to-r from-teal-600 to-blue-600 !text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all transform hover:scale-105 font-semibold text-lg no-underline"
            >
              📅 Book an Appointment
            </Link>
          </div>

          {/* Patient Profile and Appointment Overview */}
          <div id="appointments" className="grid md:grid-cols-2 gap-6 mb-8 scroll-mt-20">
            <PatientCard
              name={patientData.name}
              patientId={patientData.id}
              age={patientData.age}
              bloodGroup={patientData.bloodGroup}
              email={patientData.email}
              visionType={patientData.visionType}
              leftEyePower={patientData.leftEyePower}
              rightEyePower={patientData.rightEyePower}
              lastEyeTest={patientData.lastEyeTest}
            />
            <AppointmentCard
              doctor={patientData.nextAppointment.doctor}
              department={patientData.nextAppointment.department}
              time={patientData.nextAppointment.time}
              date={patientData.nextAppointment.date}
              status={patientData.nextAppointment.status}
              type={patientData.nextAppointment.type}
            />
          </div>

          {/* Waiting Status */}
          <div className="mb-8">
            <WaitingStatusCard
              waitingTime={appointmentData.waitingTime}
              queuePosition={appointmentData.queuePosition}
              totalInQueue={appointmentData.totalInQueue}
            />
          </div>

          {/* Medical Records */}
          <div id="medical-records" className="mb-8 scroll-mt-20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Your Vision Test Reports</h2>
              <button className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <Plus className="w-4 h-4" />
                Request Report
              </button>
            </div>

            <div className="space-y-3">
              {medicalRecords.map((record) => (
                <div key={record.id} className="bg-white rounded-lg shadow-md p-6 card-hover animate-slide-up border-l-4 border-teal-200">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-teal-600" />
                        <h3 className="text-lg font-bold text-gray-800">{record.reason}</h3>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{record.date}</p>
                    </div>
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {record.doctor}
                    </span>
                  </div>
                  <p className="text-gray-700">{record.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Info Alert */}
          <div className="mb-8">
            <AlertBox
              title="Quick Tip"
              message="Your next appointment for Retina Scan with Dr. Sharma is on 20 Feb 2026 at 3:00 PM. Please arrive 10 minutes early."
              type="info"
            />
          </div>
        </main>
      </div>
    </div>
  );
};
