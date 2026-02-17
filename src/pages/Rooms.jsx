import { Link } from "react-router-dom";
import { BedDouble, Wifi, Tv, Coffee, BadgeCheck } from "lucide-react";

export default function RoomPage() {
  const rooms = [
    {
      img: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202511251229434485-218a7eb5-6475-4902-897d-18780709bf91.jpg?&output-quality=75&downsize=377:200&crop=377:200",
      title: "DELUXE ROOM",
      desc: "Our DELUXE ROOM feature One King Bed  and   140 sq.ft (13 sq.mt) , Air Conditioning, Mineral Water, Wi-Fi, cable TV, and all our signature amenities.",
      guests: "2 Guests",
      max: "3 MAX",
      path: "/rooms/deluxe",
    },
    {
      img: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202511251229434485-17e1d7c2-f9c9-47cd-bfd1-75e232ac3672.jpg?&output-quality=75&downsize=377:200&crop=377:200",
      title: "SUNSET COVE SUITE",
      desc: "This ultra-spacious Room features One King Bed or One Single Bed 325 sq.ft (30 sq.mt), refrigerator, microwave, Wi-Fi, cable TV, all of our signature amenities and a Garden View overlooking our resort.",
      guests: "3 Guests",
      max: "6 MAX",
      path: "/rooms/sunsetcove",
    },
    {
      img: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202511251229434485-afe433aa-77e3-482e-a490-799755a826bd.jpg?output-quality=75&downsize=*:500&crop=990:500",
      title: "EXECUTIVE",
      desc: "Featuring a king bed and a 200 sq.ft (19 sq.mt), as well as a refrigerator, microwave, cable TV, Wi-Fi, and all our signature amenities..",
      guests: "2 Guests",
      max: "3 MAX",
      path: "/rooms/executive",
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
        <p className="text-[#cfa95d]">Rooms</p>
        </div>
      </section>
    <section className="bg-[#f5f1ea] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto space-y-12">

        {rooms.map((room, i) => (
          <div
            key={i}
            className="bg-white shadow-sm rounded-xl overflow-hidden grid lg:grid-cols-12"
          >
            {/* ROOM IMAGE */}
            <div className="lg:col-span-4">
              <img
                src={room.img}
                className="w-full h-[260px] md:h-[320px] lg:h-full object-cover"
              />
            </div>

            {/* ROOM DETAILS */}
            <div className="lg:col-span-6 p-6 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3">
                {room.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {room.desc}
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
                  <BadgeCheck size={20} />
                </span>
              </div>
            </div>

            {/* GUEST INFO */}
            <div className="lg:col-span-2 bg-[#f1f1f1] flex flex-col items-center justify-center text-center p-6 md:p-8">
              <h4 className="text-2xl md:text-3xl font-semibold text-gray-700">
                {room.guests}
              </h4>
              <p className="text-gray-500 mt-2">{room.max}</p>

             <Link to={room.path}>
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
