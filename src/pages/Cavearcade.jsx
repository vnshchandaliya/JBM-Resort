import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

export default function CavearcadePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative h-[35vh] md:h-[45vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
        style={{
          backgroundImage:
            "url(https://www.grandbearresort.com/images/slider/slider-4.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            The Cave Arcade
          </h1>

          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm tracking-widest text-gray-300">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <span>Arcade</span>
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="bg-[#f5f1ea] py-12 md:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#5a9aa8] mb-6">
              Get your thrill on in the cave!
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base">
              Located on the lower level near the waterpark entrance, this
              bear-den sized arcade with over 50 games will thrill guests of
              all ages. Enjoy interactive fun and earn tickets while you play!
              Cash in your winnings for exciting treats and prizes.
            </p>

            {/* FEATURES */}
            <h3 className="text-xl md:text-2xl text-gray-800 font-semibold mb-4">
              Arcade Features
            </h3>

            <div className="grid sm:grid-cols-2 gap-6 text-gray-700 text-sm sm:text-base">
              <ul className="space-y-3">
                {[
                  "Carnival Games",
                  "Skiball & Hoops Games",
                  "Racing Games",
                  "Chance Games",
                  "Shooter Games",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-[#5a9aa8]" />
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {[
                  "Kids Themed Games",
                  "Claw Machine Games",
                  "Kiddie Rides",
                  "Photo Booth",
                  "Prize Counter",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-[#5a9aa8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* NOTICE */}
            <p className="mt-10 text-xs sm:text-sm bg-[#efe6d5] p-4 rounded-md leading-relaxed">
              <span className="font-semibold italic">NOTICE:</span> Arcade is
              operated by a third-party vendor and hours may vary but typically
              align with{" "}
              <span className="text-[#2b7a78] underline">
                JBM Resort Falls Waterpark.
              </span>
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div>
            {/* LOGO */}
            <div className="mb-8 flex justify-center lg:justify-end">
              <img
                src="https://www.grandbearresort.com/images/tca-logo-small.png"
                alt="Cave Arcade"
                className="w-48 sm:w-56 md:w-64 lg:w-72"
              />
            </div>

            {/* IMAGE GRID */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://www.grandbearresort.com/images/index/index-activity-3.jpg",
                "https://www.grandbearresort.com/images/gallery/gallery4.jpg",
                "https://www.grandbearresort.com/images/gallery/gallery5.jpg",
                "https://www.grandbearresort.com/images/waterpark/arcade3.jpg",
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Arcade"
                  className="rounded-xl object-cover w-full h-[140px] sm:h-[160px] md:h-[200px] hover:scale-105 transition duration-500"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
