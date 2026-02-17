import { useState } from "react";

export default function FusionLounge() {
  const reels = [
    "src/assets/instaReels/Video-411.mp4",
    "src/assets/instaReels/Video-932.mp4",
    "src/assets/instaReels/Video-0.mp4",
    "src/assets/instaReels/Video-272.mp4",
    
    
  ];
  const images = [
    "https://www.grandbearresort.com/images/gallery/gallery4.jpg",
    "https://www.grandbearresort.com/images/gallery/gallery5.jpg",
    "https://www.grandbearresort.com/images/gallery/gallery6.jpg",
    "https://www.grandbearresort.com/images/gallery/gallery3.jpg",
    "https://www.grandbearresort.com/images/gallery/gallery2.jpg",
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#f5f1ea] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-8">

          {/* MAIN IMAGE */}
          <img
            src={images[active]}
            className="w-full h-[280px] md:h-[420px] object-cover rounded-xl"
          />

          {/* THUMBNAILS */}
          <div className="flex gap-4 mt-4 overflow-x-auto">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActive(i)}
                className={`w-24 h-20 object-cover rounded-md cursor-pointer
                ${active === i ? "border-4 border-[#cfa95d]" : ""}`}
              />
            ))}
          </div>

          {/* CONTENT */}
          <div className="mt-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4">
              Fusion Lounge Experience
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Step into Fusion Lounge — a perfect blend of ambiance, flavor, and entertainment.
              Enjoy handcrafted cocktails, live music nights, seasonal bites, and unforgettable evenings.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Featuring premium beverages, lounge seating, and curated experiences
              designed for relaxation and celebration.
            </p>

            <a
              href="#"
              className="text-[#2b7a78] underline mt-4 inline-block"
            >
              View Menu / Order Online
            </a>
          </div>

          {/* BOTTOM GALLERY */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
            {reels.map((video, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <div className="aspect-[9/16] w-full overflow-hidden">
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Optional subtle overlay hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>
          </div>
        ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-4 space-y-8">

          {/* LOGO BOX */}
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-2xl font-semibold text-gray-700">
              Fusion Lounge
            </h3>
            <p className="text-gray-500 mt-2">Fine Dining & Bar</p>
          </div>

          {/* HOURS */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="text-lg font-semibold mb-4">Hours</h4>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>Mon – Thu: 4pm – 10pm</li>
              <li>Fri: 4pm – 12am</li>
              <li>Sat: 12pm – 12am</li>
              <li>Sun: 12pm – 8pm</li>
            </ul>
          </div>

          {/* CTA */}
          <button className="w-full bg-[#cfa95d] text-white py-3 rounded-md hover:bg-[#b89249] transition">
            RESERVE TABLE
          </button>

        </div>

      </div>
    </section>
  );
}
