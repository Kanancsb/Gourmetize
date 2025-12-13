import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sobre from "./pages/sobre/sobre";


function App() {

  return (
    <div>
      <Navbar />
      
      <Router>
        <Routes>
          <Route path="/sobre/sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </div>
  );

}



export default App;
