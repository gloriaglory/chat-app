import { FaGooglePlay, FaAppStore } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container text-center">
        <p>&copy; 2025 Your Company Name. All Rights Reserved.</p>
        
        {/* Download Our App*/}
        <div className="mt-6">
          <p className="text-lg mb-4">Download our app:</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://play.google.com/store" 
              className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-lg shadow-lg transition duration-200 border-2 border-white hover:border-primary"
            >
              <FaGooglePlay className="w-6 h-6 mr-2" />
              <span>Google Play</span>
            </a>
            
            <a
              href="https://apps.apple.com" 
               className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-lg shadow-lg transition duration-200 border-2 border-white hover:border-primary"
            >
              <FaAppStore className="w-6 h-6 mr-2" />
              <span>App Store</span>
            </a>
          </div>
        </div>
        
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
