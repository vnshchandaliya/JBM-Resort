import { BedDouble, Wifi, Tv, Coffee, Trees } from "lucide-react";
import { Link } from "react-router-dom";

export default function Villa() {
  const villas = [
    {
      img: "https://r1imghtlak.mmtcdn.com/4e3976dd-c7ec-44bc-8551-da3b80b514f7.png?output-quality=75&downsize=*:500&crop=990:500",
      title: "SKY VILLA",
      desc: "Experience nature in comfort. Our Sky Villas feature spacious living areas, private patios, kitchenettes, Wi-Fi, cable TV, and signature resort amenities.",
      guests: "6 Guests",
      max: "8 MAX",
      path: "/villas/skyvilla",
    },
   
  ];

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
        <p className="text-[#cfa95d]">Villa</p>
        </div>
      </section>
    <section className="bg-[#f5f1ea] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto space-y-12">

        {villas.map((villa, i) => (
          <div
            key={i}
            className="bg-white shadow-sm rounded-xl overflow-hidden grid lg:grid-cols-12"
          >
            {/* IMAGE */}
            <div className="lg:col-span-4">
              <img
                src={villa.img}
                className="w-full h-[260px] md:h-[320px] lg:h-full object-cover"
              />
            </div>

            {/* DETAILS */}
            <div className="lg:col-span-6 p-6 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3">
                {villa.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {villa.desc}
              </p>

              {/* AMENITIES */}
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#cfa95d] text-white p-3 rounded-md">
                  <BedDouble size={20} />
                </span>
                <span className="bg-[#cfa95d] text-white p-3 rounded-md">
                  <Wifi size={20} />
                </span>
                <span className="bg-[#cfa95d] text-white p-3 rounded-md">
                  <Tv size={20} />
                </span>
                <span className="bg-[#cfa95d] text-white p-3 rounded-md">
                  <Coffee size={20} />
                </span>
                <span className="bg-[#cfa95d] text-white p-3 rounded-md">
                  <Trees size={20} />
                </span>
              </div>
            </div>

            {/* GUEST BOX */}
            <div className="lg:col-span-2 bg-[#f1f1f1] flex flex-col items-center justify-center text-center p-6 md:p-8">
              <h4 className="text-2xl md:text-3xl font-semibold text-gray-700">
                {villa.guests}
              </h4>
              <p className="text-gray-500 mt-2">{villa.max}</p>

            <Link to={villa.path}>
              <button className="mt-6 bg-[#cfa95d] text-white px-6 py-3 rounded-md hover:bg-[#b89249] transition">      
                EXPLORE
              </button>
              </Link>
            </div>
          </div>
        ))}

      </div>
    </section>
    </>
  );
}
