import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const balanceTrendsChartRef = useRef(null);
  const incomeVsExpensesChartRef = useRef(null);
  const weeklyExpensesChartRef = useRef(null);
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
    // Balance Trends Chart
    const balanceCtx = balanceTrendsChartRef.current.getContext('2d');
    const balanceChart = new Chart(balanceCtx, {
      type: 'line',
      data: {
        labels: ['4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan'],
        datasets: [{
          label: 'Balance Trends',
          data: [0, 50, 100, 150, 100, 150, 100, 50, 100, 150, 200, 300],
          borderColor: '#1a73e8',
          backgroundColor: 'rgba(26, 115, 232, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: '#1a73e8',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, max: 350, ticks: { stepSize: 50 }, grid: { display: false } },
          x: { grid: { display: false } }
        },
        plugins: { legend: { display: false } }
      }
    });

    // Monthly Income vs Expenses Chart
    const incomeVsExpensesCtx = incomeVsExpensesChartRef.current.getContext('2d');
    const incomeVsExpensesChart = new Chart(incomeVsExpensesCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [
          { label: 'Expenses', data: [4, 4, 4, 3, 2, 4, 4, 6, 7, 3], backgroundColor: '#42a5f5', borderWidth: 0 },
          { label: 'Income', data: [5, 5, 5, 4, 3, 5, 5, 5, 7, 4], backgroundColor: '#1a73e8', borderWidth: 0 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, max: 8, ticks: { stepSize: 1 }, grid: { display: false } },
          x: { grid: { display: false } }
        },
        plugins: { legend: { display: false } }
      }
    });

    // Weekly Expenses Chart
    const weeklyExpensesCtx = weeklyExpensesChartRef.current.getContext('2d');
    const weeklyExpensesChart = new Chart(weeklyExpensesCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          { label: 'Category 1', data: [10, 15, 10, 5, 10, 15, 20, 10, 5, 10, 15, 10, 5, 10, 15, 10, 5, 10], backgroundColor: '#ff6f61', borderWidth: 0 },
          { label: 'Category 2', data: [10, 15, 10, 5, 10, 15, 20, 10, 5, 10, 15, 10, 5, 10, 15, 10, 5, 10], backgroundColor: '#ab47bc', borderWidth: 0 },
          { label: 'Category 3', data: [10, 15, 10, 5, 10, 15, 20, 10, 5, 10, 15, 10, 5, 10, 15, 10, 5, 10], backgroundColor: '#42a5f5', borderWidth: 0 },
          { label: 'Category 4', data: [10, 15, 10, 5, 10, 15, 20, 10, 5, 10, 15, 10, 5, 10, 15, 10, 5, 10], backgroundColor: '#1a73e8', borderWidth: 0 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { stacked: true, grid: { display: false } },
          y: { stacked: true, beginAtZero: true, max: 80, ticks: { stepSize: 10 }, grid: { display: false } }
        },
        plugins: { legend: { display: false } }
      }
    });

    return () => {
      balanceChart.destroy();
      incomeVsExpensesChart.destroy();
      weeklyExpensesChart.destroy();
    };
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

        {/* Main Dashboard Section */}
        <main className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-[#1F2C73]">Dashboard</h1>
              <p className={`mt-2 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Welcome Ekash Finance Management</p>
            </div>
            <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              <NavLink to="/" className={isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}>Home</NavLink> <i class="fa fa-chevron-right" aria-hidden="true"></i>  Dashboard
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'Total Balance', amount: '$432,568', change: '3.12%', last: '$28,940', isPositive: true },
              { title: 'Total Period Change', amount: '$245,860', change: '1.98%', last: '21,230', isPositive: true },
              { title: 'Total Period Expenses', amount: '$2,530', change: '4.78%', last: '$26,340', isPositive: false },
              { title: 'Total Period Income', amount: '$24,560', change: '2.84%', last: '$23,890', isPositive: true },
            ].map((stat) => (
              <div key={stat.title} className={`rounded-lg shadow-md p-5 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{stat.title}</h3>
                <p className="text-3xl font-bold">{stat.amount}</p>
                <p className={stat.isPositive ? 'text-green-500' : 'text-red-500'}>
                  <i className={`fas fa-arrow-${stat.isPositive ? 'up' : 'down'}`}></i> {stat.change}{' '}
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Last month {stat.last}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Balance Trends and Monthly Expenses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className={`rounded-lg shadow-md p-5 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Balance Trends</h3>
                <p className="text-green-500">
                  <i className="fas fa-arrow-up"></i> 12.25% <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Last Month</span>
                </p>
              </div>
              <p className="text-3xl font-bold mb-4">$221,478</p>
              <div className="w-full h-[180px]">
                <canvas ref={balanceTrendsChartRef}></canvas>
              </div>
            </div>
            <div className={`rounded-lg shadow-md p-5 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Monthly Expenses Breakdown</h3>
              <div className="flex w-full h-2.5 rounded-full overflow-hidden mb-5">
                <div className="h-full bg-[#ff6f61]" style={{ width: '38%' }}></div>
                <div className="h-full bg-[#ffa726]" style={{ width: '22%' }}></div>
                <div className="h-full bg-[#ffca28]" style={{ width: '12%' }}></div>
                <div className="h-full bg-[#66bb6a]" style={{ width: '9%' }}></div>
                <div className="h-full bg-[#26a69a]" style={{ width: '8%' }}></div>
                <div className="h-full bg-[#42a5f5]" style={{ width: '6%' }}></div>
                <div className="h-full bg-[#8d6e63]" style={{ width: '5%' }}></div>
              </div>
              {[
                { name: 'Food', amount: '$1,200', percent: '38%', color: '#ff6f61' },
                { name: 'Transport', amount: '$700', percent: '22%', color: '#ffa726' },
                { name: 'Healthcare', amount: '$400', percent: '12%', color: '#ffca28' },
                { name: 'Education', amount: '$300', percent: '9%', color: '#66bb6a' },
                { name: 'Clothes', amount: '$250', percent: '8%', color: '#26a69a' },
                { name: 'Pets', amount: '$180', percent: '6%', color: '#42a5f5' },
                { name: 'Entertainment', amount: '$150', percent: '5%', color: '#8d6e63' },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-center mb-2.5">
                  <div>
                    <span className="w-2.5 h-2.5 rounded-full inline-block mr-2" style={{ backgroundColor: item.color }}></span>
                    <span>{item.name}</span>
                  </div>
                  <div>
                    <span className="font-bold">{item.amount}</span>
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>{' '}{item.percent}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Budgets and Income vs Expenses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className={`rounded-lg shadow-md p-5 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Monthly Budgets</h3>
              {[
                { name: 'Grocery Stores', icon: 'fa-shopping-cart', color: '#66bb6a', spent: 75, total: 100 },
                { name: 'Transportation', icon: 'fa-car', color: '#42a5f5', spent: 25, total: 100 },
                { name: 'Pets', icon: 'fa-paw', color: '#42a5f5', spent: 50, total: 100 },
                { name: 'Education', icon: 'fa-graduation-cap', color: '#ab47bc', spent: 45, total: 100 },
                { name: 'Clothes', icon: 'fa-tshirt', color: '#ab47bc', spent: 35, total: 100 },
              ].map((budget) => (
                <div key={budget.name} className="flex items-center mb-3.5">
                  <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center mr-2.5" style={{ backgroundColor: budget.color }}>
                    <i className={`fas ${budget.icon} text-white text-sm`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span>{budget.name}</span>
                      <span>{budget.spent} / {budget.total}</span>
                    </div>
                    <div className={`w-full h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div className="h-full rounded-full" style={{ width: `${(budget.spent / budget.total) * 100}%`, backgroundColor: budget.color }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`rounded-lg shadow-md p-5 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Monthly Income vs Expenses</h3>
              <div className="w-full h-[180px]">
                <canvas ref={incomeVsExpensesChartRef}></canvas>
              </div>
            </div>
          </div>

          {/* Weekly Expenses and Payments History */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className={`rounded-lg shadow-md p-5 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Weekly Expenses</h3>
              <div className="w-full h-[180px]">
                <canvas ref={weeklyExpensesChartRef}></canvas>
              </div>
            </div>
            <div className={`rounded-lg shadow-md p-5 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Payments History</h3>
                <NavLink to="#" className={isDarkMode ? 'text-blue-400 text-sm' : 'text-blue-600 text-sm'}>See more</NavLink>
              </div>
              {[
                { name: 'Electricity', date: '5 January 2024', amount: '+450.00', status: 'Paid', statusColor: 'bg-green-500' },
                { name: 'Internet', date: '5 January 2024', amount: '+450.00', status: 'Due', statusColor: 'bg-yellow-500' },
                { name: 'Apple Music', date: '5 January 2024', amount: '+450.00', status: 'Cancel', statusColor: 'bg-red-500' },
                { name: 'Groceries', date: '5 January 2024', amount: '+450.00', status: 'Due', statusColor: 'bg-yellow-500' },
              ].map((payment) => (
                <div key={payment.name} className="flex justify-between items-center mb-3.5">
                  <div>
                    <p className="font-bold">{payment.name}</p>
                    <p className={isDarkMode ? 'text-gray-400 text-sm' : 'text-gray-500 text-sm'}>{payment.date}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold mr-2">{payment.amount}</p>
                    <span className={`${payment.statusColor} text-white px-2.5 py-1 rounded text-xs`}>{payment.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Saving Goals and Transaction History */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className={`rounded-lg shadow-md p-5 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Saving Goals</h3>
              <div className="flex flex-wrap justify-around">
                {[
                  { name: 'Vacation', progress: 80, color: '#ff6f61' },
                  { name: 'Gift', progress: 90, color: '#66bb6a' },
                  { name: 'New Car', progress: 95, color: '#42a5f5' },
                  { name: 'Laptop', progress: 99, color: '#ffca28' },
                ].map((goal) => (
                  <div key={goal.name} className="text-center">
                    <div className="relative w-20 h-20 m-2.5">
                      <svg width="80" height="80" className="transform -rotate-90">
                        <circle cx="40" cy="40" r="36" className={`fill-none stroke-[8] ${isDarkMode ? 'stroke-gray-700' : 'stroke-gray-200'}`} />
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          className="fill-none stroke-[8] stroke-linecap-round transition-all duration-500"
                          style={{
                            stroke: goal.color,
                            strokeDasharray: 226,
                            strokeDashoffset: 226 - (goal.progress / 100) * 226
                          }}
                        />
                      </svg>
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base font-bold">
                        {goal.progress}%
                      </span>
                    </div>
                    <p className={isDarkMode ? 'text-gray-400 mt-2' : 'text-gray-600 mt-2'}>{goal.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`rounded-lg shadow-md p-5 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Transaction History</h3>
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
                    { category: 'Beauty', icon: 'fa-spa', color: '#66bb6a', date: '12.12.2023', desc: 'Haircut & Skincare Products', amount: '-45.00', currency: 'USD' },
                    { category: 'Bills & Fees', icon: 'fa-file-invoice', color: '#42a5f5', date: '12.12.2023', desc: 'Monthly Internet Subscription', amount: '-60.00', currency: 'USD' },
                    { category: 'Car', icon: 'fa-car', color: '#26a69a', date: '12.12.2023', desc: 'Fuel & Car Wash', amount: '-30.50', currency: 'USD' },
                    { category: 'Education', icon: 'fa-graduation-cap', color: '#ab47bc', date: '12.12.2023', desc: 'Online Course Subscription', amount: '-26.00', currency: 'USD' },
                    { category: 'Entertainment', icon: 'fa-film', color: '#1a73e8', date: '12.12.2023', desc: 'Movie & Streaming Service', amount: '-12.99', currency: 'USD' },
                  ].map((trans) => (
                    <tr key={trans.desc}>
                      <td className={`p-2 border-b text-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <span className="w-[30px] h-[30px] rounded-full inline-flex items-center justify-center mr-2" style={{ backgroundColor: trans.color }}>
                          <i className={`fas ${trans.icon} text-white text-sm`}></i>
                        </span>
                        <span>{trans.category}</span>
                      </td>
                      <td className={`p-2 border-b text-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>{trans.date}</td>
                      <td className={`p-2 border-b text-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>{trans.desc}</td>
                      <td className={`p-2 border-b text-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>{trans.amount}</td>
                      <td className={`p-2 border-b text-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>{trans.currency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;