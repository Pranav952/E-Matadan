import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';

function CandidateList() {
    const [candidates, setCandidates] = useState([]);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'
    const navigate = useNavigate();

    useEffect(() => {
        fetchCandidates();
    }, []);

    const fetchCandidates = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/voting/candidates/');
            if (response.ok) {
                const data = await response.json();
                setCandidates(data);
            } else {
                // setMessage('');
                // setMessageType('success');
            }
        } catch (error) {
            console.error('Error fetching candidates:', error);
            setMessage('An error occurred while fetching candidates.');
            setMessageType('error');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this candidate?')) return;

        try {
            const response = await fetch(`http://localhost:8000/api/voting/candidates/${id}/`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setMessage('Candidate deleted successfully.');
                setMessageType('success');
                setCandidates(candidates.filter((candidate) => candidate.id !== id));
            } else {
                setMessage('Failed to delete candidate.');
                setMessageType('error');
            }
        } catch (error) {
            console.error('Error deleting candidate:', error);
            setMessage('An error occurred while deleting the candidate.');
            setMessageType('error');
        }
    };

    const handleView = (id) => {
        navigate(`/admin/candidates/${id}`);
    };

    return (
        <Layout>
            <div className="flex justify-center">
                <div className="bg-white rounded-lg shadow-lg p-8 mt-10 w-full max-w-4xl">
                    <h1 className="text-3xl font-bold text-center mb-6">Candidate List</h1>

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
                                <th className="border border-gray-300 px-4 py-2">Party Name</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {candidates.map((candidate) => (
                                <tr key={candidate.id}>
                                    <td className="border border-gray-300 px-4 py-2">{candidate.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{candidate.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{candidate.address}</td>
                                    <td className="border border-gray-300 px-4 py-2">{candidate.party_name}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button
                                            onClick={() => handleView(candidate.id)}
                                            className="bg-blue-500 text-white py-1 px-3 rounded-md shadow hover:bg-blue-600 mr-2"
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={() => handleDelete(candidate.id)}
                                            className="bg-red-500 text-white py-1 px-3 rounded-md shadow hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {candidates.length === 0 && (
                        <p className="text-center text-gray-500 mt-4">No candidates found.</p>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default CandidateList;
