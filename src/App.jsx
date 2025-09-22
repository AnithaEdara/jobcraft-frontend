import React from "react";
import { Routes, Route } from "react-router-dom";  // ✅ no BrowserRouter here
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Home from "./pages/home";
import JobSeeker from "./pages/jobseeker";
import ManageProfile from "./pages/ManageProfile";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import AdminDashboard from "./pages/admin";
import MyJobs from "./pages/MyJobs";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/jobseeker" element={<JobSeeker />} />
      <Route path="/manage-profile" element={<ManageProfile />} />
      <Route path="/recruiter" element={<RecruiterDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route 
        path="/recruiter/my-jobs" 
        element={<MyJobs recruiterId={localStorage.getItem("userId")} />} 
      />
    </Routes>
  );
};

export default App;
