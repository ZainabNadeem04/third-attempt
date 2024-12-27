// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <aside className="bg-lime-500 text-white w-64  flex flex-col h-screen pt-10 pl-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-white w-12 h-12 rounded-full">
          {/* Profile Image Placeholder */}
        </div>
        <h1 className="text-xl font-bold">E-Learn Hub</h1>
      </div>
      <nav className="flex flex-col gap-4">
       
        <Link to="/my" className="hover:underline">Courses</Link>
        <Link to="/students" className="hover:underline">student</Link>
        <Link to="/st" className="hover:underline">Settings</Link>
        <Link to="/logout" className="hover:underline">Logout</Link>
      </nav>
    </aside>
  );
};

export default Navbar;
