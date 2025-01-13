import React, { useState } from 'react';
import Layout from '../Layout'; // Import the Layout component

function UserSettings() {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePic: null,
  });

  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSave = () => {
    // Logic to save changes (could be an API call)
    alert('Settings saved!');
  };

  return (
    <Layout> {/* Make sure to wrap the content inside Layout */}
      <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-10 min-h-screen">
        <div className="max-w-4xl mx-auto p-8 bg-white bg-opacity-80 rounded-xl shadow-lg mt-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">User Settings</h2>

          {/* Profile Section */}
          <div className="flex items-center space-x-6 mb-12">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 shadow-md relative">
              <img
                src={userInfo.profilePic || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <label htmlFor="profilePic" className="absolute bottom-2 right-2 bg-teal-600 text-white p-2 rounded-full cursor-pointer hover:bg-teal-700">
                <i className="fas fa-camera"></i>
              </label>
              <input
                type="file"
                id="profilePic"
                onChange={(e) => setUserInfo({ ...userInfo, profilePic: URL.createObjectURL(e.target.files[0]) })}
                className="hidden"
              />
            </div>
            <div>
              <input
                type="file"
                onChange={(e) => setUserInfo({ ...userInfo, profilePic: URL.createObjectURL(e.target.files[0]) })}
                className="mt-4 p-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
              />
            </div>
          </div>

          {/* Basic Info Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Basic Information</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userInfo.name}
                  onChange={handleProfileChange}
                  placeholder="John Doe"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-600 focus:border-transparent transition duration-300 placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleProfileChange}
                  placeholder="john.doe@example.com"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-600 focus:border-transparent transition duration-300 placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Password Change Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Change Password</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="oldPassword" className="block text-gray-700 font-medium mb-2">Old Password</label>
                <input
                  type="password"
                  id="oldPassword"
                  name="oldPassword"
                  value={passwords.oldPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-600 focus:border-transparent transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-gray-700 font-medium mb-2">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={passwords.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-600 focus:border-transparent transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-600 focus:border-transparent transition duration-300"
                />
              </div>
            </div>
          </div>

          {/* Notification Preferences Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Notification Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="email"
                  name="email"
                  checked={notifications.email}
                  onChange={handleNotificationChange}
                  className="h-5 w-5 text-teal-600 focus:ring-teal-500 transition duration-300"
                />
                <label htmlFor="email" className="ml-3 text-gray-700">Receive Email Notifications</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sms"
                  name="sms"
                  checked={notifications.sms}
                  onChange={handleNotificationChange}
                  className="h-5 w-5 text-teal-600 focus:ring-teal-500 transition duration-300"
                />
                <label htmlFor="sms" className="ml-3 text-gray-700">Receive SMS Notifications</label>
              </div>
            </div>
          </div>

          {/* Save Settings Button */}
          <div className="text-center">
            <button
              onClick={handleSave}
              className="px-8 py-4 bg-teal-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-300"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserSettings;
