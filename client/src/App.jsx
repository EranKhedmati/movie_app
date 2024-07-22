import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Header from "../components/Header";
import Home from "../components/Home";

function App() {
  return (
    <div className="font-poppins">
      {/* Header */}
      <Header />
      {/* Routes */}
      <Routes>
        {/* This route is example */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
