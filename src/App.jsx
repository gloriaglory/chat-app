import './index.css';
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Recommended from './components/Recommended/Recommended';
import Footer from './components/Footer/Footer';
import Image5 from "/assets/Image5.png";

const bgStyle = {
  backgroundImage: `url(${Image5})`,
  backgroundRepeat: "no-repeate",
  backgroundSize: "cover",
  backgroundPosition: "center",
};


const App = () => { 


  return (
    <div style={bgStyle} className=' dark:bg-black min-h-screen gap-0'>
      <div className='min-h-screen bg-white/50 backdrop-blur-3xl dark:bg-black/50 gap-0 '>
      <Navbar/>
      <Hero />
      <Products />
      <Recommended />
      <Footer />
      </div>
    </div>
  )
}

export default App