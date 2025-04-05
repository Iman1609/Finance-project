import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Wallets = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
   
  }, []);

  return (
    <div className={`font-sans flex min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      {/* Sidebar */}
      <div className={`w-[60px] h-[calc(100vh-48px)] fixed top-12 left-0 flex flex-col items-center py-5 justify-between z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-blue-600'}`}>
        <img src="logo3.png" alt="Logo" className="w-3/4 bg-white p-1 rounded mb-5" />
        <div className="flex flex-col items-center flex-grow justify-around w-full">
          {[
            { to: '/', icon: 'fa-gauge', tooltip: 'Dashboard' },
            { to: '/wallets', icon: 'fa-wallet', tooltip: 'Wallets' },
            { to: '/budgets', icon: 'fa-circle-dollar-to-slot', tooltip: 'Budgets' },
            { to: '/goals', icon: 'fa-bullseye', tooltip: 'Goals' },
            { to: '/profile', icon: 'fa-user', tooltip: 'Profile' },
            { to: '/analytics', icon: 'fa-chart-simple', tooltip: 'Analytics' },
            { to: '/link', icon: 'fa-link', tooltip: 'Link' },
          ].map((item) => (
            <NavLink
              key={item.tooltip}
              to={item.to}
              className={`text-white text-2xl p-2 w-full flex justify-center items-center hover:bg-white/20 relative group transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-700' : ''}`}
            >
              <i className={`fa-solid ${item.icon}`}></i>
              <span className={`absolute left-[70px] text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 whitespace-nowrap ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
                {item.tooltip}
              </span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-[60px] pt-12 w-full">
        {/* Header Section */}
        <header className={`py-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="flex items-center w-1/3">
              <input
                type="text"
                placeholder="Search Here"
                className={`w-full p-2 border border-r-0 rounded-l-md focus:outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-800'}`}
              />
              <button className={`text-white p-2 rounded-r-md ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}>
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative group cursor-pointer">
                <i className={`fas fa-bell ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}></i>
                <div className={`absolute top-full right-0 rounded shadow-lg min-w-[200px] hidden group-hover:block z-50 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
                  <div className={`p-2 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>Payment Due: Electricity - $50</div>
                  <div className={`p-2 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>New Budget Alert: Grocery</div>
                  <div className="p-2">Goal Achieved: Laptop Savings</div>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}>
                  <i className="fas fa-user text-white"></i>
                </div>
                <div className={`absolute top-full right-0 rounded shadow-lg min-w-[200px] hidden group-hover:block z-50 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
                  <div className={`p-2 border-b font-bold ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>user@example.com</div>
                  <NavLink to="/profile" className={`block p-2 border-b ${isDarkMode ? 'border-gray-600 hover:text-blue-400' : 'border-gray-200 hover:text-blue-600'}`}>Profile</NavLink>
                  <NavLink to="/settings" className={`block p-2 border-b ${isDarkMode ? 'border-gray-600 hover:text-blue-400' : 'border-gray-200 hover:text-blue-600'}`}>Settings</NavLink>
                  <NavLink to="/logout" className={`block p-2 ${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>Logout</NavLink>
                </div>
              </div>
             
              <div className="cursor-pointer" onClick={toggleDarkMode}>
                <i className={`fas fa-sun text-xl ${isDarkMode ? 'text-orange-500' : 'text-gray-600'}`}></i>
              </div>
            </div>
          </div>
        </header>

        {/* Main Section - Financial Overview */}
        <main className="container mx-auto py-8 px-4">
         
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Financial Overview</h1>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome Ekash Finance Management</p>
            </div>
            <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              <NavLink to="/" className={isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}>Home</NavLink> <i class="fa fa-chevron-right" aria-hidden="true"></i> Financial Overview
            </div>
          </div>

          {/* Financial Overview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar*/}
            <div className="col-span-1 space-y-4">
              {/* Savings Account */}
              <div className={`rounded-lg p-4 flex items-center ${isDarkMode ? 'bg-gray-800' : 'bg-blue-600 text-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-800'}`}>
                  <i className="fas fa-piggy-bank text-xl"></i>
                </div>
                <div>
                  <p className="text-sm">Savings Account</p>
                  <p className="text-xl font-bold">$157,632</p>
                </div>
              </div>
              {/* Credit Card  */}
              <div className={`rounded-lg p-4 flex items-center shadow-md group transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-blue-500' : 'bg-white hover:bg-blue-600 hover:text-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-gray-700 group-hover:bg-blue-600' : 'bg-gray-100 group-hover:bg-blue-800'}`}>
                  <i className={`fas fa-credit-card text-blue-600 text-xl ${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-white'}`}></i>
                </div>
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-white'}`}>Credit Card</p>
                  <p className={`text-xl font-bold ${isDarkMode ? 'group-hover:text-white' : 'text-gray-800 group-hover:text-white'}`}>$8,745</p>
                </div>
              </div>
              {/* Investment Portfolio */}
              <div className={`rounded-lg p-4 flex items-center shadow-md group transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-blue-500' : 'bg-white hover:bg-blue-600 hover:text-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-gray-700 group-hover:bg-blue-600' : 'bg-gray-100 group-hover:bg-blue-800'}`}>
                  <i className={`fas fa-chart-line text-blue-600 text-xl ${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-white'}`}></i>
                </div>
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-white'}`}>Investment Portfolio</p>
                  <p className={`text-xl font-bold ${isDarkMode ? 'group-hover:text-white' : 'text-gray-800 group-hover:text-white'}`}>$542,915</p>
                </div>
              </div>
              {/* Emergency Fund  */}
              <div className={`rounded-lg p-4 flex items-center shadow-md group transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-blue-500' : 'bg-white hover:bg-blue-600 hover:text-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-gray-700 group-hover:bg-blue-600' : 'bg-gray-100 group-hover:bg-blue-800'}`}>
                  <i className={`fas fa-shield-alt text-blue-600 text-xl ${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-white'}`}></i>
                </div>
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-white'}`}>Emergency Fund</p>
                  <p className={`text-xl font-bold ${isDarkMode ? 'group-hover:text-white' : 'text-gray-800 group-hover:text-white'}`}>$85,000.32</p>
                </div>
              </div>
              {/* Add New Account */}
              <button className={`w-full text-sm font-semibold py-2 rounded-lg ${isDarkMode ? 'text-blue-400 hover:bg-gray-700' : 'text-blue-600 hover:bg-gray-100'}`}>
                + Add new account
              </button>
            </div>

            {/* Right Section */}
            <div className="col-span-1 lg:col-span-3 space-y-6">
              {/* Total Balance Card */}
              <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Premium Checking Account</h3>
                    <p className="text-3xl font-bold">Total Balance</p>
                    <p className="text-4xl font-bold">$87,549.32</p>
                  </div>
                  <div className="text-right">
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Available Balance</p>
                    <p className="text-xl font-bold">$86,049.32</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Credit Limit</p>
                    <p className="text-xl font-bold">$10,000.00</p>
                  </div>
                </div>
              </div>

              {/* Debit Card and Spending */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Debit Card */}
                <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-900 to-blue-700 text-white'}`}>
                  <p className="text-sm">Premium Debit Card</p>
                  <p className="text-2xl font-bold mt-4">**** **** **** 7890</p>
                  <div className="flex justify-between mt-8">
                    <div>
                      <p className="text-sm">Emily Johnson</p>
                    </div>
                    <div>
                      <p className="text-sm">EXP: 09/25</p>
                    </div>
                  </div>
                </div>
                {/* This Month's Spending */}
                <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4>This Month's Spending</h3>
                  <p className="text-3xl font-bold">$3,287.45</p>
                  <div className="flex justify-between mt-4">
                    <p className="text-green-500">
                      <i className="fas fa-arrow-up mr-1"></i> 2.1% Last month $824.12
                    </p>
                    <p className="text-red-500">
                      <i className="fas fa-arrow-down mr-1"></i> 1.8% Last month $33,345.72
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Wallets;