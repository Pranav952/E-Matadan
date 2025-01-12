import React, { useState, useEffect } from "react";
import Layout from "../Layout";

function Candidate() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchedCandidates = [
      {
        id: 1,
        name: "Subash Ray",
        imageUrl: "https://via.placeholder.com/300x200?text=Subash+Ray",
        experience: "3 years",
        description:
          "Subash is an innovative designer with an eye for modern UI/UX trends and user-centered design.",
      },
      {
        id: 2,
        name: "Ramesh Magar",
        imageUrl: "https://via.placeholder.com/300x200?text=Ramesh+Magar",
        experience: "3 years",
        description:
          "Ramesh is an innovative designer with an eye for modern UI/UX trends and user-centered design.",
      },
      {
        id: 3,
        name: "Sumit Bhujel",
        imageUrl: "https://via.placeholder.com/300x200?text=Sumit+Bhujel",
        experience: "4 years",
        description:
          "Sumit specializes in backend development and building scalable systems for businesses.",
      },
    ];

    setCandidates(fetchedCandidates);
  }, []);
  return (
    <Layout>
      <div className="p-8 bg-gradient-to-br from-purple-50 to-blue-100 min-h-screen">
        <div className="max-w-7xl mx-auto h-screen overflow-y-auto">
          <h1 className="text-6xl font-extrabold text-blue-900 mb-8 text-center shadow-xl px-8 py-4 bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg">
            Meet Our Candidates
          </h1>
          <p className="text-gray-600 text-lg text-center mb-16 px-4 sm:px-16 font-medium">
            Explore the diverse talents and experiences of our candidates. Get
            inspired by their skills and journeys.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-teal-50 to-teal-200"
              >
                <div className="relative">
                  <img
                    src={candidate.imageUrl}
                    alt={candidate.name}
                    className="w-full h-56 object-cover rounded-t-xl transform transition duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 bg-blue-500 text-white py-1 px-3 rounded-full text-lg font-semibold shadow-md">
                    {candidate.name}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 font-light">
                    {candidate.description}
                  </p>
                  <div className="flex justify-between items-center mt-5">
                    <button className="px-6 py-3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                      View Profile
                    </button>
                    <span className="text-sm text-gray-500">
                      Experience: {candidate.experience}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Candidate;
