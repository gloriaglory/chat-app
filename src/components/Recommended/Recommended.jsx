import Image5 from "/assets/Image5.png";
import Image0 from "/assets/Image0.jpg";
import Image2 from "/assets/Image2.jpg";
import Image3 from "/assets/Image3.jpg";
import Image4 from "/assets/Image4.png";
import { FaStar } from "react-icons/fa";
import { FiArrowRight, FiSliders } from "react-icons/fi";
import { motion } from "framer-motion";
import { FadeUp } from "../animation/animation";

const ProductsData = [
  {
    id: 1,
    img: Image2,
    tittle: "Mama Mzungu Shop",
    rating: 5.0,
    Service: "retail shop",
    delay: 0.2,
  },

  {
    id: 2,
    img: Image0,
    tittle: "Flora kids wear",
    rating: 5.0,
    Service: "Children clothing",
    delay: 0.3,
  },
  {
    id: 3,
    img: Image3,
    tittle: "Mbweni Cosmetics",
    rating: 5.0,
    Service: "Beauty 7 cosmetics",
    delay: 0.4,
  },
  {
    id: 4,
    img: Image4,
    tittle: "Shoppers Supermarket",
    rating: 5.0,
    Service: "Retail shop",
    delay: 0.5,
  },
  {
    id: 5,
    img: Image5,
    tittle: "Umoja Technologies",
    rating: 5.0,
    Service: "Electronics and electical appliances",
    delay: 0.6,
  },
  {
    id: 1,
    img: Image2,
    tittle: "Mama Mzungu Shop",
    rating: 5.0,
    Service: "retail shop",
    delay: 0.2,
  },

  {
    id: 2,
    img: Image0,
    tittle: "Flora kids wear",
    rating: 5.0,
    Service: "Children clothing",
    delay: 0.3,
  },
  {
    id: 3,
    img: Image3,
    tittle: "Mbweni Cosmetics",
    rating: 5.0,
    Service: "Beauty 7 cosmetics",
    delay: 0.4,
  },
  {
    id: 4,
    img: Image4,
    tittle: "Shoppers Supermarket",
    rating: 5.0,
    Service: "Retail shop",
    delay: 0.5,
  },
  {
    id: 5,
    img: Image5,
    tittle: "Umoja Technologies",
    rating: 5.0,
    Service: "Electronics and electical appliances",
    delay: 0.6,
  },
];

const Recommended = () => {
  return (
    <div className="mt-10 mb-12 flex justify-center pb-10">
      <div className="container">
        {/* Title and Filter Button Section */}
        <div className="flex justify-between items-center px-6 ">
          <h2 className="text-xl font-semibold dark:text-white mb-8">
            Recommended for you
          </h2>
          <button className="text-black dark:text-white hover:text-primary p-1 rounded-full transition-colors duration-200 dark:hover:text-primary">
            <FiSliders className="w-5 h-5" />
          </button>
        </div>
        {/*body section*/}
        <div>
          <div className="grid grid-col-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/*Card section*/}
            {ProductsData.map((data) => (
              <motion.div
                variants={FadeUp(data.delay)}
                initial="hidden"
                whileInView={"visible"}
                key={data.id}
                className="w-[220px] h-[280px] p-4 bg-white/60 dark:bg-black rounded-3xl hover:scale-300 transition duration-500"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[150px] w-[150px] object-cover rounded-full mx-auto"
                />
                <div className="text-center mt-3">
                  <h3 className="font-semibold dark:text-white">
                    {data.tittle}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-white">
                    {data.Service}
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-end mt-12">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-full transition-transform duration-300 ease-in-out hover:translate-x-2">
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
