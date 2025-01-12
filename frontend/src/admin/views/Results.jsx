import React, { useEffect, useState } from "react";
import Layout from "../Layout";

const Results = () => {
  const [votesData, setVotesData] = useState([]);
  const [resultsData, setResultsData] = useState([]);

  useEffect(() => {
    const fetchVotes = async () => {
      const votes = [
        {
          id: 1,
          name: "Subash Ray",
          email: "subashray@gmail.com",
          purpose: "de dana dan",
        },
        {
          id: 2,
          name: "Sumit Bhujel",
          email: "sumitbhujhel@gmail.com",
          purpose: "Local Election",
        },
        {
          id: 3,
          name: "Sami Magar",
          email: "samimagar@gmail.com",
          purpose: "Election",
        },
        {
          id: 4,
          name: "Dipak Magar",
          email: "dipakalemagar@gmail.com",
          purpose: "Election",
        },
        {
          id: 5,
          name: "Tilak Bk",
          email: "tilakbk@gmail.com",
          purpose: "Election",
        },
      ];
      setVotesData(votes);

      const purposeCounts = votes.reduce((acc, vote) => {
        acc[vote.purpose] = (acc[vote.purpose] || 0) + 1;
        return acc;
      }, {});

      const totalVotes = votes.length;
      const results = Object.entries(purposeCounts).map(
        ([purpose, votes], index) => ({
          id: index + 1,
          purpose,
          votes,
          percentage: ((votes / totalVotes) * 100).toFixed(1),
        })
      );

      setResultsData(results);
    };

    fetchVotes();
  }, []);

  return (
    <Layout>
      <div className="p-8 bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 rounded-lg shadow-lg transform transition-all hover:scale-105">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Election Results
        </h1>

        {/* Scrollable Content Wrapper */}
        <div className="max-h-[80vh] overflow-y-auto">
          {/* Total Votes Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-200 ease-in-out text-center">
              <h3 className="text-2xl font-semibold text-gray-700">
                Total Votes
              </h3>
              <p className="text-5xl font-bold text-purple-600 mt-4">
                {votesData.length}
              </p>
            </div>
          </div>

          {/* Voter Details Section */}
          <div className="bg-white p-8 rounded-xl shadow-xl mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Voter Details
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg shadow-lg">
                <thead className="bg-gradient-to-r from-blue-400 to-teal-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-medium">
                      ID
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-medium">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-medium">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-medium">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {votesData.map((vote) => (
                    <tr
                      key={vote.id}
                      className="hover:bg-gray-100 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-800 border-b">
                        {vote.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 border-b">
                        {vote.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 border-b">
                        {vote.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 border-b">
                        {vote.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Purpose Results Section */}
          <div className="bg-opacity-60 bg-white backdrop-blur-lg p-10 rounded-3xl shadow-lg bg-gray-800">
            <h2 className="text-3xl font-semibold text-black mb-6">
              Purpose Results
            </h2>
            <div className="space-y-8">
              {resultsData.map((result) => (
                <div
                  key={result.id}
                  className="flex justify-between items-center p-6 border border-gray-800 rounded-3xl bg-gradient-to-r from-teal-500 to-purple-500 shadow-2xl transform transition-all hover:scale-105"
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {result.purpose}
                    </h3>
                    <p className="text-sm text-gray-800">
                      {result.votes} votes
                    </p>
                  </div>

                  {/* Circular Progress Indicator */}
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform rotate-[-90deg]"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#e6e6e6"
                        strokeWidth="5"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="5"
                        strokeDasharray={`${result.percentage} 100`}
                      />
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#1c92d2" />
                          <stop offset="100%" stopColor="#f2fcfe" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute text-center text-2xl font-bold text-white">
                      {result.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Results;
