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
  const navigate = useNavigate(); // Hook for navigation

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    console.log('Form Submitted:', formData);

    // setTimeout(() => {
    //   navigate('/user'); // Redirect to main dashboard after 2 seconds
    // }, 2000);

// setFormData({
//       name: '',
//       email: '',
//       feedback: '',
//       rating: 3,
//       feedbackType: 'general',
//       agree: false,
//       feedbackDate: '',
//       age: '',
//       gender: '',
//       state: '',
//       district: ''
//     });
//   };

//   const handleClear = () => {
//     setFormData({
//       name: '',
//       email: '',
//       feedback: '',
//       rating: 3,
//       feedbackType: 'general',
//       agree: false,
//       feedbackDate: '',
//       age: '',
//       gender: '',
//       state: '',
//       district: ''
//     });
//     setFormStatus(null);
//   };

//   const states = [
//     'Province 1', 'Province 2', 'Bagmati Province', 'Gandaki Province', 'Lumbini Province', 'Karnali Province', 'Sudurpashchim Province'
//   ];

//   const districts = {
//     'Province 1': ['Jhapa', 'Bhojpur', 'Ilam', 'Khotang', 'Morang'],
//     'Province 2': ['Saptari', 'Siraha', 'Dhanusha', 'Mahottari'],
//     'Bagmati Province': ['Kathmandu', 'Bhaktapur', 'Lalitpur'],
//     'Gandaki Province': ['Kaski', 'Lamjung', 'Tanahun'],
//     'Lumbini Province': ['Rupandehi', 'Kapilvastu', 'Arghakhanchi'],
//     'Karnali Province': ['Surkhet', 'Dailekh', 'Jajarkot'],
//     'Sudurpashchim Province': ['Kailali', 'Kanchanpur', 'Baitadi'],
//   };

//   const handleStateChange = (e) => {
//     setFormData({ ...formData, state: e.target.value, district: '' });
//   };

//   return (
//     <Layout>
//     <div className="max-w-2xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg mt-8">
//       <h2 className="text-3xl text-gray-900 font-semibold text-center mb-6">Feedback Form</h2>

//       {formStatus && (
//         <div
//           className={`text-center py-3 mb-6 text-white rounded-lg ${formStatus === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
//         >
//           {formStatus === 'success' ? 'Thank you for your feedback!' : 'Something went wrong, please try again.'}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Name Input */}
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//             Your Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Enter your name"
//             required
//             className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
//           />
//         </div>

//         {/* Email Input */}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//             Your Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
//             required
//             className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
//           />
//         </div>
//         {/* State Select */}
//         <div className="mb-4">
//           <label htmlFor="state" className="block text-gray-700 font-medium mb-2">
//             Select Your State
//           </label>
//           <select
//             name="state"
//             id="state"
//             value={formData.state}
//             onChange={handleStateChange}
//             required
//             className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           >
//             <option value="">Select your state</option>
//             {states.map((state, index) => (
//               <option key={index} value={state}>
//                 {state}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* District Select */}
//         {formData.state && (
//           <div className="mb-4">
//             <label htmlFor="district" className="block text-gray-700 font-medium mb-2">
//               Select Your District
//             </label>
//             <select
//               name="district"
//               id="district"
//               value={formData.district}
//               onChange={handleInputChange}
//               required
//               className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option value="">Select your district</option>
//               {districts[formData.state]?.map((district, index) => (
//                 <option key={index} value={district}>
//                   {district}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         {/* Age Select */}
//         <div className="mb-4">
//           <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
//             Your Age
//           </label>
//           <select
//             name="age"
//             id="age"
//             value={formData.age}
//             onChange={handleInputChange}
//             required
//             className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           >
//             <option value="">Select your age range</option>
//             <option value="under_18">Under 18</option>
//             <option value="18_24">18 - 24</option>
//             <option value="25_34">25 - 34</option>
//             <option value="35_44">35 - 44</option>
//             <option value="45_54">45 - 54</option>
//             <option value="55_64">55 - 64</option>
//             <option value="65_plus">65+</option>
//           </select>
//         </div>

//         {/* Gender Select */}
//         <div className="mb-6">
//           <label className="block text-gray-700 font-medium mb-2">Your Gender</label>
//           <div className="flex space-x-4">
//             <label className="cursor-pointer text-gray-700">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="male"
//                 checked={formData.gender === 'male'}
//                 onChange={handleInputChange}
//                 className="mr-2"
//               />
//               Male
//             </label>
//             <label className="cursor-pointer text-gray-700">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="female"
//                 checked={formData.gender === 'female'}
//                 onChange={handleInputChange}
//                 className="mr-2"
//               />
//               Female
//             </label>
//             <label className="cursor-pointer text-gray-700">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="other"
//                 checked={formData.gender === 'other'}
//                 onChange={handleInputChange}
//                 className="mr-2"
//               />
//               Other
//             </label>
//           </div>
//         </div>

//              {/* Feedback Textarea */}
//              <div className="mb-4">
//           <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">
//             Your Feedback
//           </label>
//           <textarea
//             name="feedback"
//             id="feedback"
//             value={formData.feedback}
//             onChange={handleInputChange}
//             placeholder="Enter your feedback"
//             rows="4"
//             required
//             className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
//           />
//         </div>

//         {/* Submit and Clear Buttons */}
//         <div className="flex space-x-4">
//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-700 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
//           >
//             Submit Feedback
//           </button>
//           <button
//             type="button"
//             onClick={handleClear}
//             className="w-full py-3 bg-gray-300 text-gray-800 text-lg font-semibold rounded-md shadow-md hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300"
//           >
//             Clear Form
//           </button>
//         </div>
//       </form>
//     </div>
//     </Layout>
//   );
// };

// export default FeedbackForm;
    