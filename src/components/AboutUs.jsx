import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

export default function AboutSection() {
  return (
    <>
    

      {/* ================= CONTENT SECTION ================= */}
      <section className="bg-[#f5f1ea] py-12 md:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#5a9aa8] mb-6">
              About Us
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base">
             Welcome to JBM Resort and Hotel, where comfort, hospitality, and memorable experiences come together in one beautiful destination. Designed to cater to families, travelers, and event guests alike, we offer a complete stay experience with warm service and thoughtfully designed spaces.
            </p>

            {/* FEATURES */}
            <h3 className="text-xl md:text-2xl text-gray-800 font-semibold mb-4">
              Our property features:
            </h3>

            <div className="grid sm:grid-cols-1 gap-6 text-gray-700 text-sm sm:text-base">
              <ul className="space-y-3">
                {[
                  "7 Standard Guest Rooms – Comfortable, cozy, and fully equipped for a relaxing stay",
                  "1 Private Villa (3 Spacious Rooms) – Ideal for families and groups seeking privacy",
                  "2 Fully Equipped Banquet Halls – Perfect for weddings, birthdays, corporate events, and social gatheringss",
                  
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-[#5a9aa8]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 mt-4 text-sm sm:text-base">
                    At JBM Resort and Hotel, we specialize in hosting unforgettable celebrations. Our experienced and dedicated team ensures every event is seamlessly organized and beautifully executed, creating memories that last a lifetime.
              </p>
             <h3 className="text-xl md:text-2xl text-gray-800 font-semibold mb-4">
             Guests can also enjoy a wide range of on-site amenities, including:
            </h3>
              <ul className="space-y-3">
                {[
                  "A fun-filled Water Park for all ages",
                  "An in-house Restaurant serving delicious cuisine",
                  "Spacious event venues for grand celebrations",
                  
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-[#5a9aa8]" />
                    {item}
                  </li>
                ))}
              </ul>
               <p className="text-gray-700 mt-4 text-sm sm:text-base">
                    Whether you’re planning a relaxing getaway, a special celebration, or a fun family day out, JBM Resort and Hotel offers the perfect combination of comfort, entertainment, and exceptional hospitality — all in one place.
            </p>
            </div>

            {/* NOTICE */}
            <p className="mt-10 text-xs sm:text-sm bg-[#efe6d5] p-4 rounded-md leading-relaxed">
              We look forward to welcoming you and making your experience truly special.
            </p>
           
          </div>

          {/* RIGHT SIDE */}
          <div>
            {/* LOGO */}
            <div className="mb-8 flex justify-center lg:justify-end">
              {/* <img
                src="https://www.grandbearresort.com/images/tca-logo-small.png"
                alt="Cave Arcade"
                className="w-48 sm:w-56 md:w-64 lg:w-72"
              /> */}
            </div>

            {/* IMAGE GRID */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "src/assets/fusion-lounge-Img/IMG_0751.jpg",
                "src/assets/jbmResort-Img/IMG_0710.JPG",
                "src/assets/jbmResort-Img/IMG_0729.JPG",
                "src/assets/fusion-lounge-Img/IMG_0758.jpg",

                "src/assets/fusion-lounge-Img/IMG_0750.jpg",
                "src/assets/fusion-lounge-Img/IMG_0754.jpg",
                "src/assets/jbmResort-Img/IMG_0723.JPG",
                "src/assets/jbmResort-Img/IMG_0732.JPG",
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
