import Image5 from "/assets/Image5.png";
import Image0 from "/assets/Image0.jpg";
import Image2 from "/assets/Image2.jpg";
import Image3 from "/assets/Image3.jpg";
import Image4 from "/assets/Image4.png";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { FadeLeft } from "../animation/animation";

const ProductsData = [
  {
    id: 1,
    img: Image2,
    tittle: "Mama Mzungu Shop",
    rating: 5.0,
    Service: "Retail shop",
    delay: 0.2,
  },

  {
    id: 2,
    img: Image0,
    tittle: "Flora Kids Wear",
    rating: 5.0,
    Service: "Children clothing",
    delay: 0.3,
  },

  {
    id: 3,
    img: Image3,
    tittle: "Mbweni Cosmetics",
    rating: 5.0,
    Service: "Beauty & Cosmetics",
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
    Service: "Electronics & Appliances",
    delay: 0.6,
  },
  {
  id: 1,
  img: Image2,
  tittle: "Mama Mzungu Shop",
  rating: 5.0,
  Service: "Retail shop",
  delay: 0.2,
},

{
  id: 2,
  img: Image0,
  tittle: "Flora Kids Wear",
  rating: 5.0,
  Service: "Children clothing",
  delay: 0.3,
},

{
  id: 3,
  img: Image3,
  tittle: "Mbweni Cosmetics",
  rating: 5.0,
  Service: "Beauty & Cosmetics",
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
  Service: "Electronics & Appliances",
  delay: 0.6,
},
];

const Products = () => {
  return (
    <div className="mt-14 mb-12 bg-gray-100 flex justify-center dark:bg-black gap-0 pb-20 ">
      <div className="container mt-10">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto dark:text-white">
          <p className="text-sm text-primary font-bold">Top Sellers for You</p>
          <h1 className="text-3xl font-bold dark:text-white">
            Popular Sellers
          </h1>
          <p className="text-xs text-gray-600 dark:text-white">
            Get quality products at an affordable price right at your doorstep.
          </p>
        </div>

        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((data) => (
              <motion.div
                key={data.id}
                variants={FadeLeft(data.delay)}
                initial="hidden"
                whileInView="visible"
                className="w-[220px] h-[280px] p-4 dark:bg-gray-900 shadow-md"

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

          {/* Button */}
          <div className="flex justify-end mt-6">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-full transition-transform duration-300 ease-in-out hover:translate-x-2">
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
