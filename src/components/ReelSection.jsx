export default function ReelSection() {
  const reels = [
    "/src/assets/instaReels/jmbReel.mp4",
    "/src/assets/instaReels/jmbReel2.mp4",
    "src/assets/instaReels/Video-0.mp4",
    "src/assets/instaReels/Video-272.mp4",
  ];

  return (
    <section className="bg-[#f5f1ea] py-12 md:py-20 px-4 md:px-8 lg:px-16">

      {/* Optional Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#5a9aa8]">
          Resort Moments
        </h2>
        <div className="w-16 h-[2px] bg-gray-400 mx-auto mt-4"></div>
      </div>

      {/* REELS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

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

           
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>
          </div>
        ))}

      </div>
    </section>
  );
}
