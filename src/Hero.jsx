import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {

    const navigate = useNavigate(); // Hook to navigate to different routes

    const handleGetStartedClick = () => {
      navigate('/selection'); // Navigate to the user selection page
    };
    const handleClick = () => {
      navigate('/login'); // Navigate to the user selection page
    };
    const handleClickchange = () => {
      navigate('/register'); // Navigate to the user selection page
    };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="bg-lime-500 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">E-Learn Hub</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline" onClick={handleClickchange}>Register</a></li>
            <li><a href="#" className="hover:underline"    onClick={handleClick}>Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-lime-200 to-white text-center py-12 px-6">
        <h2 className="text-4xl font-bold mb-4">Learn without limits</h2>
        <p className="text-lg mb-6">Start now to advance your career with expert-led courses in Web Development, UI/UX Design, and more.</p>
        <button 
          className="bg-lime-500 text-white px-6 py-2 rounded shadow hover:bg-lime-600"
          onClick={handleGetStartedClick}
        >
          Get Started
        </button>
      </section>

      {/* Courses Section */}
      <section className="py-12 px-6">
        <h3 className="text-2xl font-bold text-center mb-8">Start learning with free courses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((course) => (
            <div key={course} className="border p-4 rounded shadow-lg bg-white hover:shadow-xl">
              <img src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="Course" className="w-full h-32 object-cover rounded mb-4" />
              <h4 className="text-xl font-bold mb-2">Web Development</h4>
              <p className="text-sm mb-4">Master the basics of web development with HTML, CSS, and JavaScript.</p>
              <button className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600">Enroll Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Section */}
      <section className="bg-lime-100 py-12 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Register For Free Courses</h3>
        <button className="bg-lime-500 text-white px-6 py-2 rounded shadow hover:bg-lime-600"  onClick={handleClickchange}>Register</button>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 text-center">
        <div className="max-w-md mx-auto">
          <img src="https://img.freepik.com/free-vector/contact-us-landing-page-template_23-2148279292.jpg?semt=ais_hybrid" alt="Contact Us" className="w-32 h-32 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
            <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
            <textarea placeholder="Your Message" className="w-full border p-2 rounded"></textarea>
            <button className="bg-lime-500 text-white px-6 py-2 rounded shadow hover:bg-lime-600">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2024 E-Learn Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Hero;
