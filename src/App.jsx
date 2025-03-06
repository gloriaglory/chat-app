import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import "./index.css";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import Image5 from "/assets/Image5.png";
import Home from "./components/Home/Home"; 

const bgStyle = {
  backgroundImage: `url(${Image5})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const App = () => {
  return (
    <Router> 
      <div style={bgStyle} className="dark:bg-black min-h-screen gap-0">
        <div className="min-h-screen bg-white/80 backdrop-blur-3xl dark:bg-black/80 gap-0">
          <Navbar /> 
          
          {/* Routes */}
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Products />
                <Recommended />
                <Reviews />
                <Footer />
              </>
            } />

            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
