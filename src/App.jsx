import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Signup from './components/SignUp';
import Affiliates from './components/Affiliates';
import Expenses from './components/Expenses';
import Goals from './components/Goals';
import Profile from './components/Profile';
import Wallets from './components/Wallets';
import Analytics from './components/Analytics';
import Budgets from './components/Budgets';

// Create a wrapper component to use hooks inside Router
const AppContent = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Pages', href: '#pages' },
    { name: 'Widgets', href: '#widgets' },
    { name: 'Features', href: '#features' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Support', href: '#support' },
  ];

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
      {/* Top Bar - Fixed on All Pages */}
      <div className="bg-[#262626] text-white py-2 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <img src="logo 1.png" alt="Logo" className="h-6" />
          <button className="bg-[#7AA93C] hover:bg-[#7AA93C] text-white px-4 py-1 rounded">
            Buy Now
          </button>
        </div>
      </div>

      {/* Navigation - Only on Homepage */}
      {location.pathname === '/' && (
        <header className="bg-white shadow py-4 mt-12">
          <div className="container mx-auto flex justify-between items-center px-4">
            <img src="logo 2.png" alt="Logo" className="h-8" />
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `hover:text-blue-600 ${isActive ? 'text-[#1F2C73] font-bold' : ''}`
                  }
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default NavLink behavior
                    const targetId = item.href.substring(1); // Remove the '#' to get the ID
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
            <button className="bg-[#2F2CD8] hover:bg-[#2F2CD8] text-white px-4 py-2 rounded">
              Buy
            </button>
          </div>
        </header>
      )}

      {/* Routes - Main Content */}
      <main className="flex-grow mt-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/affiliates" element={<Affiliates />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallets" element={<Wallets />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/budgets" element={<Budgets />} />
        </Routes>
      </main>

      {/* Footer - Always Visible */}
      <footer className="py-6 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-gray-600 text-sm">
            © Copyright <span className="font-bold text-blue-600">EKASH</span> | ALL Rights Reserved
          </p>
          <div className="flex space-x-2">
            {['facebook-f', 'twitter', 'linkedin-in', 'youtube'].map((icon) => (
              <a key={icon} href="#" className="text-gray-600">
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;