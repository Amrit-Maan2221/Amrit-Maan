import './App.css';
import Navbar from './Components/Header/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './Components/Content/Hero';
import Projects from './Components/Content/Projects/Projects';
import Skills from './Components/Content/Skills/Skills';
import About from './Components/Content/About/About';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/blogs" element={<><Hero /></>} />
        <Route exact path="/" element={<><Hero main="main" /><Projects /><Skills /><About /></>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
