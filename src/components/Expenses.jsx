import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Chart from 'chart.js/auto';

const Expenses = () => {
  const expensesChartRef = useRef(null);
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
    const expensesCtx = expensesChartRef.current.getContext('2d');
    const expensesChart = new Chart(expensesCtx, {
      type: 'doughnut',
      data: {
        labels: ['Food', 'Transport', 'Healthcare', 'Clothing', 'Pets', 'Entertainment'],
        datasets: [{
          data: [1200, 1200, 1200, 1200, 1200, 1200], 
          backgroundColor: [
            isDarkMode ? '#ff8a80' : '#ff6f61', 
            isDarkMode ? '#90caf9' : '#42a5f5', 
            isDarkMode ? '#a5d6a7' : '#66bb6a', 
            isDarkMode ? '#ce93d8' : '#ab47bc', 
            isDarkMode ? '#fff59d' : '#ffee58', 
            isDarkMode ? '#64b5f6' : '#1a73e8'  
          ],
          borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        }
      }
    });

    return () => {
      expensesChart.destroy();
    };
  }, [isDarkMode]);

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

        {/* Main Section  */}
        <main className="container mx-auto py-8 px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-3xl font-bold">Expenses</h1>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome Ekash Finance Management</p>
            </div>
            <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              <NavLink to="/" className={isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}>Home</NavLink> <i class="fa fa-chevron-right" aria-hidden="true"></i> Expenses
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap space-x-2 sm:space-x-4 mb-8">
            {['Analytics', 'Expenses', 'Income', 'Income vs Expenses', 'Balance', 'Transaction History'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-md text-sm font-medium ${tab === 'Expenses' ? (isDarkMode ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white') : (isDarkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600')}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Expenses Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar  */}
            <div className="col-span-1 space-y-4">
              <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-bold mb-4">Expenses Breakdown</h3>
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 mb-4">
                    <canvas ref={expensesChartRef}></canvas>
                  </div>
                  <div className="space-y-2 w-full">
                    {[
                      { label: 'Food', amount: '$1200', color: isDarkMode ? '#ff8a80' : '#ff6f61' },
                      { label: 'Transport', amount: '$1200', color: isDarkMode ? '#90caf9' : '#42a5f5' },
                      { label: 'Healthcare', amount: '$1200', color: isDarkMode ? '#a5d6a7' : '#66bb6a' },
                      { label: 'Clothing', amount: '$1200', color: isDarkMode ? '#ce93d8' : '#ab47bc' },
                      { label: 'Pets', amount: '$1200', color: isDarkMode ? '#fff59d' : '#ffee58' },
                      { label: 'Entertainment', amount: '$1200', color: isDarkMode ? '#64b5f6' : '#1a73e8' },
                    ].map((category) => (
                      <div key={category.label} className="flex items-center">
                        <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: category.color }}></div>
                        <div className="flex-1 flex justify-between">
                          <span>{category.label}</span>
                          <span className="font-bold">{category.amount}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-span-1 lg:col-span-3 space-y-6">
              <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-bold mb-4">Transaction History</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        {['Category', 'Date', 'Description', 'Amount', 'Currency'].map((header) => (
                          <th key={header} className={`p-2 text-left border-b font-normal text-sm ${isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'}`}>
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { category: 'Beauty', date: '12.12.2023', description: 'Grocery Items and Beverage Soft drinks', amount: '$32.20', currency: 'USD' },
                        { category: 'Bills & Fees', date: '12.12.2023', description: 'Grocery Items and Beverage Soft drinks', amount: '$32.20', currency: 'USD' },
                        { category: 'Car', date: '12.12.2023', description: 'Grocery Items and Beverage Soft drinks', amount: '$32.20', currency: 'USD' },
                        { category: 'Education', date: '12.12.2023', description: 'Grocery Items and Beverage Soft drinks', amount: '$32.20', currency: 'USD' },
                        { category: 'Entertainment', date: '12.12.2023', description: 'Grocery Items and Beverage Soft drinks', amount: '$32.20', currency: 'USD' },
                        { category: 'Beauty', date: '12.12.2023', description: 'Grocery Items and Beverage Soft drinks', amount: '$32.20', currency: 'USD' },
                        { category: 'Bills & Fees', date: '12.12.2023', description: 'Grocery Items and Beverage Soft drinks', amount: '$32.20', currency: 'USD' },
                        { category: 'Car', date: '12.12.2023', description: 'Grocery Items and Beverage Soft drinks', amount: '$32.20', currency: 'USD' },
                        { category: 'Education', date: '12.12.2023', description: 'Grocery Items and Beverage Soft drinks', amount: '$32.20', currency: 'USD' },
                        { category: 'Entertainment', date: '12.12.2023', description: 'Grocery Items and Beverage Soft drinks', amount: '$32.20', currency: 'USD' },
                      ].map((transaction, index) => (
                        <tr key={index}>
                          <td className={`p-2 border-b text-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>{transaction.category}</td>
                          <td className={`p-2 border-b text-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>{transaction.date}</td>
                          <td className={`p-2 border-b text-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>{transaction.description}</td>
                          <td className={`p-2 border-b text-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>{transaction.amount}</td>
                          <td className={`p-2 border-b text-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>{transaction.currency}</td>
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

export default Expenses;