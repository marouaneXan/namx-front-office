import "./App.css";
import Navbar from "./Components/Layouts/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cars from "./Pages/cars/Cars"
import Footer from "./Components/Layouts/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
