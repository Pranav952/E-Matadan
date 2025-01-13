import React, { useState } from 'react';
import Layout from '../Layout';

function RegisterAsVoter() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        address: '',
        citizenship_number: '',
        citizenship_photo_front: null,
        citizenship_photo_back: null,
        photo: null,
    });

    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFormData({
                ...formData,
                [e.target.name]: e.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleClear = () => {
        setFormData({
            name: '',
            surname: '',
            address: '',
            citizenship_number: '',
            citizenship_photo_front: null,
            citizenship_photo_back: null,
            photo: null,
        });
        setMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataObj = new FormData();
        for (const key in formData) {
            formDataObj.append(key, formData[key]);
        }

        try {
            const response = await fetch('http://localhost:8000/api/voting/register/', {
                method: 'POST',
                body: formDataObj,
            });

            if (response.ok) {
                setMessage('Registration successful!');
                setMessageType('success');
                handleClear();
            } else {
                const errorMessage = await response.text();
                console.error('Server Error:', errorMessage);
                setMessage('Failed to register. Please check your input and try again.');
                setMessageType('error');
            }
        } catch (error) {
            console.error('Network Error:', error);
            setMessage('A network error occurred. Please try again later.');
            setMessageType('error');
        }
    };

    return (
        <Layout>
            <div className="flex justify-center">
                <div className="bg-white rounded-lg shadow-lg p-8 mt-10 w-full max-w-2xl">
                    <h1 className="text-3xl font-bold text-center mb-6">Register as Voter</h1>

                    {/* Success/Error Message */}
                    {message && (
                        <div
                            className={`p-4 mb-4 rounded-md text-center ${
                                messageType === 'success'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                            }`}
                        >
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="surname" className="block text-gray-700 font-medium mb-1">
                                    Surname
                                </label>
                                <input
                                    type="text"
                                    id="surname"
                                    name="surname"
                                    value={formData.surname}
                                    onChange={handleChange}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-gray-700 font-medium mb-1">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="citizenship_number" className="block text-gray-700 font-medium mb-1">
                                    Citizenship Number
                                </label>
                                <input
                                    type="text"
                                    id="citizenship_number"
                                    name="citizenship_number"
                                    value={formData.citizenship_number}
                                    onChange={handleChange}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="citizenship_photo_front" className="block text-gray-700 font-medium mb-1">
                                    Citizenship Photo (Front)
                                </label>
                                <input
                                    type="file"
                                    id="citizenship_photo_front"
                                    name="citizenship_photo_front"
                                    onChange={handleChange}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="citizenship_photo_back" className="block text-gray-700 font-medium mb-1">
                                    Citizenship Photo (Back)
                                </label>
                                <input
                                    type="file"
                                    id="citizenship_photo_back"
                                    name="citizenship_photo_back"
                                    onChange={handleChange}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="photo" className="block text-gray-700 font-medium mb-1">
                                    Photo
                                </label>
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    onChange={handleChange}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-6">
                            <button
                                type="submit"
                                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={handleClear}
                                className="flex-1 bg-gray-300 text-gray-800 py-2 px-4 rounded-md shadow hover:bg-gray-400"
                            >
                                Clear Form
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default RegisterAsVoter;