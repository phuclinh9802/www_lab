import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Research from "./pages/Research/Research";
import Publication from "./pages/Publication/Publication";
import Teaching from "./pages/Teaching/Teaching";
import Contact from "./pages/Contact/Contact";
import Members from "./pages/Members/Members";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/lab-members" element={<Members />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
