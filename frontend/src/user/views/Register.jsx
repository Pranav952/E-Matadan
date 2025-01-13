import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        age: '',
        citizenship_photo_front: null,
        citizenship_photo_back: null,
        party_name: '',
        education: '',
        experience: '',
        photo: null,
        is_authenticated: 0 
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, files, value } = e.target;
        setFormData({ ...formData, [name]: files ? files[0] : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formDataToSubmit = new FormData();
        Object.keys(formData).forEach(key => formDataToSubmit.append(key, formData[key]));
    
        try {
            const response = await fetch('http://localhost:8000/api/register/candidate/', {
                method: 'POST',
                body: formDataToSubmit
            });
    
            if (response.ok) {
                navigate('/candidates'); 
            } else {
                console.error('Failed to create candidate');
            }
        } catch (error) {
            console.error('Error submitting candidate registration:', error);
        }
    };
    
    return (
        <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 mt-10 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Register Candidate</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {['name', 'address', 'age', 'party_name', 'education', 'experience'].map(field => (
                        <div key={field}>
                            <label className="block text-gray-700 font-medium mb-2 capitalize">{field}</label>
                            {field === 'address' || field === 'education' || field === 'experience' ? (
                                <textarea 
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md" 
                                    rows="3"
                                    required 
                                ></textarea>
                            ) : (
                                <input
                                    type={field === 'age' ? 'number' : 'text'}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                />
                            )}
                        </div>
                    ))}

                    {['citizenship_photo_front', 'citizenship_photo_back', 'photo'].map(field => (
                        <div key={field}>
                            <label className="block text-gray-700 font-medium mb-2 capitalize">{field.replace('_', ' ')}</label>
                            <input
                                type="file"
                                name={field}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md"
                                accept="image/*"
                                required
                            />
                        </div>
                    ))}

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600"
                        >
                            Register Candidate
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
