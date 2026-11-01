// Hardcoded patient data
export const patientData = {
  id: "P1001",
  name: "Arjun Kumar",
  age: 32,
  bloodGroup: "O+",
  email: "arjun.kumar@example.com",
  phone: "+91-555-0123",
  registrationDate: "15 Jan 2024",
  visionType: "Myopia",
  leftEyePower: "-2.5",
  rightEyePower: "-2.0",
  lastEyeTest: "12 Feb 2026",
  nextAppointment: {
    doctor: "Dr. Sharma",
    department: "Retina Care",
    time: "3:00 PM",
    date: "20 Feb 2026",
    status: "Confirmed",
    type: "Retina Scan"
  }
};

export const appointmentData = {
  waitingTime: 15,
  queuePosition: 3,
  totalInQueue: 8
};

export const medicalRecords = [
  {
    id: 1,
    date: "12 Feb 2026",
    reason: "Vision Test Report",
    doctor: "Dr. Sharma",
    notes: "Vision clarity 6/6 in both eyes. Prescription power stable. No retinal abnormalities detected."
  },
  {
    id: 2,
    date: "05 Jan 2026",
    reason: "Eye Pressure (IOP) Results",
    doctor: "Dr. Patel",
    notes: "IOP Left Eye: 16 mmHg, Right Eye: 15 mmHg. Within normal limits. No glaucoma risk."
  },
  {
    id: 3,
    date: "18 Dec 2025",
    reason: "Fundus Scan Report",
    doctor: "Dr. Desai",
    notes: "Fundus examination normal. Retina appears healthy. Optic disc margin clear. No signs of diabetic retinopathy."
  }
];

export const departmentHeatMap = [
  { name: "Cataract", patients: 42, status: "Red", color: "#ef4444" },
  { name: "Retina Care", patients: 28, status: "Yellow", color: "#eab308" },
  { name: "Glaucoma", patients: 18, status: "Green", color: "#22c55e" },
  { name: "LASIK Surgery", patients: 15, status: "Green", color: "#22c55e" },
  { name: "General Checkup", patients: 12, status: "Green", color: "#22c55e" }
];

// Admin dashboard data
export const adminData = {
  kpis: {
    totalPatientsToday: 115,
    cataractSurgeriesScheduled: 8,
    averageEyeTestWaitingTime: 16,
    retinaLoadPercentage: 72
  },
  bottleneckAlert: "Retina Scan Room Overloaded - 28 patients waiting for scans",
  aiPrediction: "Expected increase in cataract consultations this evening. Recommend assigning additional cataract specialist for next shift.",
  doctors: [
    { id: 1, name: "Dr. Sharma", department: "Cataract", utilization: 92 },
    { id: 2, name: "Dr. Patel", department: "Retina Care", utilization: 88 },
    { id: 3, name: "Dr. Desai", department: "Glaucoma", utilization: 75 },
    { id: 4, name: "Dr. Gupta", department: "LASIK Surgery", utilization: 70 },
    { id: 5, name: "Dr. Mehta", department: "General Checkup", utilization: 65 }
  ]
};

// Waiting time per department (for bar chart)
export const departmentWaitingData = {
  labels: ["Cataract", "Retina Care", "Glaucoma", "LASIK Surgery", "General Checkup"],
  datasets: [
    {
      label: "Waiting Time (minutes)",
      data: [42, 28, 18, 15, 12],
      backgroundColor: [
        "rgba(239, 68, 68, 0.8)",
        "rgba(234, 179, 8, 0.8)",
        "rgba(34, 197, 94, 0.8)",
        "rgba(34, 197, 94, 0.8)",
        "rgba(34, 197, 94, 0.8)"
      ],
      borderColor: [
        "rgba(239, 68, 68, 1)",
        "rgba(234, 179, 8, 1)",
        "rgba(34, 197, 94, 1)",
        "rgba(34, 197, 94, 1)",
        "rgba(34, 197, 94, 1)"
      ],
      borderWidth: 1
    }
  ]
};

// Doctor utilization trend (for line chart)
export const doctorUtilizationData = {
  labels: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
  datasets: [
    {
      label: "Daily Vision Tests Trend",
      data: [32, 45, 58, 68, 75, 70, 65, 72],
      borderColor: "rgba(2, 132, 199, 1)",
      backgroundColor: "rgba(2, 132, 199, 0.1)",
      tension: 0.4,
      fill: true,
      borderWidth: 2
    }
  ]
};

// Department distribution (for pie chart)
export const departmentDistributionData = {
  labels: ["Cataract", "Retina Care", "Glaucoma", "LASIK Surgery", "General Checkup"],
  datasets: [
    {
      data: [42, 28, 18, 15, 12],
      backgroundColor: [
        "rgba(239, 68, 68, 0.8)",
        "rgba(234, 179, 8, 0.8)",
        "rgba(168, 85, 247, 0.8)",
        "rgba(34, 197, 94, 0.8)",
        "rgba(59, 130, 246, 0.8)"
      ],
      borderColor: [
        "rgba(239, 68, 68, 1)",
        "rgba(234, 179, 8, 1)",
        "rgba(168, 85, 247, 1)",
        "rgba(34, 197, 94, 1)",
        "rgba(59, 130, 246, 1)"
      ],
      borderWidth: 2
    }
  ]
};
