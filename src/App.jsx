import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pruebita from "./components/Home/Pruebita";
import Footer from "./components/layout/Footer";
import Eror from "./components/pages/Eror";
import Registrar from "./components/pages/Registrar";
import Login from "./components/pages/Login";
import Nosotros from "./components/pages/Nosotros";
import Faq from "./components/pages/Faq";
import Heder2 from "./components/layout/heder2";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Heder2 isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Pruebita />} />
        <Route path="/Registrar" element={<Registrar />} />
        <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/Eror" element={<Eror />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Faq" element={<Faq />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

