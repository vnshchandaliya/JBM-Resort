import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { FaSearchPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

export default function SkyVilla() {

  const images = [
          "https://r1imghtlak.mmtcdn.com/4e3976dd-c7ec-44bc-8551-da3b80b514f7.png?output-quality=75&downsize=*:500&crop=990:500",
          "https://r1imghtlak.mmtcdn.com/b50563ca-8db6-4f29-b896-2ab470f30057.png?output-quality=75&downsize=*:500&crop=990:500",
          "https://r1imghtlak.mmtcdn.com/1b0f6db2-2d82-4893-a40f-5f5406c0a784.jpeg?output-quality=75&downsize=*:500&crop=990:500",
          "https://r1imghtlak.mmtcdn.com/82fbc957-9337-497c-b5eb-445aee897660.jpeg?output-quality=75&downsize=*:500&crop=990:500",
          "https://r1imghtlak.mmtcdn.com/1f660696-af2f-4bec-869d-1f54ad9f1293.jpeg?output-quality=75&downsize=*:500&crop=990:500",
          "https://r1imghtlak.mmtcdn.com/aaeeaa9d-63fe-423c-a9db-9c79833a3336.jpeg?output-quality=75&downsize=*:500&crop=990:500",
          
             ];

  const [active, setActive] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

  const next = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // stop background scroll when zoom open
  useEffect(() => {
    document.body.style.overflow = zoomOpen ? "hidden" : "auto";
  }, [zoomOpen]);

  return (
    <>
    <section
        className="relative h-[30vh] bg-cover bg-center flex items-center  text-white text-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/walnut-wood-textured-background-design_53876-143040.jpg?t=st=1770744109~exp=1770747709~hmac=fa84528907306f85c265f1e3572b6fc474715180d992bb527192a93e7cf50ec7&w=1480)",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-3xl font-extrabold mb-10 mx-20">
         Rooms
         
        </h1>
        <div className=" flex gap-5 relative z-10 text-sm tracking-widest text-gray-300 right-50 mt-10">
       <Link to="/"><p className="">Home</p></Link>
        <p>/</p>
       <Link to="/villas"><p >Villa</p></Link>
        <p>/</p>
        <p className="text-[#cfa95d]">Sky Villa</p>
        </div>
      </section>

     <section className="bg-[#f5f1ea] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">

        {/* LEFT IMAGE AREA */}
        <div className="lg:col-span-8">

          {/* MAIN IMAGE */}
          <div className="relative overflow-hidden rounded-xl cursor-zoom-in">
            <img
              src={images[active]}
              onClick={() => setZoomOpen(true)}
              className="w-full h-[28]0px] md:h-[420px] object-cover transition-all duration-500  "
            />
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-4 mt-5 overflow-x-auto">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setActive(index)}
                className={`w-24 h-20 object-cover rounded-md cursor-pointer transition
                  ${active === index ? "border-4 border-[#cfa95d]" : ""}
                `}
              />
            ))}
          </div>

          {/* ROOM TITLE */}
          <h2 className="text-3xl md:text-4xl mt-10 font-semibold text-gray-700">
           SKY VILLA
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Perfect sleeping for four (maximum six), our Family Suites feature two queen beds
            and a queen sofa sleeper, refrigerator, microwave, Wi-Fi, cable TV, and all our
            signature amenities.
          </p>
             <div  className="mt-6">
              <h3 className="text-[25px] font-semibold mb-4">Before You Book</h3>
              <p>Our waterpark and outlets are currently operating on our off-season schedule. Please visit the JBM Resort  Waterpark and outlet pages for up to date info.</p>
              <br/>
              <p>All reservations booked at GrandBearResort.com include waterpark wristbands when the waterpark is operating. The base rate for each unit includes wristbands for the standard unit occupancy. Addditional wristbands may be purchased for $25 per night, not to exclude maximum occupancy.</p>
              <br/>
              <p>If you have any questions, please contact our Guest Services department:</p>
              <div className="mt-4">
                <ul>
                  <li className="flex items-center gap-2"><FaPhone className="text-[#5a9aa8]" /> 
                  Phone: +91 12345 67890</li>
                  <li className="flex items-center gap-2"><IoMailSharp  className="text-[#5a9aa8]" /> 
                  Email: <a href="mailto:guestservices@grandbearresort.com" className="text-[#5a9aa8] hover:underline">info@jbmaresort.com</a>
               
               </li> </ul>
              </div>

          </div>

        </div>
        

        {/* RIGHT SIDE INFO */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Room Amenities</h3>

             <h5 className="text-[#5a9aa8] font-medium mb-5">Popular with Guests</h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" /> 
              Iron/Ironing Board</li>
              <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" />
               Air Conditioning</li>
              <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" /> 
              Bathroom</li>
               <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" /> 
              Mineral Water</li>
             
            </ul>

             
             <h5 className="text-[#5a9aa8] font-medium mt-6 mb-5">Basic Facilities</h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" /> 
             Kettle</li>
            </ul>
             <h5 className="text-[#5a9aa8] font-medium mt-6 mb-5">Basic Facilities</h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" /> 
             Kettle</li>
            </ul>
            <h5 className="text-[#5a9aa8] font-medium mt-6 mb-5">Safety and Security</h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" /> 
            Electronic Safe</li>
            </ul>
            <h5 className="text-[#5a9aa8] font-medium mt-6 mb-5">Media and Entertainment</h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" /> 
            TV</li>
            </ul>
          
             <h5 className="text-[#5a9aa8] font-medium mt-6 mb-5">Bathroom</h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 text-gray-700">
            
            <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" /> 
            Hot & Cold Water</li>
            <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" /> 
            Toiletries</li>
            <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" /> 
            Towels</li>
            </ul>
             <h5 className="text-[#5a9aa8] font-medium mt-6 mb-5">Other Facilities</h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center gap-2"><FaCheck className="text-[#5a9aa8]" /> 
            Balcony</li>
            </ul>
            
          </div>
       
          <button className="w-full bg-[#cfa95d] text-white py-3 rounded-md hover:bg-[#b89249] transition">
            VIEW RATES
          </button>
        </div>

      </div>

      {/* FULLSCREEN ZOOM SLIDER */}
      {zoomOpen && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999]">

          {/* CLOSE */}
          <button
            onClick={() => setZoomOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={36} />
          </button>

          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute left-6 text-white bg-black/40 p-3 rounded-full"
          >
            <ChevronLeft size={34} />
          </button>

          {/* IMAGE */}
          <img
            src={images[active]}
            className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl"
          />

          {/* RIGHT */}
          <button
            onClick={next}
            className="absolute right-6 text-white bg-black/40 p-3 rounded-full"
          >
            <ChevronRight size={34} />
          </button>

        </div>
      )}
    </section>
    </>
   
  );
}
