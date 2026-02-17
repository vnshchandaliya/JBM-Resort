export default function ResortFacilities() {
  const facilities = [
    {
      img: "https://img.freepik.com/premium-vector/summer-pool-illustration-cartoon-drawing-artwork-vector_893055-21643.jpg?w=1480",
      title: "Pools",
      // desc: "Own the beauty skin with our spa services",
    },
    {
      img: "https://img.freepik.com/premium-photo/food-drink-food-drinks-food-beverages-fast-food_1303357-4336.jpg?w=1480",
      title: "Food and drink",
      // desc: "Enjoy our exclusive dishes with your beloved family",
    },
    {
      img: "https://img.freepik.com/free-vector/man-with-map-smartphone-renting-car-driver-using-car-sharing-app-phone-searching-vehicle-vector-illustration-transport-transportation-urban-traffic-location-app-concept_74855-10109.jpg?t=st=1771345615~exp=1771349215~hmac=0856e135a4ec4055ae641093528cff8910b75d21ee1cc127d9938e39c7f00db8&w=1480",
      title: "Parking & transport",
      // desc: "Enjoy a wonderful day of wellness with our sauna",
    },
    {
      img: "https://img.freepik.com/free-vector/gradient-illustration-international-internet-day-celebration_23-2150756047.jpg?uid=R81140003&ga=GA1.1.827994182.1731442852&semt=ais_user_personalization&w=740&q=80",
      title: "Internet",
      // desc: "Relax and recharge in our wellness retreat",
    },
  ];

  return (
    <section className="bg-[#2bb3ad] py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-[#f6f3ef] rounded-2xl p-6 md:p-12 lg:p-16 text-center">

        {/* HEADING */}
        <div className="max-w-3xl mx-auto">
          <p className="text-xs md:text-sm tracking-widest text-gray-600 mb-2">
            RESORT & HOTEL
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#5a9aa8] font-semibold">
            Activities & Amenities
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base lg:text-lg">
            Activities and amenities are available year-round but vary by
            season. Be sure to check our calendar to plan your stay.
          </p>

          <div className="w-16 md:w-20 h-[2px] bg-gray-400 mx-auto mt-4"></div>
        </div>

        {/* FACILITIES GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {facilities.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-white rounded-[120px] shadow-lg border-b-8 border-[#2b7a78] hover:-translate-y-2 transition duration-500"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full  overflow-hidden border-4 border-white shadow-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="mt-6 font-semibold text-[#2b7a78] text-base md:text-lg">
                {item.title}
              </h4>

              <p className="text-gray-600 text-xs md:text-sm mt-2 px-2">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* BUTTON */}
        {/* <button className="mt-12 cursor-pointer bg-[#2b7a78] text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base hover:bg-[#246b69] transition">
          VIEW ALL FACILITIES
        </button> */}
      </div>
    </section>
  );
}
