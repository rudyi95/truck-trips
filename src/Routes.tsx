import React from "react";
import { Route, Routes } from "react-router-dom";

import { MainPage, AddTripPage, TripsPage } from "./pages";
import { Layout } from "./containers";

const Routers: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="add-trip" element={<AddTripPage />} />
          <Route path="trips" element={<TripsPage />} />
        </Route>
        <Route path="*" element={<div style={{ padding: 20 }}>not found</div>} />
      </Routes>
    </div>
  );
};

export default Routers;
