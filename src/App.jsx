import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Student from "./Students";
import Teacher from "./Teacher";
import Admin from "./Admin";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 👈 naya state

  // 🚀 Load user from localStorage on first render
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false); // ✅ localStorage check done
  }, []);

  // 🚀 Whenever user changes, save it to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  if (loading) {
    return <div style={{ color: "white" }}>Loading...</div>; // ⏳ jab tak restore ho raha
  }

  return (
    <Routes>
      <Route path="/" element={<Home setUser={setUser} />} />
      <Route path="/student" element={<Student user={user} setUser={setUser} />} />
      <Route path="/Teacher" element={<Teacher user={user} setUser={setUser} />} />
      <Route path="/admin" element={<Admin user={user} setUser={setUser} />} />
    </Routes>
  );
}

export default App;
