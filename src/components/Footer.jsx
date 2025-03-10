import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 text-center mt-12">
      <div className="container mx-auto px-4">
        <p className="text-lg font-semibold">&copy; 2024 Tiwari Pharma Industry. All Rights Reserved.</p>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="#home" className="hover:text-yellow-300">Home</a>
          <a href="#research" className="hover:text-yellow-300">Research</a>
          <a href="#medicine" className="hover:text-yellow-300">Medicine Formula</a>
          <a href="#about" className="hover:text-yellow-300">About Us</a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>
        </div>
        <p className="mt-4 text-sm">Designed and Developed by Aditya Mishra</p>
      </div>
    </footer>
  );
};

export default Footer;