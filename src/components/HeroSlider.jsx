import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
import { ChevronRight, ChevronLeft } from "lucide-react";
import FusionImg from "../assets/fusion-lounge-Img/IMG_0752.jpg";
import ResortImg from "../assets/jbmResort-Img/IMG_0709.JPG";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

export default function HeroSlider() {
  return (
    <div className="relative w-full h-[50vh] md:h-screen">

      {/* CUSTOM ARROWS */}
      <div className="custom-prev absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50">
        <div className="w-8 md:w-10 h-12 md:h-16 bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/40 transition rounded-md">
          <ChevronLeft className="text-white w-5 h-5 md:w-7 md:h-7" />
        </div>
      </div>

      <div className="custom-next absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-50">
        <div className="w-8 md:w-10 h-12 md:h-16 bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/40 transition rounded-md">
          <ChevronRight className="text-white w-5 h-5 md:w-7 md:h-7" />
        </div>
      </div>

      <Swiper
        modules={[Autoplay, EffectCreative, Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-100%", 0, -400],
          },
          next: {
            translate: ["100%", 0, -400],
          },
        }}
        autoplay={{ delay: 4000 }}
        speed={1000}
        loop={true}
        className="h-full"
      >

        {/* SLIDE 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={FusionImg}
              className="w-full h-full object-cover scale-110 animate-[zoom_20s_linear_infinite]"
              alt="Resort"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
              <p className="text-sm md:text-lg tracking-widest mb-3">
                Welcome To
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                 The Fusion Lounge
              </h1>

              {/* <button className="mt-6 cursor-pointer md:mt-8 bg-yellow-600 px-6 md:px-10 py-2 md:py-3 rounded-lg text-sm md:text-lg hover:bg-yellow-700 transition">
                EXPLORE 
              </button> */}
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={ResortImg}
              className="w-full h-full object-cover scale-110 animate-[zoom_20s_linear_infinite]"
              alt="Waterpark"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                JBM Resort & WaterPark
              </h1>

              {/* <button className="mt-6 md:mt-8 bg-yellow-600 px-6 md:px-10 cursor-pointer py-2 md:py-3 rounded-lg text-sm md:text-lg hover:bg-yellow-700 transition">
                BOOK NOW
              </button> */}
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
