import Image1 from "/assets/Image1.png"

  

const Hero = () => {

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white">
        
        {/*background pattern*/}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">
        </div>
        {/*Hero section*/}
        <div className="container pb-8 sm:pb-0">
            <div>

                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                        <h1 className="text-6xl font-bold">Shop the best products from any store anywhere with up to 30% discount this valentine!!</h1>
                        <p className="text-sm sm:text-2xl lg:text-4xl">Our services are top-notch. </p>
                        <div>
                            <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full ">Order Now</button>
                        </div>
                    </div>
                    {/*image section*/}
                    <div className="order-1 sm:order-2">
                        <div 
                        className="relative z-10">
                            <img src={Image1} alt=""  className="w-[750px] h-[750px] sm:h-[650px] sm:w-[650px] sm:scale-125 object-contain mx-auto"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero