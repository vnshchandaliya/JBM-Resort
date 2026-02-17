import { GiPoolDive, GiCoffeeCup } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { MdOutlineLocalMovies } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
// import DeluxeRoomImg from "../assets/Rooms_Img/Deluex-Img-1.jpg";
// import SunsetCoveSuiteImg from "../assets/Rooms_Img/SunsetCove-Img-1.jpeg";
// import ExecutiveSuiteImg from "../assets/Rooms_Img/Executive-Img-1.jpeg"; 

export default function ResortIntro() {
  const activities = [
    {
      img: "https://www.grandbearresort.com/images/index/index-activity-1.jpg",
      title: "Grand Bear Falls",
    },
    {
      img: "https://www.grandbearresort.com/images/index/index-activity-2.jpg",
      title: "Creekside Mini Golf",
    },
    {
      img: "https://www.grandbearresort.com/images/index/index-activity-3.jpg",
      title: "The Cave Arcade",
    },
  ];

  const experiences = [
    {
      img: "src/assets/Rooms_Img/Deluex-Img-1.jpg",
      title: "DELUXE ROOM",
    },
    {
    img: "src/assets/Rooms_Img/SunsetCove-Img-1.jpg",
      title: "SUNSET COVE SUITE",
    },
    {
     img: "src/assets/Rooms_Img/Executive-Img-1.jpeg",
      title: "EXECUTIVE",
    },
  ];

  return (
    <>
      {/* SECTION 1 */}
      <section className="bg-[#f5f1ea] py-12 md:py-20 px-4 md:px-8 lg:px-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm tracking-widest text-gray-600 mb-2">
            STARVED ROCK'S ONE AND ONLY
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#5a9aa8] font-semibold">
            Indoor Waterpark Resort
          </h2>

          <p className="text-gray-600 mt-4 text-base md:text-lg">
            Hike, Play & Splash the Day Away
          </p>

          <div className="w-16 md:w-20 h-[2px] bg-gray-400 mx-auto mt-4"></div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* LEFT CARD */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-[#f2c67b] transition duration-500 group-hover:rotate-3"></div>
            <div className="absolute inset-0 rounded-3xl bg-[#4e694a] transition duration-500 group-hover:-rotate-3"></div>

            <div className="relative p-6 md:p-8 rounded-3xl bg-[#2bb3ad] text-white shadow-xl transition duration-500 group-hover:-translate-y-2">
              <h3 className="text-lg md:text-xl font-bold mb-3">
                Escape the ordinary on your next family getaway!
              </h3>

              <p className="text-sm md:text-base leading-relaxed">
                Nestled just off I-80 in the beautiful Illinois Valley, we offer
                an oasis of relaxation and adventure where waterpark fun meets
                the great outdoors.
              </p>
            </div>
          </div>

          {/* ACTIVITY CARDS */}
          {activities.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="bg-[#2bb3ad] text-white py-3 px-4 rounded-b-2xl text-sm md:text-base text-center">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="bg-[#f5f1ea] py-12 md:py-20 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {experiences.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="bg-[#2bb3ad] text-white py-3 px-4 rounded-b-2xl text-sm md:text-base text-center">
                {item.title}
              </div>
            </div>
          ))}

          {/* RIGHT CARD */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-[#f2c67b] transition duration-500 group-hover:rotate-3"></div>
            <div className="absolute inset-0 rounded-3xl bg-[#4e694a] transition duration-500 group-hover:-rotate-3"></div>

            <div className="relative p-6 md:p-8 rounded-3xl bg-[#2bb3ad] text-white shadow-xl transition duration-500 group-hover:-translate-y-2">
              <h3 className="text-lg md:text-xl font-bold mb-3">
                Accommodations for groups of all sizes
              </h3>

              <p className="text-sm md:text-base leading-relaxed">
                We offer roomy and comfortable accommodations from lodge suites
                to private villas and cabins.

                Whether you're a party of two or eighteen, our spacious guest
                units will accommodate gatherings of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ICON SECTION */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-4xl text-[#5a9aa8] font-semibold">
          Included With Every Stay
        </h2>

        <div className="w-16 md:w-20 h-[2px] bg-gray-400 mx-auto mt-4 mb-10"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

          {[ 
            { icon: <GiPoolDive />, text: "Waterpark Wristbands & Pool Towels" },
            { icon: <GrYoga />, text: "Fitness Center & Seasonal Yoga" },
            { icon: <MdOutlineLocalMovies />, text: "Live Entertainment & Movies" },
            { icon: <GiCoffeeCup />, text: "Morning Coffee & Essentials" },
            { icon: <FaWifi />, text: "Wi-Fi Throughout Lodge & Rooms" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="text-3xl md:text-4xl text-[#0e5c73]">
                {item.icon}
              </div>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}
