import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { FaSearchPlus } from "react-icons/fa";

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    "https://www.grandbearresort.com/images/gallery/gallery1.jpg",
    "https://www.grandbearresort.com/images/gallery/gallery2.jpg",
    "https://www.grandbearresort.com/images/gallery/gallery3.jpg",
  ];

  // prevent background scroll when lightbox open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedIndex]);

  // next image
  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  // previous image
  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative  py-16 px-4 md:px-10 overflow-hidden">

      {/* GALLERY GRID */}
    <div className="relative z-30 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

  {images.map((img, index) => (
    <div
      key={index}
      className="relative overflow-hidden rounded-xl cursor-pointer group"
      onClick={() => setSelectedIndex(index)}
    >
      
      {/* IMAGE */}
      <img
        src={img}
        className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-50"
      />

      {/* OVERLAY ICON */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-200 transition duration-300">
        <div className=" p-4 rounded-full shadow-lg">
          <FaSearchPlus className="text-white" size={26} />
        </div>
      </div>

    </div>
  ))}

</div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[99999] p-4">

          {/* CLOSE */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-5 right-5 text-white hover:scale-110 transition"
          >
            <X size={36} />
          </button>

          {/* LEFT ARROW */}
          <button
            onClick={prevImage}
            className="absolute left-3 md:left-10 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition"
          >
            <ChevronLeft size={34} />
          </button>

          {/* IMAGE */}
          <img
            src={images[selectedIndex]}
            className="max-h-[85vh] max-w-full md:max-w-[80vw] rounded-lg shadow-2xl"
          />

          {/* RIGHT ARROW */}
          <button
            onClick={nextImage}
            className="absolute right-3 md:right-10 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition"
          >
            <ChevronRight size={34} />
          </button>

        </div>
      )}

      {/* BOTTOM TREES */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none -z-10">
        <img
          src="https://img.freepik.com/premium-photo/abstract-illustration-teal-tree-beige-background_1135715-24604.jpg?w=1480"
          alt="trees"
          className="w-full object-cover opacity-40"
        />
      </div>

    </section>
  );
}
