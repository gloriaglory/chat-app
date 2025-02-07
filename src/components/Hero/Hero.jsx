import Image1 from "/assets/Image1.png"
import Image3 from "/assets/Image3.png"
import Image4 from "/assets/Image4.png"


const ImageList = [
    {
      id: 1,
      img: Image1,
      tittle: "Upto 50% off classic wear!",
      description: "Lorem ipsum dolor sit amet consectetur. At mi consectetur mattis viverra nisi rhoncus ridiculus sapien. Egestas convallis vehicula libero nisl odio consectetur nunc nulla tristique. ",
    },
    {
        id: 2,
        img: Image3,
        tittle: "Upto 50% off classic wear!",
        description: "Lorem ipsum dolor sit amet consectetur. At mi consectetur mattis viverra nisi rhoncus ridiculus sapien. Egestas convallis vehicula libero nisl odio consectetur nunc nulla tristique. ",
      },
      {
        id: 3,
        img: Image4,
        tittle: "Upto 50% off classic wear!",
        description: "Lorem ipsum dolor sit amet consectetur. At mi consectetur mattis viverra nisi rhoncus ridiculus sapien. Egestas convallis vehicula libero nisl odio consectetur nunc nulla tristique. ",
      },
  ];
  

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {/*background pattern*/}

        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">
        </div>
        {/*background pattern*/}
        <div className="container pb-8 sm:pb-0">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                        <h1 className="text-5xl">lorem ipsum</h1>
                        <p className="text-sm sm:text-6xl lg:text-7xl font-bold">Lorem ipsum dolor sit amet consectetur. At mi consectetur mattis viverra nisi rhoncus ridiculus sapien.</p>
                        <div>
                            <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full ">Order Now</button>
                        </div>
                    </div>
                    {/*image section*/}
                    <div className="order-1 sm:order-2">
                        <div className="relative z-10">
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