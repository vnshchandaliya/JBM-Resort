import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import User from "../assets/user.png";


import "swiper/css";

export default function LuxuryTestimonials() {

  const data = [
    {
      title: " Loved the overall experience",
      text: " “A perfect gateway! The resort is peaceful and well-maintained, and the restaurant serves amazing food with great ambience. Loved the overall experience.”",
      name: "Varinda Khelarie",
      img: User
    },
    {
      title: "Excellent stay ",
      text: "“Excellent stay and dining experience! Warm staff, tasty food, and a very relaxing environment. A must-visit resort”",
      name: "klavya Jakhar",
      img: User
    },
    {
      title: "Holiday ❘ Family",
      text: "The food is very good and the nature of the staff is very nice.",
      name: "Goyal Puneet (pintu)",
      img: User
    },
     {
      title: "Nice Palace",
      text: "Nice palace...but it is very far from main abohar city around 11 kms approx. Rest is fine",
      name: "Anjali Lamsar",
      img: User
    },
     {
      title: "Good Ambiance",
      text: "Very good place and delicious food as well as good ambiance for family and friends",
      name: "Vikrant Kheleri",
      img: User
    },
     {
      title: "Business ❘ Friends",
      text: "Nice and comfertable stay ,Staff politeRooms very comfertable Good for relax and holiday",
      name: "Jatin Mehta",
      img: User
    },
     {
      title: "Amazing experience",
      text: "Special thanks to Mr. Bakhshish Ji for the amazing hospitality Great food Great stay",
      name: "vaibhav arora",
      img: User
    },
  ];

  return (
    <section
      className="relative py-32 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://skylinehotelniagarafalls.com/wp-content/uploads/2024/05/mains-home-plan-visit.jpg')",
          backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
      }}
    >

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500 }}
          centeredSlides={true}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="relative bg-white/100 backdrop-blur-lg rounded-xl px-8 py-10 text-center shadow-2xl transition-all duration-500 hover:scale-105">

                {/* title */}
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>

                {/* stars */}
                <div className="text-yellow-500 mb-4 text-lg">
                  ★★★★★
                </div>

                {/* text */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.text}
                </p>

                {/* triangle bottom */}
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-5 h-5 bg-white/100 rotate-45"></div>
              </div>

              {/* avatar */}
              <div className="flex flex-col items-center mt-10">
                <img
                  src={item.img}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
                <p className="text-white font-semibold mt-2">
                  {item.name}
                </p>
                <span className="text-white/80 text-sm">
                  Google reviews (5/5)
                </span>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
