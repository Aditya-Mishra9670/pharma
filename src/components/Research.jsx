import React from "react";
import cancerImage from "../store/cancer.jpg";
import neuroImage from "../store/cancer.jpg";
import antibioticsImage from "../store/cancer.jpg";
import diabetesImage from "../store/cancer.jpg";
import covidImage from "../store/cancer.jpg";

const Research = () => {
  const researchProjects = [
    {
      title: "Cancer Treatment Innovations",
      description: "Exploring advanced drug formulations to target cancer cells more effectively with minimal side effects.",
      formula: "C₂₇H₃₆N₄O₅ - Experimental Compound X",
      image: cancerImage
    },
    {
      title: "Neurodegenerative Disease Research",
      description: "Developing new treatments for Alzheimer's and Parkinson's diseases through regenerative medicine.",
      formula: "C₁₈H₂₄N₂O₆ - NeuroProtect A1",
      image: neuroImage
    },
    {
      title: "Next-Gen Antibiotics",
      description: "Creating antibiotic solutions to combat antibiotic-resistant bacterial infections.",
      formula: "C₁₆H₁₉N₃O₅ - Beta-Lactam Derivative",
      image: antibioticsImage
    },
    {
      title: "Diabetes Management",
      description: "Working on insulin alternatives and novel medication to help manage diabetes more efficiently.",
      formula: "C₂₅H₃₄O₆ - Insulin Analog X",
      image: diabetesImage
    },
    {
      title: "COVID-19 & Future Pandemics",
      description: "Studying virus mutations and preparing antiviral solutions for future global health challenges.",
      formula: "C₂₂H₃₀N₄O₈ - SARS-CoV-2 Inhibitor Y",
      image: covidImage
    },
  ];

  return (
    <section id="research" className="bg-gray-100 min-h-screen py-12 px-6 text-center">
      <h2 className="text-5xl font-bold text-blue-900 drop-shadow-lg mb-6">Ongoing Research</h2>
      <p className="text-lg text-gray-700 max-w-4xl mx-auto drop-shadow-md mb-10">
        At Tiwari Pharma Industry, we are dedicated to groundbreaking research that transforms the healthcare industry. Here are some of our key ongoing research projects:
      </p>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {researchProjects.map((project, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all flex flex-col md:flex-row items-center">
            <img src={project.image} alt={project.title} className="w-60 h-60 object-cover rounded-md mb-4 md:mb-0 md:mr-6" />
            <div className="text-left">
              <h3 className="text-3xl font-semibold text-blue-800 mb-3">{project.title}</h3>
              <p className="text-lg text-gray-700 mb-2">{project.description}</p>
              <p className="text-lg font-bold text-gray-900">Formula: {project.formula}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;