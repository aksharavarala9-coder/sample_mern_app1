import Header from "./assets/components/Header.jsx";
import Footer from "./assets/components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import HrHome from "./pages/HrHome.jsx";
import EmpHome from "./pages/EmpHome.jsx";
import AdminHome from "./pages/AdminHome.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hrhome" element={<HrHome />} />
        <Route path="/Emphome" element={<EmpHome />} />
        <Route path="/Adminhome" element={<AdminHome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
