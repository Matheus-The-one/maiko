import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/Introduction/Introduction";
import { Home } from "./Pages/home";
import HistoryInfo from "./Pages/InfoPages/HistoryInfo";
import LiteratureInfo from "./Pages/InfoPages/LiteratureInfo";
import CinematographyInfo from "./Pages/InfoPages/CinematographyInfo"; // New Import

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  return (
    <Router>
      {/* Navbar and Introduction should only be rendered once */}
      <Routes>
        {/* Define the route for the home page */}
        <Route path="/" element={<Home />} />
        {/* Define the route for the History page with dynamic ID */}
        <Route path="/historyinfo/:id" element={<HistoryInfo />} />
        {/* Define the route for the Literature page with dynamic ID */}
        <Route path="/literatureinfo/:id" element={<LiteratureInfo />} />
        {/* Define the route for the Cinematography page with dynamic ID */}
        <Route path="/cinematographyinfo/:id" element={<CinematographyInfo />} />
        {/* Fallback route for unmatched paths */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
