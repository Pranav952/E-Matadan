import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';


function UserDetail() {
    const [voters, setVoters] = useState([]);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'
    const navigate = useNavigate();

    useEffect(() => {
        fetchVoters();
    }, []);

    const fetchVoters = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/voting/voters/');
            if (response.ok) {
                const data = await response.json();
                setVoters(data);
            } else {
                console.error('Failed to fetch voters');
            }
        } catch (error) {
            console.error('Error fetching voters:', error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this voter?')) return;

        try {
            const response = await fetch(`http://localhost:8000/api/voting/voters/${id}/`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setMessage('Voter deleted successfully.');
                setMessageType('success');
                setVoters(voters.filter((voter) => voter.id !== id));
            } else {
                setMessage('Failed to delete voter.');
                setMessageType('error');
            }
        } catch (error) {
            console.error('Error deleting voter:', error);
            setMessage('An error occurred while deleting the voter.');
            setMessageType('error');
        }
    };

    const handleView = (id) => {
        // Redirect to the voter detail page
        navigate(`/voters/${id}`);
    };

    return (
        <Layout>
            <div className="flex justify-center">
                <div className="bg-white rounded-lg shadow-lg p-8 mt-10 w-full max-w-4xl">
                    <h1 className="text-3xl font-bold text-center mb-6">Voter List</h1>

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

                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">ID</th>
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Address</th>
                                <th className="border border-gray-300 px-4 py-2">Citizenship Number</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {voters.map((voter) => (
                                <tr key={voter.id}>
                                    <td className="border border-gray-300 px-4 py-2">{voter.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{voter.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{voter.address}</td>
                                    <td className="border border-gray-300 px-4 py-2">{voter.citizenship_number}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button
                                            onClick={() => handleView(voter.id)}
                                            className="bg-blue-500 text-white py-1 px-3 rounded-md shadow hover:bg-blue-600 mr-2"
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={() => handleDelete(voter.id)}
                                            className="bg-red-500 text-white py-1 px-3 rounded-md shadow hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {voters.length === 0 && (
                        <p className="text-center text-gray-500 mt-4">No voters found.</p>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default UserDetail;