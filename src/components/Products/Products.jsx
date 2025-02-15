import Image from "/assets/Image.png";
import Image0 from "/assets/Image0.jpg";
import Image2 from "/assets/Image2.jpg";
import Image3 from "/assets/Image3.jpg";
import Image4 from "/assets/Image4.png";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const ProductsData = [
  {
    id: 1,
    img: Image2,
    tittle: "Mama Mzungu Shop",
    rating: 5.0,
    Service: "retail shop",
    aosDelay: 0,
  },

  {
    id: 2,
    img: Image0,
    tittle: "Flora kids wear",
    rating: 5.0,
    Service: "Children clothing",
    aosDelay: 0,
  },
  {
    id: 3,
    img: Image3,
    tittle: "Mbweni Cosmetics",
    rating: 5.0,
    Service: "Beauty 7 cosmetics",
    aosDelay: 0,
  },
  {
    id: 4,
    img: Image4,
    tittle: "Shoppers Supermarket",
    rating: 5.0,
    Service: "Retail shop",
    aosDelay: 0,
  },
  {
    id: 5,
    img: Image,
    tittle: "Umoja Technologies",
    rating: 5.0,
    Service: "Electronics and electical appliances",
    aosDelay: 0,
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12 bg-gray-100 flex justify-center dark:bg-orange-50">
      <div className="container mt-10">
        {/*header*/}
        <div className="text-center mb-10 mx-w-[600px] mx auto">
          <p className="text-sm text-primary font-bold">Top sellers for you</p>
          <h1 className="text-3xl font-bold">Popular Sellers</h1>
          <p className="text-xs text-gray-600">
            get quality products at an affordable price right at your doorstep
          </p>
        </div>
        {/*body section*/}
        <div>
          <div className="grid grid-col-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/*Card section*/}
            {ProductsData.map((data) => (
              <div key={data.id} className="space-y-3">
                <img 
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] round-md sm:h-[150px] sm:w-[200px] sm:scale-125 object-contain mx-auto"
                />
                <div>
                  <h3 className="font-semibold">{data.tittle}</h3>
                  <p className="text-sm text-gray-600">{data.Service}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
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
