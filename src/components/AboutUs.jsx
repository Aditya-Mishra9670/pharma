import React from "react";
import ceoImage from "../store/ceo.png";
import ctoImage from "../store/cto.jpg";

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-100 min-h-screen py-12 px-6 text-center">
      <h2 className="text-5xl font-bold text-blue-900 drop-shadow-lg mb-6">About Us</h2>
      <p className="text-lg text-gray-700 max-w-4xl mx-auto drop-shadow-md">
        Tiwari Pharma Industry has been at the forefront of pharmaceutical research for over two decades. 
        We specialize in developing innovative medicine formulas that have revolutionized the healthcare industry.
      </p>
      
      <div className="mt-8 max-w-4xl mx-auto text-left">
        <h3 className="text-3xl font-semibold text-blue-800 mb-4">Our Achievements</h3>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Awarded "Best Pharma Research Company" in 2022</li>
          <li>Developed 50+ patented medicine formulas</li>
          <li>Collaborated with global healthcare leaders</li>
        </ul>
      </div>
      
      <div className="mt-8 max-w-4xl mx-auto text-left">
        <h3 className="text-3xl font-semibold text-blue-800 mb-4">Our Big Clients</h3>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>ABC Pharmaceuticals</li>
          <li>XYZ Healthcare Ltd.</li>
          <li>MedLife International</li>
        </ul>
      </div>
      
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-12">
        {/* CEO Profile */}
        <div className="text-center">
          <img src={ceoImage} alt="CEO" className="w-40 h-40 rounded-full mx-auto shadow-lg" />
          <a 
            href="https://www.linkedin.com/in/rishab-tiwari" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block mt-4 text-2xl font-semibold text-blue-800 hover:underline"
          >
            Rishab Tiwari (CEO)
          </a>
        </div>
        
        {/* CTO Profile */}
        <div className="text-center">
          <img src={ctoImage} alt="CTO" className="w-40 h-40 rounded-full mx-auto shadow-lg" />
          <a 
            href="https://www.linkedin.com/in/aditya-mishra" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block mt-4 text-2xl font-semibold text-blue-800 hover:underline"
          >
            Aditya Mishra (CTO)
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;