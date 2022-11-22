import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { Dashboard, Auth, Views, MViewmain } from "@/layouts";
import { Dashboard, Auth, Views, MViewmain } from '@/layouts';
import { LoginContext } from "./context/LoginContext";

function App() {
  const [log, setLog] = useState(null);
  const [decoded, setDecoded] = useState(null);

  return (
    <LoginContext.Provider value={{ log, setLog, decoded, setDecoded }}>
      <Main />
    </LoginContext.Provider>
  );
}

export default App;

function Main() {
  return (
    < Routes >
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/view/*" element={<Views />} />
      <Route path="/mview/:id" element={<MViewmain />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes >
  )
}
