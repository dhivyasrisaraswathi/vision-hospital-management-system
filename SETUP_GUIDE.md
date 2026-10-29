# Hospital Management System - Setup Guide

## ⚠️ Important: Node.js Installation Required

This project requires **Node.js** and **npm** to be installed on your system. Node.js is not currently detected.

### Step 1: Install Node.js

1. **Download Node.js**
   - Visit https://nodejs.org/
   - Download the LTS (Long Term Support) version
   - Current LTS: v20.x or later recommended

2. **Install Node.js**
   - Run the installer
   - Follow the setup wizard (accept default settings)
   - This will automatically install both Node.js and npm

3. **Verify Installation**
   - Open PowerShell or Command Prompt
   - Run: `node --version`
   - Run: `npm --version`
   - You should see version numbers for both

### Step 2: Install Project Dependencies

Once Node.js is installed, navigate to the project directory and run:

```bash
npm install
```

This will install all required dependencies:
- React
- React Router
- Tailwind CSS
- Chart.js & Recharts
- TypeScript
- Vite

### Step 3: Start Development Server

After installation, run:

```bash
npm run dev
```

This will:
- Start the Vite development server
- Automatically open your browser
- Display the URL (typically http://localhost:5173)

### Step 4: Access the Application

Navigate to `http://localhost:5173` in your browser.

## 🔐 Demo Credentials

### Patient Login
- **Username**: `patient1`
- **Password**: `1234`

### Admin Login
- **Username**: `admin`
- **Password**: `admin123`

## 📁 Project Structure

All project files are ready! The following have been created:

```
src/
├── pages/
│   ├── LandingPage.tsx       # Homepage with features overview
│   ├── LoginPage.tsx         # Authentication page
│   ├── PatientDashboard.tsx  # Patient-specific dashboard
│   └── AdminDashboard.tsx    # Admin operations dashboard
├── components/
│   ├── Navbar.tsx            # Top navigation bar
│   ├── Sidebar.tsx           # Side navigation menu
│   ├── Cards.tsx             # Reusable card components
│   ├── Charts.tsx            # Chart components
│   ├── ProtectedRoute.tsx    # Route protection wrapper
│   └── Utils.tsx             # Utility components
├── context/
│   └── AuthContext.tsx       # Authentication state management
├── data/
│   └── mockData.ts           # Hardcoded demo data
├── App.tsx                   # Main application component
└── main.tsx                  # Application entry point
```

## 🎨 Features Included

✅ **Landing Page** - Introduction and demo credentials display
✅ **Login System** - Hardcoded credentials with demo accounts
✅ **Patient Dashboard** - Medical records, appointments, waiting status
✅ **Admin Dashboard** - Analytics, KPIs, charts, and doctor utilization
✅ **Responsive Design** - Works on mobile, tablet, and desktop
✅ **Charts** - Bar, Line, and Pie charts for data visualization
✅ **Modern UI** - Blue & white medical theme with smooth animations
✅ **Role-based Access** - Different views for patients and admins

## 🛠 Available Commands

Once Node.js is installed and dependencies are installed:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## ❓ Troubleshooting

### "npm is not recognized"
- Node.js is not installed → Install it from https://nodejs.org/
- Node.js is installed but PATH is not updated → Restart PowerShell/Command Prompt after installation
- Environment variable issue → Reinstall Node.js with "Add to PATH" option checked

### Dependencies not installing
- Delete `node_modules` folder
- Delete `package-lock.json` file
- Run `npm install` again

### Application won't start
- Ensure Node.js is properly installed: `node --version`
- Check if port 5173 is available
- Try: `npm run dev -- --port 3000`

## 📱 Browser Access

Once the dev server is running, open your browser and navigate to:
- **Local**: http://localhost:5173
- **Mobile (same network)**: Find your IP address and use http://<your-ip>:5173

## 🚀 Ready to Go!

Once you have Node.js installed and run `npm install && npm run dev`, your Hospital Management System will be running!

The application includes:
- Landing page with feature overview
- Login page with demo credentials panel
- Patient-specific dashboard with medical history
- Admin dashboard with analytics and charts
- Real-time department status heatmaps
- Auto-refreshing data counters
- Smooth transitions and animations

**Demo Data**: All patient information, appointments, and hospital statistics are hardcoded for demonstration purposes.

---

For questions or issues, ensure Node.js is properly installed before troubleshooting further.
