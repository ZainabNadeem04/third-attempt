// 
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MyCourses() {
  const navigate = useNavigate(); // Hook to navigate to different routes
  const [userSave, setUserSave] = useState([]); // State for user data

  const handleGetStartedClick = () => {
    navigate('/create'); // Navigate to the user selection page
  };

  const getData = async () => {
    try {
      const userData = await axios.get("http://localhost:3001/user");
      setUserSave(userData?.data?.user || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-b from-gray-900 to-gray-700 text-white p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Courses</h2>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded text-black"
            />
            <button
              className="bg-lime-500 text-white p-2 rounded-full hover:bg-lime-600"
              onClick={handleGetStartedClick}
            >
              +
            </button>
          </div>
        </header>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Static courses */}
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow p-4 flex flex-col hover:shadow-lg"
            >
              <img
                src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg"
                alt="Course Thumbnail"
                className="rounded-t-lg mb-4 object-cover h-40 w-full"
              />
              <h3 className="font-bold text-lg mb-2">Web Development</h3>
              <p className="text-sm mb-4">
                Learn HTML, CSS, and JavaScript to build amazing websites.
              </p>
              <button className="mt-auto bg-lime-500 text-white p-2 rounded hover:bg-lime-600">
                View Details
              </button>
            </div>
          ))}

          {/* Dynamic user data */}
          {userSave.map((data, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow p-4 flex flex-col hover:shadow-lg"
            >
              <h3 className="font-bold text-lg mb-2">{data.name}</h3>
              <p className="text-sm mb-1">
                <strong>Email:</strong> {data.branch}
              </p>
           
              <p className="text-sm mb-1">
                <strong>Password:</strong> {data.detail}
              </p>
              <button className="mt-auto bg-lime-500 text-white p-2 rounded hover:bg-lime-600">
                View Details
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MyCourses;
