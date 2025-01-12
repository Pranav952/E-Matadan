import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser,  FaChartBar, FaCog, FaUserCircle, FaBars, FaTimes, FaSignOutAlt, FaChevronDown,FaVoteYea,FaUsers } from 'react-icons/fa';

function SideBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="relative">
      <div className="bg-blue-900 text-white w-64 space-y-6 px-2 py-7 md:block hidden fixed top-0 left-0 h-full z-10">
        <div className="text-2xl font-semibold text-center mb-8 text-indigo-200">
          <span>ई-matadan</span>
        </div>
        <ul className="space-y-4">
          <li>
            <Link
              to="/admin"
              className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              <FaHome className="text-xl" />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/users"
              className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              <FaUser className="text-xl" />
              <span className="ml-3">Users</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/candidates"
              className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              <FaUsers className="text-xl" />
              <span className="ml-3">Candidates</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/votes"
              className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              <FaVoteYea className="text-xl" />
              <span className="ml-3">Votes</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/results"
              className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              <FaChartBar className="text-xl" />
              <span className="ml-3">Results</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/settings"
              className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              <FaCog className="text-xl" />
              <span className="ml-3">Settings</span>
            </Link>
          </li>
          <li>
            <button
              onClick={toggleProfileMenu}
              className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all w-full"
            >
              <FaUserCircle className="text-xl" />
              <span className="ml-3">Profile</span>
              <FaChevronDown className={`ml-auto text-lg ${isProfileMenuOpen ? 'transform rotate-180' : ''}`} />
            </button>
            {isProfileMenuOpen && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <button
                    onClick={() => console.log("Logging out...")}
                    className="flex items-center px-4 py-2 rounded-lg hover:bg-red-600 transition-all w-full"
                  >
                    <FaSignOutAlt className="text-xl" />
                    <span className="ml-3">Logout</span>
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div
        className={`fixed inset-0 bg-blue-900 text-white w-64 z-50 transform transition-transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu} className="text-white">
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <ul className="space-y-4 px-4">
          <li>
            <Link
              to="/admin"
              className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              <FaHome className="text-xl" />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/users"
              className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              <FaUser className="text-xl" />
              <span className="ml-3">Users</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/votes"
              className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              <FaVoteYea className="text-xl" />
              <span className="ml-3">Vote</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/results"
              className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              <FaChartBar className="text-xl" />
              <span className="ml-3">Results</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/settings"
              className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              <FaCog className="text-xl" />
              <span className="ml-3">Settings</span>
            </Link>
          </li>
          <li>
            <button
              onClick={toggleProfileMenu}
              className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all w-full"
            >
              <FaUserCircle className="text-xl" />
              <span className="ml-3">Profile</span>
              <FaChevronDown className={`ml-auto text-lg ${isProfileMenuOpen ? 'transform rotate-180' : ''}`} />
            </button>
            {isProfileMenuOpen && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <button
                    onClick={() => console.log("Logging out...")}
                    className="flex items-center px-4 py-2 rounded-lg hover:bg-red-600 transition-all w-full"
                  >
                    <FaSignOutAlt className="text-xl" />
                    <span className="ml-3">Logout</span>
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="md:hidden flex justify-between items-center bg-blue-900 p-4 text-white z-10 fixed top-0 left-0 w-full">
        <button onClick={toggleMobileMenu} className="text-white">
          <FaBars className="text-2xl" />
        </button>
        <span className="text-xl font-semibold">ई-matadan</span>
      </div>
    </div>
  );
}

export default SideBar;
