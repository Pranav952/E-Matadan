
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: 3,
    feedbackType: 'general',
    agree: false,
    feedbackDate: '',
    age: '',
    gender: '',
    state: '',
    district: ''
  });

  const [formStatus, setFormStatus] = useState(null);
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  const handleStateChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      state: e.target.value,
      district: '', 
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/feedback/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        console.log('Form Submitted Successfully:', formData);

        setTimeout(() => {
          navigate('/user'); 
        }, 2000);

        handleClear();
      } else {
        setFormStatus('error');
        console.error('Submission failed:', response.statusText);
      }
    } catch (error) {
      setFormStatus('error');
      console.error('An error occurred:', error);
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      feedback: '',
      rating: 3,
      feedbackType: 'general',
      agree: false,
      feedbackDate: '',
      age: '',
      gender: '',
      state: '',
      district: ''
    });
    setFormStatus(null);
  };


  const states = [
    'Province 1', 'Province 2', 'Bagmati Province', 'Gandaki Province', 'Lumbini Province', 'Karnali Province', 'Sudurpashchim Province'
  ];

  const districts = {
    'Province 1': ['Jhapa', 'Bhojpur', 'Ilam', 'Khotang', 'Morang'],
    'Province 2': ['Saptari', 'Siraha', 'Dhanusha', 'Mahottari'],
    'Bagmati Province': ['Kathmandu', 'Bhaktapur', 'Lalitpur'],
    'Gandaki Province': ['Kaski', 'Lamjung', 'Tanahun'],
    'Lumbini Province': ['Rupandehi', 'Kapilvastu', 'Arghakhanchi'],
    'Karnali Province': ['Surkhet', 'Dailekh', 'Jajarkot'],
    'Sudurpashchim Province': ['Kailali', 'Kanchanpur', 'Baitadi'],
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl text-gray-900 font-semibold text-center mb-6">Feedback Form</h2>
        {formStatus && (
          <div
            className={`text-center py-3 mb-6 text-white rounded-lg ${
              formStatus === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {formStatus === 'success'
              ? 'Thank you for your feedback!'
              : 'Something went wrong, please try again.'}
          </div>
        )}


        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
                className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
                className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="state" className="block text-gray-700 font-medium mb-2">Select Your State</label>
              <select
                name="state"
                id="state"
                value={formData.state}
                onChange={handleStateChange}
                required
                className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-blue-500"
              >
                <option value="">Select your state</option>
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            {formData.state && (
              <div>
                <label htmlFor="district" className="block text-gray-700 font-medium mb-2">Select Your District</label>
                <select
                  name="district"
                  id="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-blue-500"
                >
                  <option value="">Select your district</option>
                  {districts[formData.state]?.map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="age" className="block text-gray-700 font-medium mb-2">Your Age</label>
              <select
                name="age"
                id="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-blue-500"
              >
                <option value="">Select your age range</option>
                <option value="under_18">Under 18</option>
                <option value="18_24">18 - 24</option>
                <option value="25_34">25 - 34</option>
                <option value="35_44">35 - 44</option>
                <option value="45_54">45 - 54</option>
                <option value="55_64">55 - 64</option>
                <option value="65_plus">65+</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Gender</label>
              <div className="flex space-x-4">
                {['male', 'female', 'other'].map((gender) => (
                  <label key={gender} className="cursor-pointer text-gray-700">
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={formData.gender === gender}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    {gender.charAt(0).toUpperCase() + gender.slice(1)}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">Your Feedback</label>
            <textarea
              name="feedback"
              id="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              placeholder="Enter your feedback"
              rows="4"
              required
              className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-blue-500"
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-full py-3 bg-blue-700 text-white rounded-md shadow-md hover:bg-blue-800"
            >
              Submit Feedback
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="w-full py-3 bg-gray-300 text-gray-800 rounded-md shadow-md hover:bg-gray-400"
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
export default FeedbackForm;

