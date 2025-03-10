import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-6">
      <h2 className="text-5xl font-bold text-blue-900 drop-shadow-lg mb-6">Contact Us</h2>
      <p className="text-lg text-gray-700 max-w-2xl text-center drop-shadow-md mb-10">
        Have questions or want to collaborate? Reach out to us using the form below.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700">Name</label>
            <input type="text" placeholder="Enter your name" className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700">Message</label>
            <textarea placeholder="Write your message here..." rows="5" className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Send Message
          </button>
        </form>
      </div>
      <div className="mt-10 flex space-x-6">
        <a href="https://linkedin.com" className="text-blue-700 text-xl font-semibold hover:underline">LinkedIn</a>
        <a href="https://twitter.com" className="text-blue-700 text-xl font-semibold hover:underline">Twitter</a>
        <a href="mailto:contact@tiwaripharma.com" className="text-blue-700 text-xl font-semibold hover:underline">Email</a>
      </div>
    </section>
  );
};

export default Contact;
