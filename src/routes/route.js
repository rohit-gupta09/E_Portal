import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from '../pages/homepage'
export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="*" element={<h1>404 error page not found</h1>} />
    </Routes>
  );
}
