import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

function CreateCourses() {
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [detail, setDetail] = useState('');

  const handleSubmit = async () => {
   // Prevent form reload
    console.log("Function is working");
    const body = {
       name: name, 
      branch: branch, 
      detail: detail
     }

    try {
      const userData = await axios.post("http://localhost:3001/user", body);
      if (userData) {
        alert(userData.data.message);
        // Clear form after submission
        // setName('');
        // setBranch('');
        // setDetail('');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex h-screen font-sans">
      <Navbar />
      <main className="flex-1 bg-lime-100 p-6">
        <header className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800">Create Courses</h2>
        </header>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <form
            className="bg-white p-6 rounded shadow-lg w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter course name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="branch" className="block text-sm font-bold mb-2">
                Branch
              </label>
              <input
                type="text"
                id="branch"
                placeholder="Enter branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="detail" className="block text-sm font-bold mb-2">
                Detail
              </label>
              <textarea
                id="detail"
                placeholder="Enter course details"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-lime-500 text-white py-2 rounded hover:bg-lime-600"
            >
              Submit
            </button>
          </form>

          <div className="hidden md:block">
            <img
              src="https://media.gettyimages.com/id/1433101235/vector/conceptual-of-education.jpg?s=612x612&w=gi&k=20&c=OF5eXpu8m6YaFkvjLqLi-DAfwhzGamgVvEMJU3VWgW4="
              alt="Illustration"
              className="w-96 h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default CreateCourses;
