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