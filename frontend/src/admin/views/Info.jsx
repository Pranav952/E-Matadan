import React  from "react";

function Info()
{
    return (   
    <div className="flex items-center justify-center h-screen bg-indigo-100 text-indigo-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to e-matadan</h1>
        <p className="text-xl">
          To Acees Admin section hit url /admin
          <hr></hr>
          To Acess User Section hit url /user
        </p>
      </div>
    </div>
    );
}
export default Info;
