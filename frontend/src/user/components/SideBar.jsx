import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"

import { FaHome, FaUser, FaChartBar, FaCog, FaUserCircle, FaBars, FaTimes, FaSignOutAlt, FaVoteYea, FaBell, FaComment, FaQuestionCircle } from 'react-icons/fa';

function SideBar() {
  const { handleLogout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  return (
    <div className="relative">
      <div className="bg-blue-900 text-white w-full fixed top-0 left-0 z-20 flex justify-between items-center p-4 shadow-md">
        <button onClick={toggleMobileMenu} className="md:hidden text-white">
          <FaBars className="text-2xl" />
        </button>
        <span className="text-2xl font-semibold text-center text-indigo-200 ml-5">ई-matadan</span>
        
        {/* Profile and Notification Icons */}
        <div className="flex items-center space-x-6 mr-10">
          <Link to="/user/notifications" className="text-white">
            <FaBell className="text-xl" />
          </Link>
          <div className="relative">
            <button onClick={toggleProfileMenu} className="flex items-center text-white">
              <FaUserCircle className="text-2xl" />
            </button>
            {/* Smooth Transition for Profile Menu */}
            {isProfileMenuOpen && (
              <ul className="absolute right-0 mt-3 space-y-2 bg-blue-800 text-white p-2 rounded-lg shadow-md w-48 transition-transform transform duration-300 ease-in-out z-30">
                <li>
                  <Link to="/user/login" className="flex items-center px-5 py-2 rounded-lg hover:bg-blue-600 transition-all">
                    <FaVoteYea className="text-xl" />
                    <span className="ml-3">Login as Candidate</span>
                  </Link>
                </li>
                <li>
                  <Link to="/user/candidate-register" className="flex items-center px-5 py-2 rounded-lg hover:bg-blue-600 transition-all">
                    <FaVoteYea className="text-xl" />
                    <span className="ml-3">Register as Candidate</span>
                  </Link>
                </li>
                {/* New item added to Profile Menu */}
                <li>
                  <Link to="/user/voter-register" className="flex items-center px-5 py-2 rounded-lg hover:bg-blue-600 transition-all">
                    <FaUser className="text-xl" />
                    <span className="ml-3">Register As Voter</span>
                  </Link>
                </li>
                <li>
                <button
                  onClick={handleLogout} // Call handleLogout on button click
                  className="flex items-center px-5 py-2 rounded-lg hover:bg-red-600 transition-all w-full"
                     >
                   <FaSignOutAlt className="text-xl" />
                     <span className="ml-3">Logout</span>
                </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar Section */}
      <div className="bg-blue-900 text-white w-64 space-y-6 px-2 py-7 md:block hidden fixed top-0 left-0 h-full z-10 pt-16">
        <ul className="space-y-4">
          <li>
            <Link to="/user" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaHome className="text-xl mt-3" />
              <span className="ml-3 mt-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/user/vote" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaVoteYea className="text-xl" />
              <span className="ml-3">Vote</span>
            </Link>
          </li>
          <li>
            <Link to="/user/results" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaChartBar className="text-xl" />
              <span className="ml-3">Results</span>
            </Link>
          </li>
          <li>
            <Link to="/user/feedback" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaComment className="text-xl" />
              <span className="ml-3">Feedback</span>
            </Link>
          </li>
          <li>
            <Link to="/user/support" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaQuestionCircle className="text-xl" />
              <span className="ml-3">Support</span>
            </Link>
          </li>
          <li>
            <Link to="/user/settings" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaCog className="text-xl" />
              <span className="ml-3">Settings</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Section */}
      <div className={`fixed inset-0 bg-blue-900 text-white w-64 z-50 transform transition-transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu} className="text-white">
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <ul className="space-y-4 px-4">
          <li>
            <Link to="/user" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaHome className="text-xl" />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/user/vote" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaVoteYea className="text-xl" />
              <span className="ml-3">Vote</span>
            </Link>
          </li>
          <li>
            <Link to="/user/results" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaChartBar className="text-xl" />
              <span className="ml-3">Results</span>
            </Link>
          </li>
          <li>
            <Link to="/user/feedback" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaComment className="text-xl" />
              <span className="ml-3">Feedback</span>
            </Link>
          </li>
          <li>
            <Link to="/user/support" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaQuestionCircle className="text-xl" />
              <span className="ml-3">Support</span>
            </Link>
          </li>
          <li>
            <Link to="/user/settings" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaCog className="text-xl" />
              <span className="ml-3">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
