import React from 'react';
import { useNavigate } from 'react-router-dom';
function UserSelection() {
  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleGetStartedClick = () => {
    navigate('/my'); // Navigate to the user selection page
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-200 to-blue-200 font-sans">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Select Your Role</h1>

        <div className="flex flex-col gap-6">
          <button  onClick={handleGetStartedClick}
            className="w-full bg-lime-500 text-white py-3 rounded text-lg font-semibold hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-400"
          >
            I am a Teacher
          </button>
          <button
            className="w-full bg-blue-500 text-white py-3 rounded text-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            I am a Student
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserSelection;
