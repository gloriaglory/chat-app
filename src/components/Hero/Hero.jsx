import image from "/assets/image.png";
import { motion } from "framer-motion";
import { FadeRight, FadeUp } from "../animation/animation";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] gap-0 flex justify-center items-center dark:text-white  pb-0">
      {/*Hero section*/}
      <div className="container gap-0">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
              <motion.h1
                variants={FadeRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-6xl font-bold"
              >
                {" "}
                Shop from any store anywhere with up to 30% discount{" "}
              </motion.h1>
              <motion.p
                variants={FadeRight(0.9)}
                initial="hidden"
                animate="visible"
                className="text-sm sm:text-2xl lg:text-4xl"
              >
                Shop the best product from any store with us. Our services are
                top-notch.{" "}
              </motion.p>
              <motion.div
                variants={FadeRight(1.5)}
                initial="hidden"
                animate="visible"
              >
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full ">
                  Order Now
                </button>
              </motion.div>
            </div>
            {/*image section*/}
            <div className="order-1 sm:order-2">
              <div className="relative z-10">
                <motion.img
                  src={image}
                  alt=""
                  variants={FadeUp(1.2)}
                  initial="hidden"
                  animate="visible"
                  className="w-[800px] h-[900px] sm:h-[750px] sm:w-[750px] sm:scale-125 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
