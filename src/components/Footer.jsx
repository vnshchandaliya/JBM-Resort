import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import LOGO from "../assets/logo/site-Logo.jpg";

export default function ResortFooter() {
  return (
    <footer
      className="relative text-white pt-14 md:pt-20 pb-8 px-4 sm:px-6 lg:px-10"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/walnut-wood-textured-background-design_53876-143040.jpg?w=1480')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LOGO + TEXT */}
        <div className="text-center sm:text-left">
          <img
            src={LOGO}
            alt="JBM Resort Logo"
            className="w-32 sm:w-36 md:w-40 mb-4 mx-auto sm:mx-0"
          />

          <p className="text-sm leading-relaxed text-white/80">
            Discover a magical family getaway tucked just beyond the glow of
            Chicagoland at Starved Rock's own JBM Resort & WaterPark!
          </p>
        </div>

        {/* MORE INFO */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-4">More Info</h4>

          <ul className="space-y-2 text-white/80 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer transition">Upcoming Events</li>
            {/* <li className="hover:text-yellow-400 cursor-pointer transition">Locals</li> */}
            {/* <li className="hover:text-yellow-400 cursor-pointer transition">Gift Cards</li> */}
            {/* <li className="hover:text-yellow-400 cursor-pointer transition">Guest Portal</li> */}
          </ul>
        </div>

        {/* POLICIES */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-4">Policies</h4>

          <ul className="space-y-2 text-white/80 text-sm">
            {/* <li className="hover:text-yellow-400 cursor-pointer transition">ADA Conformance</li> */}
            <li className="hover:text-yellow-400 cursor-pointer transition">Privacy Policy</li>
            {/* <li className="hover:text-yellow-400 cursor-pointer transition">Blackout Calendar</li> */}
            {/* <li className="hover:text-yellow-400 cursor-pointer transition">Employment Opportunities</li> */}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-4">Get In Contact</h4>

          <div className="space-y-3 text-sm text-white/80">
            <p className="flex justify-center sm:justify-start items-center gap-2">
              <MapPin size={16} /> Malout - Abohar Rd, Gobindgarh, Abohar, Punjab 152116
            </p>

            <p className="flex justify-center sm:justify-start items-center gap-2">
              <Phone size={16} /> +91 82838 74562 
            </p>

            <p className="flex justify-center sm:justify-start items-center gap-2">
              <Mail size={16} /> corp.communications@jbmgroup.com
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="relative max-w-7xl mx-auto mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-white/70 gap-4">

        <p className="text-center md:text-left">
          © 2025 All Rights Reserved | Powered by{" "}
          <a
            href="https://www.digifyamerica.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            Digify America
          </a>
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-5 text-base sm:text-lg">
          {/* <FaFacebookF className="cursor-pointer hover:text-yellow-400 hover:scale-110 transition duration-300" /> */}
          {/* <FaTwitter className="cursor-pointer hover:text-yellow-400 hover:scale-110 transition duration-300" /> */}
          <FaInstagram className="cursor-pointer hover:text-yellow-400 hover:scale-110 transition duration-300" />
        </div>
      </div>
    </footer>
  );
}
