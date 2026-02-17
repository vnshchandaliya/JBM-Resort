
import { FaCheck } from "react-icons/fa";
import GallerySection from "../components/GallerySection";

export default function Waterpark() {
  return (
          <>
           {/* ================= HERO ================= */}
      <section
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "url(https://www.grandbearresort.com/images/slider/slider-1.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-6xl font-extrabold mt-32">
         {/*  */}
        </h1>
      </section>
         
    <section className="bg-[#f5f1ea] py-16 px-4 md:px-30">

      <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT CONTENT */}
        <div>

         <div className="text-center max-w-4xl mx-auto">
    <p className="text-sm tracking-widest text-gray-600 mb-2">
   JBM Resort Falls
    </p>

    <h2 className="font-heading text-4xl md:text-6xl text-[#5a9aa8] font-semibold">
     Indoor Waterpark
    </h2>

    <p className="text-gray-600 mt-4 text-lg">
          Wave Filled Adventures Await
        </p>

    <div className="w-20 h-[2px] bg-gray-400 mx-auto mt-4"></div>
  </div>
  <div className="mt-10">
           <strong >Enjoy a wet and wild family vacation at Grand Bear Falls!</strong>
           
          <p className="text-gray-700 leading-relaxed mb-6 mt-4">
            Our 24,000 square foot indoor waterpark with play zones, slides, wave pool, lazy river, and 15 person hot tub! Splash the day away in the wave pool, slip and slide down a rushing water slides, float down the lazy river, or wade in the kiddie pool with your little ones. Join us during holiday weekends and catch a round of the Ducky Derby or just kick back and relax in the hot tub area.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Whether you crave adventure or tranquility, our indoor water park is the perfect family getaway in in Utica, IL. When water park time is over, splash in to Wave Cave for concession style eats and treats including pizza by the slice, Nathan's famous all-beef hot dogs, nachos and adult beverages. The Wave Cafe is located inside Grand Bear Falls, our exciting indoor waterpark that is open year-round for family fun.
          </p>

          {/* FEATURES */}
          <h3 className="text-2xl font-semibold text-[#5a9aa8] mb-4">
            Park Features
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" /> 
              Wave Pool & Swimming Area</li>
              <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" />
               Lazy River & Whirlpool</li>
              <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" /> 
              Slide Tower (Body & Tube)</li>
            </ul>

            <ul className="space-y-2">
              <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" /> 
              Kids Splash Tower</li>
              <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" /> 
              Kiddie Pool & Family Slide</li>
              <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" />
               15 Person Jacuzzi</li>
            </ul>
          </div>

        </div>
</div>
        {/* RIGHT IMAGES */}
        <div className="flex flex-col gap-6">
          <img
            src="https://www.grandbearresort.com/images/waterpark/waterpark1.jpg"
            className="rounded-xl shadow-lg w-[80%]  object-cover"
          />

          <img
            src="https://www.grandbearresort.com/images/waterpark/waterpark2.jpg"
            className="rounded-xl shadow-lg w-[80%] object-cover"
          />
        </div>

      </div>

      {/* DAY PASSES */}
      {/* <div className="max-w-7xl mx-auto mt-14 text-center lg:text-left">

        <h3 className="text-3xl font-semibold text-[#5a9aa8] mb-4">
          Day Passes
        </h3>

        <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-gray-700 font-medium">
          <p>Under 3</p>
          <p>Kids (3–12)</p>
          <p>Adult</p>
        </div>

      </div> */}

    </section>
   <GallerySection />
    </>
  );
}
