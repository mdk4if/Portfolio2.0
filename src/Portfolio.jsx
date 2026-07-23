import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Links from "./pages/Links";
import Contact from "./pages/Contact";


const Portfolio = () => {
  return (
    <BrowserRouter basename="/Portfolio2.0">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/links" element={<Links/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Portfolio
