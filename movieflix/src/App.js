import React from "react";
import "./App.css";
import { Navbar, Hero } from "./components/index";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900/10 to-[#040814] lg:h-[140vh]">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
