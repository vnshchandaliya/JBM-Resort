import { Send } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="relative bg-[#f5f1ea] py-24 px-4 text-center overflow-hidden">

      {/* CONTENT */}
      <div className="relative max-w-3xl mx-auto z-10">

        <h2 className="font-heading text-3xl md:text-5xl text-gray-700">
          Stay Connected
        </h2>

        <p className="text-gray-600 text-sm md:text-lg mt-4 mb-10">
          Connect with us to begin your journey of comfort and relaxation. From booking details to special requests, our dedicated team is just a message away to assist you at every step
        </p>

        {/* CTA BUTTON */}
        <div className="flex justify-center">
          <button className="bg-[#2b7a78] cursor-pointer text-white px-10 py-3 rounded-full hover:bg-[#246b69] transition shadow-lg">
            VIEW ALL FACILITIES
          </button>
        </div>

      </div>

      {/* BOTTOM TREES IMAGE */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <img
          src="https://img.freepik.com/premium-photo/abstract-illustration-teal-tree-beige-background_1135715-24604.jpg?w=1480"
          alt="trees"
          className="w-full object-cover opacity-20"
        />
      </div>

    </section>
  );
}
