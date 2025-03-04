import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FadeLeft } from "../animation/animation";
import Image1 from "/assets/Image1.png";

const ReviewsData = [
  {
    id: 1,
    user: "John Doe",
    img: Image1,
    rating: 5,
    comment: "Amazing service! Highly recommend.",
    delay: 0.2,
  },
  {
    id: 2,
    user: "Sarah Smith",
    img: Image1,
    rating: 4,
    comment: "Great experience, but can improve in delivery speed.",
    delay: 0.3,
  },
  {
    id: 3,
    user: "Michael Johnson",
    img: Image1,
    rating: 5,
    comment: "Excellent quality and customer service.",
    delay: 0.4,
  },
  {
    id: 4,
    user: "Emma Wilson",
    img: Image1,
    rating: 5,
    comment: "Loved it! Will order again.",
    delay: 0.5,
  },
  // Second Row (Duplicate of First Row with new IDs)
  {
    id: 5,
    user: "John Doe",
    img: Image1,
    rating: 5,
    comment: "Amazing service! Highly recommend.",
    delay: 0.6,
  },
  {
    id: 6,
    user: "Sarah Smith",
    img: Image1,
    rating: 4,
    comment: "Great experience, but can improve in delivery speed.",
    delay: 0.7,
  },
  {
    id: 7,
    user: "Michael Johnson",
    img: Image1,
    rating: 5,
    comment: "Excellent quality and customer service.",
    delay: 0.8,
  },
  {
    id: 8,
    user: "Emma Wilson",
    img: Image1,
    rating: 5,
    comment: "Loved it! Will order again.",
    delay: 0.9,
  },
];

const Reviews = () => {
  return (
    <div className="mt-14 mb-12 bg-gray-100 dark:bg-black flex justify-center pb-10">
      <div className="container mt-10 px-4">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto dark:text-white">
          <p className="text-sm text-primary font-bold">Customer Feedback</p>
          <h1 className="text-3xl font-bold dark:text-white">User Reviews</h1>
          <p className="text-xs text-gray-600 dark:text-white">
            Hear what our satisfied customers have to say.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {ReviewsData.map((review) => (
            <motion.div
              key={review.id}
              variants={FadeLeft(review.delay)}
              initial="hidden"
              whileInView="visible"
              className="p-6 bg-white/50 dark:bg-gray-900 rounded-2xl shadow-md hover:scale-105 transition duration-300"
            >
              <div className="flex items-center gap-4">
                <img
                  src={review.img}
                  alt={review.user}
                  className="w-12 h-12 object-cover rounded-full border-2 border-primary"
                />
                <h3 className="font-semibold dark:text-white">{review.user}</h3>
              </div>
              <p className="mt-3 text-gray-600 dark:text-white">
                {review.comment}
              </p>
              <div className="flex mt-2">
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-full transition-transform duration-300 ease-in-out hover:translate-x-2">
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
