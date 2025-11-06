import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AddListingDashboard from "./pages/AddListingDashboard/AddListingDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-listing" element={<AddListingDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
