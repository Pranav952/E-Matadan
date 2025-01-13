import React from "react";

function Support() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">How can we help you?</h2>

      {/* Support Options Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <button className="w-40 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Live Chat
        </button>
        <button className="w-40 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          FAQ
        </button>
        <button className="w-40 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit a Ticket
        </button>
        <button className="w-40 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Contact Us
        </button>
        <button className="w-40 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Video Tutorials
        </button>
      </div>

      {/* Help Articles Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Help Articles</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-blue-600 hover:underline">How to Vote</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Creating and Managing Your Account</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Security Tips</a></li>
        </ul>
      </div>

      {/* Feedback Section */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">We'd love to hear from you</h3>
        <textarea
          className="w-full h-32 p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Leave your feedback here..."
        ></textarea>
        <button className="w-full mt-4 px-6 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
          Submit Feedback
        </button>
      </div>
    </div>
  );
}

export default Support;
