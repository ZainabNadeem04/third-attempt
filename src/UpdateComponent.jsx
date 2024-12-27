import React, { useState } from 'react';
import Navbar from './Navbar';

const UpdateComponent = () => {
  const [formData, setFormData] = useState({ name: '', branch: '', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a network request
    setTimeout(() => {
      console.log('Updated Data:', formData);
      alert('Data updated successfully!');
      setIsSubmitting(false);
      setFormData({ name: '', branch: '', details: '' });
    }, 1000);
  };

  return (
    <>
 
    <div className="flex  h-screen font-sans  gap-20 ">
    <Navbar />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-6 pt-20 space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Update Branch Details</h2>

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-2  focus:ring-lime-500 focus:outline-none"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
            Branch Name
          </label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            placeholder="Enter branch name"
            className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-2  focus:ring-lime-500 focus:outline-none"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="details" className="block text-sm font-medium text-gray-700">
            Details
          </label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Enter branch details"
            className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-2  focus:ring-lime-500 focus:outline-none"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-md text-white font-semibold ${
            isSubmitting ? 'bg-blue-300' : ' bg-lime-500  hover:bg-lime-600'
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Updating...' : 'Update'}
        </button>
      </form>
    </div>
    </>
  );
};

export default UpdateComponent;
