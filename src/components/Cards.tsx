import React from 'react';
import { Users, Clock, AlertCircle, TrendingUp } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

export const KPICard: React.FC<KPICardProps> = ({ title, value, icon, bgColor, textColor }) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 shadow-md border-l-4 ${textColor} card-hover animate-slide-up`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-semibold">{title}</p>
          <p className={`text-3xl font-bold mt-2 ${textColor}`}>{value}</p>
        </div>
        <div className={`p-3 rounded-full opacity-20`} style={{ backgroundColor: bgColor.split(' ')[1] }}>
          {icon}
        </div>
      </div>
    </div>
  );
};

interface PatientCardProps {
  name: string;
  patientId: string;
  age: number;
  bloodGroup: string;
  email?: string;
  visionType?: string;
  leftEyePower?: string;
  rightEyePower?: string;
  lastEyeTest?: string;
}

export const PatientCard: React.FC<PatientCardProps> = ({ name, patientId, age, bloodGroup, email, visionType, leftEyePower, rightEyePower, lastEyeTest }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 card-hover animate-slide-up border-t-4 border-teal-600">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500 mt-1">ID: {patientId}</p>
        </div>
        <div className="bg-teal-100 px-3 py-1 rounded-full">
          <p className="text-teal-700 font-bold">{bloodGroup}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500 text-sm">Age</p>
          <p className="text-lg font-semibold text-gray-800">{age} years</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Email</p>
          <p className="text-sm text-gray-800 truncate">{email || 'N/A'}</p>
        </div>
        {visionType && (
          <div>
            <p className="text-gray-500 text-sm">Vision Type</p>
            <p className="text-sm font-semibold text-gray-800">{visionType}</p>
          </div>
        )}
        {lastEyeTest && (
          <div>
            <p className="text-gray-500 text-sm">Last Eye Test</p>
            <p className="text-sm font-semibold text-gray-800">{lastEyeTest}</p>
          </div>
        )}
      </div>
      {(leftEyePower || rightEyePower) && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-2">Prescription Power</p>
          <div className="grid grid-cols-2 gap-4">
            {leftEyePower && (
              <div>
                <p className="text-xs text-gray-600">Left Eye</p>
                <p className="text-sm font-semibold text-gray-800">{leftEyePower}</p>
              </div>
            )}
            {rightEyePower && (
              <div>
                <p className="text-xs text-gray-600">Right Eye</p>
                <p className="text-sm font-semibold text-gray-800">{rightEyePower}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

interface AppointmentCardProps {
  doctor: string;
  department: string;
  time: string;
  date: string;
  status: string;
  type?: string;
}

export const AppointmentCard: React.FC<AppointmentCardProps> = ({ doctor, department, time, date, status, type }) => {
  const statusColor = status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 card-hover animate-slide-up border-l-4 border-teal-500">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">{doctor}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor}`}>
          {status}
        </span>
      </div>
      <div className="space-y-3">
        {type && (
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm font-semibold">Service:</span>
            <span className="text-gray-800">{type}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm font-semibold">Department:</span>
          <span className="text-gray-800">{department}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-teal-600" />
          <span className="text-gray-800">{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm font-semibold">Date:</span>
          <span className="text-gray-800">{date}</span>
        </div>
      </div>
    </div>
  );
};

interface WaitingStatusCardProps {
  waitingTime: number;
  queuePosition: number;
  totalInQueue: number;
}

export const WaitingStatusCard: React.FC<WaitingStatusCardProps> = ({ waitingTime, queuePosition, totalInQueue }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg shadow-md p-6 card-hover animate-slide-up border-2 border-teal-200">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-teal-600" />
        Eye Test Room Queue Status
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-gray-600 text-sm">Waiting Time</p>
          <p className="text-3xl font-bold text-teal-600 mt-1">{waitingTime}</p>
          <p className="text-xs text-gray-500">minutes</p>
        </div>
        <div className="text-center border-l border-r border-gray-300">
          <p className="text-gray-600 text-sm">Your Position</p>
          <p className="text-3xl font-bold text-blue-600 mt-1">{queuePosition}</p>
          <p className="text-xs text-gray-500">in queue</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm">Total in Queue</p>
          <p className="text-3xl font-bold text-cyan-600 mt-1">{totalInQueue}</p>
          <p className="text-xs text-gray-500">patients</p>
        </div>
      </div>
    </div>
  );
};

interface AlertBoxProps {
  title: string;
  message: string;
  type: 'warning' | 'info' | 'error' | 'success';
}

export const AlertBox: React.FC<AlertBoxProps> = ({ title, message, type }) => {
  const colors = {
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    success: 'bg-green-50 border-green-200 text-green-800'
  };

  const icons = {
    warning: '⚠️',
    info: 'ℹ️',
    error: '❌',
    success: '✅'
  };

  return (
    <div className={`border-l-4 rounded-lg p-4 ${colors[type]} animate-slide-up`}>
      <div className="flex gap-3">
        <span className="text-2xl">{icons[type]}</span>
        <div>
          <h4 className="font-bold">{title}</h4>
          <p className="text-sm mt-1">{message}</p>
        </div>
      </div>
    </div>
  );
};

interface HeatmapCellProps {
  department: string;
  status: string;
  color: string;
  patients: number;
}

export const HeatmapCell: React.FC<HeatmapCellProps> = ({ department, status, color, patients }) => {
  return (
    <div className="card-hover animate-slide-up" title={`${department}: ${patients} patients`}>
      <div
        className="rounded-lg p-4 text-white shadow-md transition-all duration-300 hover:shadow-lg"
        style={{ backgroundColor: color }}
      >
        <p className="font-bold text-sm">{department}</p>
        <p className="text-xl font-bold mt-2">{patients}</p>
        <p className="text-xs opacity-90 mt-1">patients</p>
      </div>
    </div>
  );
};
