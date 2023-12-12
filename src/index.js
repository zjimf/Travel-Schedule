import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Verify from "./Auth/Verify";
import Forgot from "./Auth/Forgot";
import NodeSchedule from "./NodeSchedule/NodeSchedule";
import Profile from "./Profile/Profile";
import { db } from "./config/firebase-config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/nodeSchedule" element={<NodeSchedule />} />
    </Routes>
  </Router>
);
