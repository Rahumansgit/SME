import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Events from "./Pages/Events/Events";
/* import Ascension from "./Components/Ascension/Ascension";
import Pinnacle from "./Components/Pinnacle/Pinnacle"; */
import OBs from "./Pages/OBs/OBs";
import Projects from "./Pages/Projects/Projects";
import Resources from "./Pages/Resources/Resources";
import Alumini from "./Pages/Alumini/Alumini";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Route, Routes, Link } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { ThemeProvider } from "./Components/Context/ThemeContext";


function App() {

  return (
    <ThemeProvider>
      <Navbar />    
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/OBs" element={<OBs />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Alumini" element={<Alumini />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Join" element={
            <h1 style={{textAlign: "center", marginTop: "10rem" , marginBottom: "10rem"}}><span style={{color: "var(--primary)"}}>This Page is Under Development</span> <br /> Click here to go <Link to="/" style={{color: "var(--primary)" , textDecoration: "underline"}} >Home</Link></h1>
            } />
        <Route path="*" element={
            <h1 style={{textAlign: "center", marginTop: "10rem" , marginBottom: "10rem"}}> 404 <span style={{color: "var(--primary)"}}>Page Not Found!</span> <br /> Click here to go <Link to="/" style={{color: "var(--primary)" , textDecoration: "underline"}} >Home</Link></h1>
            } />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
