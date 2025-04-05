import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <header className="py-4 bg-gray-50">
        <div className="container mx-auto flex justify-end items-center px-4">
        </div>
      </header>

      {/* Main Section  */}
      <main className="flex-1 flex items-center justify-center py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl w-full rounded-lg shadow-lg overflow-hidden">

          <div
            className="p-8 flex flex-col justify-between relative"
            style={{
              backgroundImage: `url('/signup2 .png')`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-blue-600 opacity-50"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex flex-col items-start mb-4">
                <img
                  src="/logo 4.png" 
                  alt="Ekash Logo"
                  className="w-10 h-10 mb-4"
                />
                <h2 className="text-2xl font-bold text-white">Welcome to Ekash</h2>
              </div>
              <div className="flex space-x-4 mt-8">
                {[
                  { icon: 'fa-facebook', color: '#3b5998' },
                  { icon: 'fa-twitter', color: '#1da1f2' },
                  { icon: 'fa-linkedin', color: '#0077b5' },
                  { icon: 'fa-pinterest', color: '#bd081c' },
                ].map((social) => (
                  <button key={social.icon} className="p-2 rounded-full" style={{ backgroundColor: social.color }}>
                    <i className={`fab ${social.icon} text-white text-xl`}></i>
                  </button>
                ))}
              </div>
            </div>
            <div className="relative z-10">
              <p className="text-sm text-white">
                Have an issue with 2-factor authentication?{' '}
                <a href="#" className="underline hover:text-blue-300">Privacy Policy</a>
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-8 bg-white">
            <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 border rounded-md focus:outline-none bg-white border-gray-300 text-gray-800 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-md focus:outline-none bg-white border-gray-300 text-gray-800 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded-md focus:outline-none bg-white border-gray-300 text-gray-800 placeholder-gray-400"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 text-blue-600"
                />
                <label className="text-sm text-gray-600">
                  I certify that I am 18 years of age or older, and agree to the{' '}
                  <a href="#" className="underline hover:text-blue-600">User Agreement</a> and{' '}
                  <a href="#" className="underline hover:text-blue-600">Privacy Policy</a>.
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-md text-white font-semibold bg-blue-600 hover:bg-blue-700"
              >
                Sign Up
              </button>
            </form>
            <p className="text-sm mt-4 text-center text-gray-600">
              Already have an account?{' '}
              <NavLink to="/signin" className="underline hover:text-blue-600">Sign In</NavLink>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;