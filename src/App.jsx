import './index.css';
import Navbar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Recommended from './components/Recommended/Recommended';
import Footer from './components/Footer/Footer';



const App = () => {


  return (
    <div className=' dark:bg-gray-800'>
      <Navbar/>
      <Hero />
      <Products />
      <Recommended />
      <Footer />

    </div>
  )
}

export default App