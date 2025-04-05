import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Goals = () => {
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
              <h1 className="text-3xl font-bold">Goals</h1>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome Ekash Finance Management</p>
            </div>
            <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              <NavLink to="/" className={isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}>Home</NavLink> <i class="fa fa-chevron-right" aria-hidden="true"></i> Goals
            </div>
          </div>

          {/* Goals Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="col-span-1 space-y-4">
              {/* New Car */}
              <div className={`rounded-lg p-4 flex items-center ${isDarkMode ? 'bg-gray-800' : 'bg-blue-600 text-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-800'}`}>
                  <i className="fas fa-car text-xl"></i>
                </div>
                <div>
                  <p className="text-sm">New Car</p>
                  <p className="text-xl font-bold">$10,000</p>
                </div>
              </div>
              {/* Gaming PC */}
              <div className={`rounded-lg p-4 flex items-center shadow-md group transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-blue-500' : 'bg-white hover:bg-blue-600 hover:text-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-gray-700 group-hover:bg-blue-600' : 'bg-gray-100 group-hover:bg-blue-800'}`}>
                  <i className={`fas fa-gamepad text-blue-600 text-xl ${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-white'}`}></i>
                </div>
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-white'}`}>Gaming PC</p>
                  <p className={`text-xl font-bold ${isDarkMode ? 'group-hover:text-white' : 'text-gray-800 group-hover:text-white'}`}>$2,500</p>
                </div>
              </div>
              {/* Vacation */}
              <div className={`rounded-lg p-4 flex items-center shadow-md group transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-blue-500' : 'bg-white hover:bg-blue-600 hover:text-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-gray-700 group-hover:bg-blue-600' : 'bg-gray-100 group-hover:bg-blue-800'}`}>
                  <i className={`fas fa-plane text-blue-600 text-xl ${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-white'}`}></i>
                </div>
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-white'}`}>Vacation</p>
                  <p className={`text-xl font-bold ${isDarkMode ? 'group-hover:text-white' : 'text-gray-800 group-hover:text-white'}`}>$2,500.25</p>
                </div>
              </div>
              {/* Home Renovation */}
              <div className={`rounded-lg p-4 flex items-center shadow-md group transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-blue-500' : 'bg-white hover:bg-blue-600 hover:text-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-gray-700 group-hover:bg-blue-600' : 'bg-gray-100 group-hover:bg-blue-800'}`}>
                  <i className={`fas fa-home text-blue-600 text-xl ${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-white'}`}></i>
                </div>
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-white'}`}>Home Renovation</p>
                  <p className={`text-xl font-bold ${isDarkMode ? 'group-hover:text-white' : 'text-gray-800 group-hover:text-white'}`}>$346,478</p>
                </div>
              </div>
              {/* Add New Goal */}
              <button className={`w-full text-sm font-semibold py-2 rounded-lg ${isDarkMode ? 'text-blue-400 hover:bg-gray-700' : 'text-blue-600 hover:bg-gray-100'}`}>
                + Add new goal
              </button>
            </div>

            {/* Right Section */}
            <div className="col-span-1 lg:col-span-3 space-y-6">
              {/* Goal Details Card */}
              <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold mr-4">New Car</h3>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
                  <div>
                    <p className="text-3xl font-bold">$2,678</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Saved</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">$10,000</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Goal</p>
                  </div>
                </div>
                <div className={`w-full h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '26.78%' }}></div>
                </div>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-2>26.78%</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Total Saved</p>
                    <p className="text-xl font-bold">$2,678</p>
                  </div>
                  <div>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Remaining</p>
                    <p className="text-xl font-bold">$7,322</p>
                  </div>
                  <div>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Total Goal</p>
                    <p className="text-xl font-bold">$10,000</p>
                  </div>
                </div>
              </div>

              {/* Linked Accounts */}
              <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-bold mb-4">Linked Accounts</h3>
                <div className="space-y-4">
                  {[
                    { name: 'First Bank', amount: '$2,000', color: '#ffca28' },
                    { name: 'Cash App', amount: '$500', color: '#66bb6a' },
                    { name: 'Capital One', amount: '$178', color: '#ab47bc' },
                  ].map((account) => (
                    <div key={account.name} className="flex items-center">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: account.color }}>
                        <i className="fas fa-university text-white text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span>{account.name}</span>
                          <span>{account.amount}</span>
                        </div>
                        <div className={`w-full h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <div className="h-full rounded-full" style={{ width: `${(parseFloat(account.amount.replace('$', '')) / 2678) * 100}%`, backgroundColor: account.color }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* History */}
              <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-bold mb-4">History</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        {['Date', 'Type', 'Description', 'Amount'].map((header) => (
                          <th key={header} className={`p-2 text-left border-b font-normal text-sm ${isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'}`}>
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { date: '10/12/2023', type: 'Deposit', description: 'Paycheck', amount: '$500.00' },
                        { date: '09/12/2023', type: 'Deposit', description: 'Bank Transfer', amount: '$1,000.00' },
                        { date: '08/12/2023', type: 'Deposit', description: 'Savings Contribution', amount: '$500.00' },
                        { date: '07/12/2023', type: 'Deposit', description: 'Paycheck', amount: '$500.00' },
                        { date: '06/12/2023', type: 'Deposit', description: 'Cash', amount: '$178.00' },
                      ].map((history) => (
                        <tr key={history.description}>
                          <td className={`p-2 border-b text-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>{history.date}</td>
                          <td className={`p-2 border-b text-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>{history.type}</td>
                          <td className={`p-2 border-b text-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>{history.description}</td>
                          <td className={`p-2 border-b text-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>{history.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Goals;