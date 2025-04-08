import React, { useState } from 'react';


const Login = () => {
  const [userType, setUserType] = useState('normal'); // Toggle between 'normal' and 'admin'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call to Spring Boot)
    console.log(`${userType} Login - Email: ${email}, Password: ${password}`);
    // Reset form (optional)
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-700 mb-2">LeftOverLove</h1>
        <p className="text-gray-600 mb-6">
          Connecting food donors with communities
        </p>

        {/* Toggle between Normal and Admin Login */}
        <div className="flex justify-between mb-6">
          <button
            className={`flex-1 py-2 text-sm font-medium border border-green-700 rounded-l-md transition-colors ${
              userType === 'normal'
                ? 'bg-green-700 text-white'
                : 'bg-white text-green-700 hover:bg-green-50'
            }`}
            onClick={() => setUserType('normal')}
          >
            Normal Login
          </button>
          <button
            className={`flex-1 py-2 text-sm font-medium border border-green-700 rounded-r-md transition-colors ${
              userType === 'admin'
                ? 'bg-green-700 text-white'
                : 'bg-white text-green-700 hover:bg-green-50'
            }`}
            onClick={() => setUserType('admin')}
          >
            Admin Login
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-green-700 rounded-md hover:bg-green-800 transition-colors"
          >
            {userType === 'normal' ? 'Login' : 'Admin Login'}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Don’t have an account?{' '}
          <a href="/signup" className="text-green-700 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;