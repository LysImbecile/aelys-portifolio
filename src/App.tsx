import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/About/Projects";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App () {
  return (
      <Router>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
  );
}
export default App
