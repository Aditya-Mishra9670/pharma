import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../store/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Website Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide italic text-yellow-400">
            Tiwari Pharmaceuticals
          </h1>
        </div>
        
        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        
        {/* Navbar Links */}
        <ul className={`md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-900 md:bg-transparent text-center md:text-left transition-all duration-300 ease-in ${isOpen ? "block" : "hidden"}`}>
          {[
            { name: "Home", link: "/" },
            { name: "Research", link: "/research" },
            { name: "Medicine Formula", link: "/medicine" },
            { name: "About Us", link: "/about" },
            { name: "Contact Us", link: "/contact" }
          ].map((item, index) => (
            <li key={index} className="py-2 md:py-0 hover:text-yellow-300 cursor-pointer">
              <Link to={item.link} className="block px-4" onClick={() => setIsOpen(false)}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
