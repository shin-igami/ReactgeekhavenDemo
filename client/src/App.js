import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Footer from "./components/Footer";
import Teams from "./pages/Teams";
import ApiState from "./contextApi/ApiState";
import Blogs from "./pages/Blogs";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <ApiState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Teams" element={<Teams />} />
          <Route exact path="/Blogs" element={<Blogs/>} />
          <Route exact path="/Projects" element={<Project/>} />
          <Route exact path="/Contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
      </ApiState>
    </>
  );
}

export default App;
