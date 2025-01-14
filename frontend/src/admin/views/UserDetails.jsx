import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../Layout';

function UserDetail() {
    const { id } = useParams();
    const [voter, setVoter] = useState(null);
    const navigate = useNavigate();
    const baseUrl="http://localhost:8000/"

    useEffect(() => {
        fetchVoterDetail();
    }, []);

    const fetchVoterDetail = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/voting/voters/${id}/`);
            if (response.ok) {
                const data = await response.json();
                setVoter(data);
            } else {
                console.error('Failed to fetch voter details');
            }
        } catch (error) {
            console.error('Error fetching voter details:', error);
        }
    };

    if (!voter) {
        return <p>Loading voter details...</p>;
    }

    const handleAccept = () => {
        console.log(`Accepting voter ID: ${voter.id}`);
    };

    const handleReject = () => {
        console.log(`Rejecting voter ID: ${voter.id}`);
    };

    const handleBack = () => {
        navigate(-1); 
    };

    return (
        <Layout>
            <div className="flex justify-center">
                <div className="bg-white rounded-lg shadow-lg p-8 mt-10 w-full max-w-4xl overflow-auto" style={{ maxHeight: '80vh' }}>
                    <h1 className="text-3xl font-bold text-center mb-6">Voter Details</h1>

                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={handleAccept}
                            className="bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600"
                        >
                            Accept
                        </button>
                        <button
                            onClick={handleReject}
                            className="bg-red-500 text-white py-2 px-4 rounded-md shadow hover:bg-red-600"
                        >
                            Reject
                        </button>
                        <button
                            onClick={handleBack}
                            className="bg-gray-500 text-white py-2 px-4 rounded-md shadow hover:bg-gray-600"
                        >
                            Back
                        </button>
                    </div>

                    <div className="mt-6">
                        <p><strong>ID:</strong> {voter.id}</p>
                        <p><strong>Name:</strong> {voter.name}</p>
                        <p><strong>Surname:</strong> {voter.surname}</p>
                        <p><strong>Address:</strong> {voter.address}</p>
                        <p><strong>Citizenship Number:</strong> {voter.citizenship_number}</p>

                        <div className="mt-4">
                            <p><strong>Back Photo:</strong></p>
                            {voter.citizenship_photo_back ? (
                                <img src={`${baseUrl}${voter.citizenship_photo_back}`} alt="Back Photo" className="w-full max-w-xs mb-4" />
                            ) : (
                                <p>No Back Photo Available</p>
                            )}

                            <p><strong>Front Photo:</strong></p>
                            {voter.citizenship_photo_front ? (
                                <img src={`${baseUrl}${voter.citizenship_photo_front}`} alt="Front Photo" className="w-full max-w-xs mb-4" />
                            ) : (
                                <p>No Front Photo Available</p>
                            )}

                            <p><strong>Profile Photo:</strong></p>
                            {voter.photo ? (
                                <img src={`${baseUrl}${voter.photo}`} alt="Profile Photo" className="w-full max-w-xs mb-4" />
                            ) : (
                                <p>No Profile Photo Available</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default UserDetail;
