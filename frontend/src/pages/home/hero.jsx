import React, { useRef } from "react";
import { Navbar } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { slide1, slide2, slide3 } from "../../assets/images";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const swiperData = [
  {
    id: 1,
    image: slide1,
    topText: "9x19mm Parabellum .40 S&W .45 acp",
    mainText: "BERETTA PX4 STORM ",
    price: "$1275.50",
  },
  {
    id: 2,
    image: slide2,
    topText: ".22 LR/WMR Mini-Revolver 1.63",
    mainText: "Mini Revolver",
    price: "$975.50",
  },
  {
    id: 2,
    image: slide3,
    topText: ".22 LR Bolt Action Rifle 22 Barrel 10 Rounds",
    mainText: "Rimple Rifle",
    price: "$975.50",
  },
];

function Hero() {
  const swiperRef = useRef();

  return (
    <div className="relative">
      <div className="absolute inset-0 w-full h-[80px] z-[2]">
        <Navbar />
      </div>
      <Swiper
        slidesPerView={1}
        modules={[Autoplay]}
        loop={true}
        ref={swiperRef}
        autoplay={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {swiperData?.map((item) => (
          <SwiperSlide>
            <div className={`relative min-h-screen`}>
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={item.image}
              />
              <div className="absolute h-full w-full flex flex-col justify-center items-center ">
                <div className="main-container w-full h-full flex flex-col justify-center items-center gap-4">
                  <h4 className="text-white text-[18px] md:text-[30px] font-[600] uppercase text-center">
                    {item.topText}
                  </h4>
                  <h1 className="text-center text-secondary text-[50px] sm:text-[80px] md:text-[120px] font-[600] secondary-font leading-[40px] sm:leading-[70px] md:leading-[100px]">
                    {item.mainText}
                  </h1>
                  <h1 className="text-center text-white text-[50px] sm:text-[80px] md:text-[120px] font-[600] secondary-font leading-[40px] sm:leading-[70px] md:leading-[100px]">
                    {item.price}
                  </h1>
                  <button className="bg-secondary text-white mt-4 px-8 md:px-12 py-4 text-[16px] md:text-[24px] font-[600] ">
                    Shop Now
                  </button>

                  <div className="mt-4 flex justify-center items-center gap-4 md:hidden">
                    <div
                      className="size-8 bg-secondary justify-center items-center rounded-sm cursor-pointer flex"
                      onClick={() => swiperRef.current?.slidePrev()}
                    >
                      <IoIosArrowBack className="text-white text-[24px]" />
                    </div>
                    <div
                      className="size-8 bg-secondary justify-center items-center rounded-sm cursor-pointer flex"
                      onClick={() => swiperRef.current?.slideNext()}
                    >
                      <IoIosArrowForward className="text-white text-[24px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="absolute top-1/2 -translate-y-1/2 size-8 bg-secondary justify-center items-center rounded-sm cursor-pointer left-2 z-[1] hidden md:flex"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <IoIosArrowBack className="text-white text-[24px]" />
      </div>
      <div
        className="absolute top-1/2 -translate-y-1/2 size-8 bg-secondary justify-center items-center rounded-sm cursor-pointer right-2 z-[1] hidden md:flex"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <IoIosArrowForward className="text-white text-[24px]" />
      </div>
    </div>
  );
}

export default Hero;
