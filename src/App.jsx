import { useState } from "react";
import axios from "axios";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Show from "./components/Show"
import Services from "./components/Services"

function App() {


  return (
    <div className="p-4">
      <nav className="flex items-center justify-center border-b-[1px] gap-10 mt-5 font-semibold text-lg uppercase">
        <Link to="/">Home</Link>
        <Link to="/show">Show</Link>
        <Link to="/services">Services</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/show" element={<Show/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </div>
  );
}

export default App;
