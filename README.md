# Hospital Management System

A comprehensive, fully functional Hospital Management System built with React, Tailwind CSS, and React Router. This is a frontend-only demo application with hardcoded data.

## Features

### 🔐 Authentication
- **Patient Login**: Username: `patient1`, Password: `1234`
- **Admin Login**: Username: `admin`, Password: `admin123`
- Secure session management with localStorage
- Role-based access control

### 👤 Patient Dashboard
- Personal health profile with patient ID, age, and blood group
- Next appointment details
- Real-time waiting status and queue position
- Medical records history with visit details
- Department health heatmap (color-coded by capacity)

### 🛠 Admin Dashboard
- **KPI Cards**: Total patients, average waiting time, crowded departments, doctor utilization
- **Analytics Charts**:
  - Bar chart: Waiting time per department
  - Line chart: Doctor utilization trends
  - Pie chart: Department distribution
- **Alerts**: Bottleneck warnings and AI-powered predictions
- **Doctor Performance**: Individual doctor utilization metrics
- Real-time data refresh counters

### 🎨 UI Features
- Modern medical theme with blue/white color palette
- Responsive design for mobile and desktop
- Smooth animations and transitions
- Card-based component design
- Sidebar navigation with collapsible menu
- Professional healthcare-focused styling

## Tech Stack

- **React 18** - UI library
- **Vite** - Fast build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React Router** - Client-side routing
- **Recharts** - Interactive charts and visualizations
- **Lucide React** - Modern icon library

## Project Structure

```
src/
├── pages/               # Application pages
│   ├── LandingPage.tsx
│   ├── LoginPage.tsx
│   ├── PatientDashboard.tsx
│   └── AdminDashboard.tsx
├── components/          # Reusable components
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   ├── Cards.tsx
│   ├── Charts.tsx
│   ├── ProtectedRoute.tsx
│   └── Utils.tsx
├── context/             # React Context
│   └── AuthContext.tsx
├── data/                # Mock/hardcoded data
│   └── mockData.ts
├── App.tsx              # Main app component
└── main.tsx             # Entry point
```

## Installation

1. Ensure Node.js (v16+) and npm are installed

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Demo Data

All data is hardcoded for demonstration purposes:
- Patient profiles with medical history
- Appointment schedules
- Department statistics
- Doctor utilization metrics
- Waiting queue information

## Navigation

### Landing Page
- Introduction to the system
- Feature highlights
- Demo credential information
- Easy navigation to login

### Login Page
- Secure authentication form
- Demo credentials display
- Error handling with clear messages
- Loading states during authentication

### Patient Dashboard
- Personal health information
- Current appointment status
- Medical records and history
- Department capacity overview
- Waiting queue status

### Admin Dashboard
- Hospital operations overview
- Real-time analytics and metrics
- Department performance heatmap
- Doctor utilization tracking
- Predictive alerts and insights

## Features Implemented

✅ Hardcoded patient and admin data
✅ Login with demo credentials
✅ Patient dashboard with medical records
✅ Admin dashboard with analytics
✅ Responsive design for all devices
✅ Smooth animations and transitions
✅ Loading spinners and status indicators
✅ Auto-refresh counters
✅ Department heatmaps
✅ Interactive charts (bar, line, pie)
✅ Professional medical theme
✅ Sidebar navigation
✅ Role-based access control
✅ Clean, modern UI

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- This is a **frontend-only** demonstration
- No backend server is required
- No database is used
- All data is hardcoded and will reset on page refresh
- Perfect for presentations, demonstrations, and UI/UX prototyping

## Future Enhancements

- Backend API integration
- Real database connectivity
- Advanced filtering and search
- Print/export functionality
- Notification system
- Appointment booking
- Prescription management
- Payment integration

## License

This project is open source and available for demonstration and educational purposes.
