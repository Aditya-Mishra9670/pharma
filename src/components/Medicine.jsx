import React from "react";
import medicineImage from "../store/Medicine.jpg";

const Medicine = () => {
  const medicines = [
    {
      title: "Paracetamol",
      formula: "C₈H₉NO₂",
      description: "Paracetamol is a common pain reliever and fever reducer.",
      usage: "Used to relieve mild to moderate pain and reduce fever.",
      sideEffects: "Liver damage in high doses, nausea, rash.",
      image: medicineImage
    },
    {
      title: "Ibuprofen",
      formula: "C₁₃H₁₈O₂",
      description: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID).",
      usage: "Effective for pain relief, inflammation, and fever.",
      sideEffects: "Stomach pain, heartburn, nausea, dizziness.",
      image: medicineImage
    },
    {
      title: "Amoxicillin",
      formula: "C₁₆H₁₉N₃O₅S",
      description: "Amoxicillin is a widely used antibiotic.",
      usage: "Treats bacterial infections like pneumonia, bronchitis, and infections of the ear, nose, throat, skin, or urinary tract.",
      sideEffects: "Diarrhea, nausea, rash, allergic reactions.",
      image: medicineImage
    },
    {
      title: "Metformin",
      formula: "C₄H₁₁N₅",
      description: "Metformin is an oral diabetes medicine that helps control blood sugar levels.",
      usage: "Used for type 2 diabetes management.",
      sideEffects: "Nausea, vomiting, stomach pain, diarrhea.",
      image: medicineImage
    },
    {
      title: "Aspirin",
      formula: "C₉H₈O₄",
      description: "Aspirin is a medication used to reduce pain, fever, or inflammation.",
      usage: "Used to prevent blood clots, strokes, and heart attacks.",
      sideEffects: "Stomach ulcers, bleeding, allergic reactions.",
      image: medicineImage
    },
    // 10 more dummy data entries
    {
      title: "Lisinopril",
      formula: "C₂₁H₃₁N₃O₅",
      description: "Lisinopril is used to treat high blood pressure and heart failure.",
      usage: "Lowers blood pressure and reduces the risk of stroke and heart attack.",
      sideEffects: "Dizziness, headache, fatigue.",
      image: medicineImage
    },
    {
      title: "Atorvastatin",
      formula: "C₃₃H₃₅FN₂O₅",
      description: "Atorvastatin is used to lower cholesterol and triglyceride levels.",
      usage: "Reduces the risk of heart disease and stroke.",
      sideEffects: "Muscle pain, nausea, headache.",
      image: medicineImage
    },
    {
      title: "Omeprazole",
      formula: "C₁₇H₁₉N₃O₃S",
      description: "Omeprazole is used to treat gastroesophageal reflux disease (GERD).",
      usage: "Reduces stomach acid production.",
      sideEffects: "Headache, stomach pain, nausea.",
      image: medicineImage
    },
    {
      title: "Levothyroxine",
      formula: "C₁₅H₁₁I₄NO₄",
      description: "Levothyroxine is used to treat hypothyroidism.",
      usage: "Replaces or provides more thyroid hormone.",
      sideEffects: "Increased appetite, weight loss, heat sensitivity.",
      image: medicineImage
    },
    {
      title: "Amlodipine",
      formula: "C₂₀H₂₅ClN₂O₅",
      description: "Amlodipine is used to treat high blood pressure and chest pain.",
      usage: "Relaxes blood vessels and improves blood flow.",
      sideEffects: "Swelling, dizziness, flushing.",
      image: medicineImage
    },
    {
      title: "Metoprolol",
      formula: "C₁₅H₂₅NO₃",
      description: "Metoprolol is used to treat high blood pressure and angina.",
      usage: "Lowers blood pressure and reduces chest pain.",
      sideEffects: "Dizziness, tiredness, depression.",
      image: medicineImage
    },
    {
      title: "Simvastatin",
      formula: "C₂₅H₃₈O₅",
      description: "Simvastatin is used to lower cholesterol and triglyceride levels.",
      usage: "Reduces the risk of heart disease and stroke.",
      sideEffects: "Muscle pain, nausea, headache.",
      image: medicineImage
    },
    {
      title: "Losartan",
      formula: "C₂₂H₂₃ClN₆O",
      description: "Losartan is used to treat high blood pressure and protect the kidneys.",
      usage: "Lowers blood pressure and reduces the risk of stroke.",
      sideEffects: "Dizziness, back pain, cold symptoms.",
      image: medicineImage
    },
    {
      title: "Gabapentin",
      formula: "C₉H₁₇NO₂",
      description: "Gabapentin is used to treat nerve pain and seizures.",
      usage: "Reduces nerve pain and prevents seizures.",
      sideEffects: "Drowsiness, dizziness, fatigue.",
      image: medicineImage
    },
    {
      title: "Hydrochlorothiazide",
      formula: "C₇H₈ClN₃O₄S₂",
      description: "Hydrochlorothiazide is used to treat high blood pressure and fluid retention.",
      usage: "Reduces blood pressure and swelling.",
      sideEffects: "Dizziness, headache, dehydration.",
      image: medicineImage
    },
    {
      title: "Furosemide",
      formula: "C₁₂H₁₁ClN₂O₅S",
      description: "Furosemide is used to treat fluid retention and swelling.",
      usage: "Reduces swelling and fluid retention.",
      sideEffects: "Increased urination, dizziness, dehydration.",
      image: medicineImage
    }
  ];

  return (
    <section id="medicine" className="bg-gray-100 min-h-screen py-12 px-6 text-center">
      <h2 className="text-5xl font-bold text-blue-900 drop-shadow-lg mb-6">Medicine Information</h2>
      <p className="text-lg text-gray-700 max-w-4xl mx-auto drop-shadow-md mb-10">
        Explore our extensive database of medicines, their compositions, uses, and possible side effects.
      </p>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {medicines.map((medicine, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all flex flex-col items-center">
            <img src={medicine.image} alt={medicine.title} className="w-60 h-60 object-cover rounded-md mb-4" />
            <div className="text-left">
              <h3 className="text-3xl font-semibold text-blue-800 mb-3">{medicine.title}</h3>
              <p className="text-lg text-gray-700 mb-2"><strong>Formula:</strong> {medicine.formula}</p>
              <p className="text-lg text-gray-700 mb-2"><strong>Usage:</strong> {medicine.usage}</p>
              <p className="text-lg text-gray-700 mb-2"><strong>Side Effects:</strong> {medicine.sideEffects}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Medicine;
