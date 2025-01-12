import react from 'react';
import Layout  from '../Layout';

function Vote()
{
    return(
        <Layout>
        <div className="flex justify-center mr-20">
           <div className="bg-white rounded-lg shadow-xl p-6 mt-10">
                <h1 className="text-3xl font-bold text-center">
                 Welcome to Voting Section
                </h1>
            </div>
        </div>
        </Layout>
    );
}
export default Vote;