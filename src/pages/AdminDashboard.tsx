import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { KPICard, AlertBox, HeatmapCell } from '../components/Cards';
import { RefreshCounter, LoadingSpinner } from '../components/Utils';
import {
  adminData,
  departmentHeatMap
} from '../data/mockData';
import { Users, Clock, TrendingUp, Activity, AlertTriangle } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  useEffect(() => {
    // Auto-refresh counter
    const interval = setInterval(() => {
      setCounter(prev => (prev + 1) % 60);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <Sidebar />
        <main className="ml-20 md:ml-64 px-4 md:px-8 py-8">
          <LoadingSpinner message="Loading admin dashboard..." />
        </main>
      </>
    );
  }

  const waitingTimeData = [
    { name: 'Cataract', time: 42 },
    { name: 'Retina Care', time: 28 },
    { name: 'Glaucoma', time: 18 },
    { name: 'LASIK Surgery', time: 15 },
    { name: 'General Checkup', time: 12 }
  ];

  const utilizationTrendData = [
    { time: '08:00', utilization: 32 },
    { time: '09:00', utilization: 45 },
    { time: '10:00', utilization: 58 },
    { time: '11:00', utilization: 68 },
    { time: '12:00', utilization: 75 },
    { time: '13:00', utilization: 70 },
    { time: '14:00', utilization: 65 },
    { time: '15:00', utilization: 72 }
  ];

  const departmentDistributionData = [
    { name: 'Cataract', value: 42 },
    { name: 'Retina Care', value: 28 },
    { name: 'Glaucoma', value: 18 },
    { name: 'LASIK Surgery', value: 15 },
    { name: 'General Checkup', value: 12 }
  ];

  const COLORS = ['#ef4444', '#eab308', '#a855f7', '#22c55e', '#3b82f6'];

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
                Intelligent Queue Optimization Dashboard 🎯
              </h1>
              <p className="text-gray-600">Real-time monitoring and smart optimization to reduce patient waiting time.</p>
            </div>
            <RefreshCounter interval={5} />
          </div>

          {/* KPI Cards */}
          <div id="analytics" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 scroll-mt-20">
            <KPICard
              title="Total Eye Patients Today"
              value={adminData.kpis.totalPatientsToday}
              icon={<Users className="w-6 h-6" />}
              bgColor="bg-blue-50 border-blue-300"
              textColor="text-blue-600"
            />
            <KPICard
              title="Cataract Surgeries Scheduled"
              value={adminData.kpis.cataractSurgeriesScheduled}
              icon={<TrendingUp className="w-6 h-6" />}
              bgColor="bg-teal-50 border-teal-300"
              textColor="text-teal-600"
            />
            <KPICard
              title="Avg Eye Test Wait Time"
              value={`${adminData.kpis.averageEyeTestWaitingTime} min`}
              icon={<Clock className="w-6 h-6" />}
              bgColor="bg-orange-50 border-orange-300"
              textColor="text-orange-600"
            />
            <KPICard
              title="Retina Scan Load"
              value={`${adminData.kpis.retinaLoadPercentage}%`}
              icon={<Activity className="w-6 h-6" />}
              bgColor="bg-cyan-50 border-cyan-300"
              textColor="text-cyan-600"
            />
          </div>

          {/* Critical Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <AlertBox
              title="⚠️ Bottleneck Alert"
              message={adminData.bottleneckAlert}
              type="warning"
            />
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 rounded-lg p-4 card-hover">
              <h3 className="font-bold text-purple-900 mb-2">🤖 AI Prediction</h3>
              <p className="text-purple-800 text-sm">{adminData.aiPrediction}</p>
            </div>
          </div>

          {/* Department HeatMap */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Department Status</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {departmentHeatMap.map((dept) => (
                <HeatmapCell
                  key={dept.name}
                  department={dept.name}
                  status={dept.status}
                  color={dept.color}
                  patients={dept.patients}
                />
              ))}
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Waiting Time Chart - CSS Based */}
            <div className="bg-white rounded-lg shadow-md p-6 card-hover animate-slide-up">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Department Waiting Time Analysis</h3>
                <p className="text-sm text-gray-500">Identifies bottleneck departments with high patient waiting time.</p>
              </div>
              <div className="space-y-4">
                {waitingTimeData.map((dept) => (
                  <div key={dept.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-semibold text-gray-700">{dept.name}</span>
                      <span className="text-sm font-bold text-teal-600">{dept.time} min</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-teal-600 to-teal-400 transition-all duration-500"
                        style={{ width: `${(dept.time / 50) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctor Utilization Trend - Line Chart CSS Based */}
            <div className="bg-white rounded-lg shadow-md p-6 card-hover animate-slide-up">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Doctor Utilization Monitoring</h3>
                <p className="text-sm text-gray-500">Tracks doctor workload to detect overload or underutilization.</p>
              </div>
              <div className="flex items-end justify-around h-64 gap-2">
                {utilizationTrendData.map((data, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div
                      className="w-8 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t transition-all duration-500 hover:from-blue-700 hover:to-cyan-500"
                      style={{ height: `${(data.utilization / 100) * 200}px` }}
                      title={`${data.time}: ${data.utilization}%`}
                    ></div>
                    <span className="text-xs text-gray-600">{data.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-xs text-gray-500">Number of tests per hour</div>
            </div>
          </div>

          {/* Department Distribution & Doctor List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Department Distribution - Donut Chart CSS Based */}
            <div className="bg-white rounded-lg shadow-md p-6 card-hover animate-slide-up">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Patient Load Distribution</h3>
                <p className="text-sm text-gray-500">Shows distribution of patients across eye care departments.</p>
              </div>
              <div className="flex items-center justify-center mb-4">
                <svg width="200" height="200" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#ef4444" strokeWidth="30" strokeDasharray="118 360" transform="rotate(-90 100 100)" />
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#eab308" strokeWidth="30" strokeDasharray="79 360" strokeDashoffset="-118" transform="rotate(-90 100 100)" />
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#a855f7" strokeWidth="30" strokeDasharray="51 360" strokeDashoffset="-197" transform="rotate(-90 100 100)" />
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#22c55e" strokeWidth="30" strokeDasharray="42 360" strokeDashoffset="-248" transform="rotate(-90 100 100)" />
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#3b82f6" strokeWidth="30" strokeDasharray="34 360" strokeDashoffset="-290" transform="rotate(-90 100 100)" />
                </svg>
              </div>
              <div className="space-y-2">
                {departmentDistributionData.map((dept, idx) => (
                  <div key={dept.name} className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></div>
                    <span className="text-gray-700">{dept.name}</span>
                    <span className="ml-auto font-semibold text-gray-800">{dept.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctor List */}
            <div className="bg-white rounded-lg shadow-md p-6 card-hover animate-slide-up">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Eye Specialist Utilization</h3>
              <div className="space-y-3">
                {adminData.doctors.map((doctor) => (
                  <div key={doctor.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div>
                      <p className="font-semibold text-gray-800">{doctor.name}</p>
                      <p className="text-sm text-gray-500">{doctor.department}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-teal-600">{doctor.utilization}%</p>
                      <div className="w-24 h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-600 to-teal-400"
                          style={{ width: `${doctor.utilization}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Smart Optimization Insights Panel */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-lg p-6 card-hover animate-slide-up">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Smart Optimization Insights
              </h3>
              
              <div className="space-y-4">
                {adminData.kpis.averageEyeTestWaitingTime > 20 && (
                  <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                    <p className="font-semibold text-gray-800 mb-2">⚠️ High Waiting Time Detected</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Retina department operating above optimal capacity.</li>
                      <li>• Recommendation: Allocate 1 additional retina specialist.</li>
                      <li>• <strong>Expected wait time reduction: 6–8 minutes.</strong></li>
                    </ul>
                  </div>
                )}

                {adminData.doctors.some(d => d.utilization > 85) && (
                  <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                    <p className="font-semibold text-gray-800 mb-2">🔴 Doctor Overload Threshold</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Doctor workload approaching overload threshold.</li>
                      <li>• {adminData.doctors.filter(d => d.utilization > 85).map(d => d.name).join(', ')} at critical capacity.</li>
                      <li>• <strong>Action: Consider redistributing appointments.</strong></li>
                    </ul>
                  </div>
                )}

                {adminData.kpis.retinaLoadPercentage > 70 && (
                  <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
                    <p className="font-semibold text-gray-800 mb-2">🟡 Retina Department Alert</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Retina scan load at {adminData.kpis.retinaLoadPercentage}% capacity.</li>
                      <li>• Recommend scheduling non-urgent procedures to off-peak hours.</li>
                      <li>• • <strong>Estimated efficiency gain: 12-15%.</strong></li>
                    </ul>
                  </div>
                )}

                {adminData.kpis.averageEyeTestWaitingTime <= 20 && adminData.doctors.every(d => d.utilization <= 85) && (
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                    <p className="font-semibold text-gray-800 mb-2">✅ Optimal Performance</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Current waiting time is within acceptable range.</li>
                      <li>• Doctor utilization is well-balanced across departments.</li>
                      <li>• <strong>Status: System performing optimally.</strong></li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Optimization Impact Analysis */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Optimization Impact Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Before Optimization */}
              <div className="bg-white rounded-lg shadow-md p-6 card-hover animate-slide-up">
                <h3 className="font-bold text-gray-800 mb-4 text-center">📊 Before Optimization</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-gray-600 text-sm mb-2">Avg Waiting Time</p>
                    <p className="text-4xl font-bold text-orange-600">22 mins</p>
                  </div>
                  <div className="border-t pt-4 text-center">
                    <p className="text-gray-600 text-sm mb-2">Doctor Utilization</p>
                    <p className="text-3xl font-bold text-red-600">89%</p>
                  </div>
                  <div className="border-t pt-4 text-center">
                    <p className="text-gray-600 text-sm mb-2">Department Overload</p>
                    <p className="text-3xl font-bold text-yellow-600">3 Depts</p>
                  </div>
                </div>
              </div>

              {/* After Optimization */}
              <div className="bg-white rounded-lg shadow-md p-6 card-hover animate-slide-up">
                <h3 className="font-bold text-gray-800 mb-4 text-center">📈 After Optimization</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-gray-600 text-sm mb-2">Avg Waiting Time</p>
                    <p className="text-4xl font-bold text-green-600">14 mins</p>
                  </div>
                  <div className="border-t pt-4 text-center">
                    <p className="text-gray-600 text-sm mb-2">Doctor Utilization</p>
                    <p className="text-3xl font-bold text-green-600">73%</p>
                  </div>
                  <div className="border-t pt-4 text-center">
                    <p className="text-gray-600 text-sm mb-2">Department Overload</p>
                    <p className="text-3xl font-bold text-green-600">1 Dept</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Efficiency Improvement */}
            <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-green-900 text-lg">Efficiency Improvement</h4>
                <span className="text-3xl font-bold text-green-600">36%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-600 transition-all duration-700"
                  style={{ width: '36%' }}
                ></div>
              </div>
              <p className="text-sm text-green-800 mt-3">Reduction in patient waiting time through queue optimization logic.</p>
            </div>
          </div>

          {/* Queue Optimization Logic */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 rounded-lg p-6 card-hover">
              <h3 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚙️</span>
                Queue Optimization Logic Applied
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-indigo-900 text-sm">Priority-based Patient Sorting</p>
                      <p className="text-xs text-indigo-700">Emergency → Senior Citizen → Normal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-indigo-900 text-sm">Service Duration-based Scheduling</p>
                      <p className="text-xs text-indigo-700">Allocate time slots based on procedure complexity</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-indigo-900 text-sm">Doctor Workload Balancing</p>
                      <p className="text-xs text-indigo-700">Distribute appointments to reduce overload</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-indigo-900 text-sm">Slot Limit Enforcement</p>
                      <p className="text-xs text-indigo-700">Prevent overbooking beyond department capacity</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-indigo-200 flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✓</span>
                <div>
                  <p className="font-semibold text-indigo-900 text-sm">Department Overload Detection</p>
                  <p className="text-xs text-indigo-700">Real-time monitoring with automated alerts and recommendations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Footer */}
          <div id="reports" className="bg-white rounded-lg shadow-md p-6 text-center scroll-mt-20">
            <p className="text-gray-600">
              Last updated: Today at {new Date().toLocaleTimeString()} | Auto-refreshing data
            </p>
            <p className="text-xs text-gray-500 mt-2">This is a demo version with hardcoded data</p>
          </div>
        </main>
      </div>
    </div>
  );
};
