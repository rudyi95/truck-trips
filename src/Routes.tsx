import React from "react";
import { Route, Routes } from "react-router-dom";

import { MainPage, AddTripPage, TripsPage } from "./pages";

const Routers: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="add-trip" element={<AddTripPage />} />
        <Route path="trips" element={<TripsPage />} />
        <Route path="*" element={<div style={{ padding: 20 }}>not found</div>} />
      </Routes>
    </div>
  );
};

export default Routers;
