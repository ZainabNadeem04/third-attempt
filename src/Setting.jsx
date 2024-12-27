import React, { useState, useEffect } from 'react';

const Setting = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch data from backend
  useEffect(() => {
    setIsLoading(true);
    // Simulate fetching data from backend
    setTimeout(() => {
      setData([
        { id: 1, name: 'Branch 1', details: 'Details about Branch 1' },
        { id: 2, name: 'Branch 2', details: 'Details about Branch 2' },
        { id: 3, name: 'Branch 3', details: 'Details about Branch 3' },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Delete an entry
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  // Update an entry (placeholder for real update logic)
  const handleUpdate = (id) => {
    const newName = window.prompt('Enter the new name:');
    if (newName) {
      setData(
        data.map((item) =>
          item.id === id ? { ...item, name: newName } : item
        )
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>
      
      {isLoading ? (
        <p className="text-gray-600">Loading data...</p>
      ) : (
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 space-y-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-lime-50 p-4 rounded-lg border border-lime-200"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.details}</p>
              </div>
              <div className="mt-4 sm:mt-0 flex space-x-2">
                <button
                  onClick={() => handleUpdate(item.id)}
                  className="py-2 px-4 bg-lime-500 text-white rounded-md hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-400"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {data.length === 0 && (
            <p className="text-center text-gray-600">No data available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Setting;
