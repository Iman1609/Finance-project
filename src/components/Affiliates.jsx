import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Affiliates = () => {
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

        {/* Main Section */}
        <main className="container mx-auto py-8 px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-3xl font-bold">Affiliates</h1>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome Ekash Finance Management</p>
            </div>
            <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              <NavLink to="/" className={isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}>Home</NavLink> <i class="fa fa-chevron-right" aria-hidden="true"></i> Affiliates
            </div>
          </div>

          {/* Affiliates Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar */}
            <div className="col-span-1 space-y-4">
              <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-bold mb-4">Your Credit</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Invited</p>
                    <p className="font-bold">12</p>
                  </div>
                  <div className="flex justify-between">
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Earnings</p>
                    <p className="font-bold">$111</p>
                  </div>
                  <button className={`w-full py-2 rounded-md text-white font-semibold uppercase tracking-wide ${isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'}`}>
                    Claim Rewards
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-span-1 lg:col-span-3 space-y-6">
              {/* Referral Link */}
              <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-bold mb-2">Referral Link</h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Earn 5% of the COINS your referrals earn through an offer. Share this link with them to get started.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="flex-1 w-full">
                    <input
                      type="text"
                      value="Your referral link"
                      readOnly
                      className={`w-full p-2 border rounded-md focus:outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-800'}`}
                    />
                  </div>
                  <button className={`p-2 rounded-md ${isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'}`}>
                    <i className="fas fa-copy text-white"></i>
                  </button>
                </div>
                <div className="flex space-x-4 mt-4">
                  {[
                    { icon: 'fa-facebook', color: '#3b5998' },
                    { icon: 'fa-twitter', color: '#1da1f2' },
                    { icon: 'fa-instagram', color: '#e1306c' },
                    { icon: 'fa-whatsapp', color: '#25d366' },
                  ].map((social) => (
                    <button key={social.icon} className="p-2 rounded-full" style={{ backgroundColor: social.color }}>
                      <i className={`fab ${social.icon} text-white text-xl`}></i>
                    </button>
                  ))}
                </div>
              </div>

              {/* Referral Level */}
              <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
                  <h3 className="text-xl font-bold">Referral Level</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-600'}`}>
                    Current Bonus: 5%
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    { level: 'Bronze', bonus: '5%', count: 0, width: '0%' },
                    { level: 'Bronze', bonus: '5%', count: 0, width: '0%' },
                    { level: 'Bronze', bonus: '5%', count: 0, width: '0%' },
                  ].map((level, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-32">
                        <p className="font-bold">{level.level}</p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Referral Count: {level.count}</p>
                      </div>
                      <div className="flex-1">
                        <div className={`w-full h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <div className="h-full bg-blue-600 rounded-full" style={{ width: level.width }}></div>
                        </div>
                      </div>
                      <div className="w-16 text-right">
                        <p className="font-bold">{level.bonus}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Affiliates;