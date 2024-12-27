
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    
    const navigate = useNavigate(); // Hook to navigate to different routes

    const handleGetStartedClick = () => {
      navigate('/login'); // Navigate to the user selection page
    };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here (e.g., API request, validation)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-bold text-center text-lime-500 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-lime-500 text-white rounded-md hover:bg-lime-600 focus:outline-none"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <a href="/signup" className="text-lime-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

// export default function Login() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleLogin = async () => {
//     const body = {
//       email: email,
//       password: password
//     }
//     try {
//       console.log(body); // Should log a valid JSON object

//       const response = await axios.post('http://localhost:3000/user/login', body,
//         { headers: { "Content-Type": "application/json" } }
//       )
      
//       if (response.status = 200) {
//         toast.success(response.data.message)
//         localStorage.setItem('token', response.data.token)

//       }
//     }
//     catch (err) {
//       console.log(err)
     
//       // toast.error(err.response.data.message)

//     }

  
//   }


//   return (
//     <div class="w-full max-w-xs m-auto mt-20">
//       <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
//         <div class="mb-4">
//           <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
//             Email
//           </label>
//           <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div class="mb-6">
//           <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
//             Password
//           </label>
//           <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <div class="flex items-center justify-between">
//           <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleLogin}>
//             Sign In
//           </button>
//           <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
//             Forgot Password?
//           </a>
//         </div>
//       </form>
//       <p class="text-center text-gray-500 text-xs">
//         &copy;2020 Acme Corp. All rights reserved.
//       </p>
//       <ToastContainer />
//     </div>
//   )
// }
