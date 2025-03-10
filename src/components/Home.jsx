import React from "react";
import HomeImg from "../store/home.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center p-6"
      style={{ backgroundImage: `url(${HomeImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h2 className="text-5xl md:text-6xl font-bold text-blue-900 drop-shadow-lg">
        Welcome to Tiwari Pharmaceuticals Ltd.
      </h2>
      <p className="text-lg md:text-2xl text-gray-700 mt-4 max-w-3xl drop-shadow-md">
        Leading the way in pharmaceutical research and innovation. Our mission is to develop high-quality medicine formulas that improve lives.
      </p>
      <a
        href="#research"
        className="mt-6 px-8 py-3 text-xl font-semibold bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Explore Research
      </a>
    </section>
  );
};

export default Home;