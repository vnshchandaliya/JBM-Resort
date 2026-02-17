import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import LOGO from "../assets/logo/site-Logo.jpg";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const menuItems = [
    {
      name: "SPLASH & PLAY",
      children: [
        { label: "WATERPARK", path: "/waterpark" },
        { label: "THE CAVE ARCADE", path: "/waterpark-cavearcade" },
      ],
    },
    {
      name: "STAY",
      children: [
        { label: "ROOMS", path: "/rooms" },
        { label: "VILLAS", path: "/villas" },
      ],
    },
    {
      name: "DINE",
      children: [{ label: "The Fusion Lounge", path: "/fusion-lounge" }],
    },
    {
      name: "GROUP EVENTS",
    },
    {
      name: "GALLERY",
      path: "/gallery",
    },
  ];

  // Sticky Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* CONTACT STRIP */}
      <div className="hidden md:flex bg-teal-900 text-white text-sm px-6 lg:px-20 py-2 justify-between items-center">
        <p>Welcome to JBM Resort & Waterpark</p>
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-1">
            <Phone size={16} /> +91 12345 67890
          </span>
          <span className="flex items-center gap-1">
            <Mail size={16} /> info@jbmaresort.com
          </span>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div
        className={`w-full z-50 transition-all duration-500 ${
          isSticky
            ? "fixed top-0 bg-white shadow-xl py-2 px-6"
            : "relative bg-white py-4 px-6"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">

          {/* LOGO */}
         <Link to="/"> <img
            src={LOGO}
            alt="Logo"
            className={`transition-all duration-500 ${
              isSticky ? "w-24" : "w-28"
            }`}
          />
          </Link> 
          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 font-semibold">

            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
              >
                {item.path ? (
                  <Link to={item.path} className="hover:text-amber-600">
                    {item.name}
                  </Link>
                ) : (
                  <div className="flex items-center gap-1 cursor-pointer hover:text-amber-600">
                    {item.name}
                    {item.children && <ChevronDown size={16} />}
                  </div>
                )}

                {/* Desktop Dropdown */}
                {item.children && (
                  <div className="absolute left-0 top-full mt-3 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        to={child.path}
                        className="block px-6 py-3 hover:bg-amber-50 hover:text-amber-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button className="bg-yellow-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition">
              BOOK ONLINE
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden z-50">
            {isOpen ? (
              <X size={28} onClick={() => setIsOpen(false)} />
            ) : (
              <Menu size={28} onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4 mt-10">

          {menuItems.map((item, index) => (
            <div key={index}>
              <div
                className="flex justify-between items-center font-semibold cursor-pointer"
                onClick={() =>
                  setDropdown(dropdown === index ? null : index)
                }
              >
                {item.path ? (
                  <Link to={item.path} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                ) : (
                  <>
                    {item.name}
                    {item.children && <ChevronDown size={18} />}
                  </>
                )}
              </div>

              {/* Mobile Dropdown */}
              {item.children && dropdown === index && (
                <div className="pl-4 mt-3 space-y-3">
                  {item.children.map((child, i) => (
                    <Link
                      key={i}
                      to={child.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button className="w-full mt-6 bg-yellow-600 text-white py-2 rounded-lg">
            BOOK ONLINE
          </button>
        </div>
      </div>
    </>
  );
}
