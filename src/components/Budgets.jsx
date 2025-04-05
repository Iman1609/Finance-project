import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Chart from 'chart.js/auto';

const Budgets = () => {
  const spendingTrendChartRef = useRef(null);
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
    const spendingTrendCtx = spendingTrendChartRef.current.getContext('2d');
    const spendingTrendChart = new Chart(spendingTrendCtx, {
      type: 'line',
      data: {
        labels: ['4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan'],
        datasets: [{
          label: 'Spending Trend',
          data: [100, 150, 120, 180, 140, 160, 130, 170, 200, 180, 220, 300],
          borderColor: isDarkMode ? '#a5b4fc' : '#6366f1', 
          backgroundColor: isDarkMode ? 'rgba(165, 180, 252, 0.1)' : 'rgba(99, 102, 241, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: isDarkMode ? '#a5b4fc' : '#6366f1',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { 
            beginAtZero: true, 
            max: 350, 
            ticks: { stepSize: 50, color: isDarkMode ? '#d1d5db' : '#6b7280' }, 
            grid: { display: true, color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)' },
            title: { display: false }
          },
          x: { 
            grid: { display: false },
            ticks: { color: isDarkMode ? '#d1d5db' : '#6b7280' },
            title: { display: false }
          }
        },
        plugins: { 
          legend: { display: false },
          tooltip: { enabled: true }
        }
      }
    });

    return () => {
      spendingTrendChart.destroy();
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
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Budgets</h1>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome Ekash Finance Management</p>
            </div>
            <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              <NavLink to="/" className={isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}>Home</NavLink> <i class="fa fa-chevron-right" aria-hidden="true"></i> Budgets
            </div>
          </div>

          {/* Budgets Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="col-span-1 space-y-4">
              {/* Food & Dining */}
              <div className={`rounded-lg p-4 flex items-center ${isDarkMode ? 'bg-gray-800' : 'bg-blue-600 text-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-800'}`}>
                  <i className="fas fa-utensils text-xl"></i>
                </div>
                <div>
                  <p className="text-sm">Food & Dining</p>
                  <p className="text-xl font-bold">$500.00</p>
                </div>
              </div>
              {/* Shopping */}
              <div className={`rounded-lg p-4 flex items-center shadow-md group transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-blue-500' : 'bg-white hover:bg-blue-600 hover:text-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-gray-700 group-hover:bg-blue-600' : 'bg-gray-100 group-hover:bg-blue-800'}`}>
                  <i className={`fas fa-shopping-bag text-blue-600 text-xl ${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-white'}`}></i>
                </div>
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-white'}`}>Shopping</p>
                  <p className={`text-xl font-bold ${isDarkMode ? 'group-hover:text-white' : 'text-gray-800 group-hover:text-white'}`}>$500.00</p>
                </div>
              </div>
              {/* Transportation */}
              <div className={`rounded-lg p-4 flex items-center shadow-md group transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-blue-500' : 'bg-white hover:bg-blue-600 hover:text-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-gray-700 group-hover:bg-blue-600' : 'bg-gray-100 group-hover:bg-blue-800'}`}>
                  <i className={`fas fa-car text-blue-600 text-xl ${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-white'}`}></i>
                </div>
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-white'}`}>Transportation</p>
                  <p className={`text-xl font-bold ${isDarkMode ? 'group-hover:text-white' : 'text-gray-800 group-hover:text-white'}`}>$200.00</p>
                </div>
              </div>
              {/* Entertainment */}
              <div className={`rounded-lg p-4 flex items-center shadow-md group transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-blue-500' : 'bg-white hover:bg-blue-600 hover:text-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-gray-700 group-hover:bg-blue-600' : 'bg-gray-100 group-hover:bg-blue-800'}`}>
                  <i className={`fas fa-film text-blue-600 text-xl ${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-white'}`}></i>
                </div>
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-white'}`}>Entertainment</p>
                  <p className={`text-xl font-bold ${isDarkMode ? 'group-hover:text-white' : 'text-gray-800 group-hover:text-white'}`}>$200.00</p>
                </div>
              </div>
              {/* Add New Budget */}
              <button className={`w-full text-sm font-semibold py-2 rounded-lg ${isDarkMode ? 'text-blue-400 hover:bg-gray-700' : 'text-blue-600 hover:bg-gray-100'}`}>
                + Add new budget
              </button>
            </div>

            {/* Right Section */}
            <div className="col-span-1 lg:col-span-3 space-y-6">
              {/* Budget Details Card */}
              <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold mr-4">Food & Dining</h3>
                    <span className={`text-sm px-3 py-1 rounded-full ${isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>Overtime</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-3xl font-bold">$650.75</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Spent</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">$850.00</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Budget</p>
                  </div>
                </div>
                <div className={`w-full h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '76%' }}></div>
                </div>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-2>24%</p>
                <div className="flex justify-between mt-4">
                  <div>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Last Month</p>
                    <p className="text-xl font-bold">$820.50</p>
                  </div>
                  <div>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Expenses</p>
                    <p className="text-xl font-bold">$650.75</p>
                  </div>
                  <div>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Savings</p>
                    <p className="text-xl font-bold">$199.25</p>
                  </div>
                </div>
              </div>

              {/* Monthly Spending Trend */}
              <div className={`rounded-lg shadow-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-bold mb-4">Monthly Spending Trend</h3>
                <div className="w-full h-[300px]">
                  <canvas ref={spendingTrendChartRef}></canvas>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Budgets;