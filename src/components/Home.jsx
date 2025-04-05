import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'; 

const Home = () => {
  const images = [
    'image card 1.png', 'image card 2.png', 'image card 3.png', 'image card 4.png', 'image card 5.png',
    'image card 6.png', 'image card 7.png', 'image card 8.png', 'image card 9.png', 'image card 10.png',
    'image card 11.png', 'image card 12.png', 'image card 13.png', 'image card 14.png', 'image card 15.png',
    'image card 16.png', 'image card 17.png', 'image card 18.png', 'image card 19.png', 'image card 20.png',
    'image card 21.png', 'image card 22.png', 'image card 23.png', 'image card 24.png', 'image card 25.png',
    'image card 26.png', 'image card 27.png', 'image card 28.png', 'image card 29.png', 'image card 30.png',
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <div className="bg-gray-100 font-sans">
      {/* Main Section */}
      <main id="home" className="container mx-auto py-8 px-4 flex flex-col md:flex-row items-start gap-6">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2C73] mb-4 leading-tight">
            Ekash – Personal Finance Admin Dashboard NextJS Template
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Personal Finance Management refers to the process of managing an individual’s or a household’s financial resources with the goal of achieving financial stability and meeting both short-term and long-term financial objectives.
          </p>
          <div className="flex flex-wrap gap-6 mb-6">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">45+</p>
              <p className="text-gray-600 text-sm">Pages</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">100+</p>
              <p className="text-gray-600 text-sm">Components</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">300+</p>
              <p className="text-gray-600 text-sm">Widgets</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#2F2CD8] hover:bg-[#2F2CD8]/90 text-white px-4 py-2 rounded text-sm sm:text-base">
              View Demo
            </button>
            <button className="border border-gray-300 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded text-sm sm:text-base">
              Buy
            </button>
          </div>
        </div>

        {/* Right Section: Scrolling Images */}
        <div className="w-full md:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden relative">
          <div className="grid grid-cols-2 gap-2 animate-scroll">
            {duplicatedImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Card ${index + 1}`}
                className="w-full h-[150px] sm:h-[180px] object-contain"
              />
            ))}
          </div>
        </div>
      </main>

      {/* Explore Section */}
      <section id="pages" className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm text-center text-gray-600 uppercase">Pages</h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2C73] text-center mb-8 leading-tight">
            Explore a Package Loaded with <br />
            <span className="text-[#1F2C73]">Interactive Live Demos</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Dashboard', src: 'dashboard.png', to: '/dashboard' },
              { name: 'Wallets', src: 'wallets.png', to: '/wallets' },
              { name: 'Budgets', src: 'budgets.png', to: '/budgets' },
              { name: 'Analytics', src: 'analytics.png', to: '/analytics' },
              { name: 'Expenses', src: 'expenses.png', to: '/expenses' },
              { name: 'Affiliates', src: 'affiliates.png', to: '/affiliates' },
              { name: 'Goals', src: 'goals.png', to: '/goals' },
              { name: 'Profile', src: 'profile.png', to: '/profile' },
              { name: 'SignUp', src: 'signup.png', to: '/signup' },
            ].map((item) => (
              <div key={item.name} className="text-center">
                <NavLink
                  to={item.to}
                  className="block bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-auto object-contain"
                  />
                </NavLink>
                <p className="pt-4 text-[#1F2C73] font-bold uppercase text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Widgets Section */}
      <section id="widgets" className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm text-center text-gray-600 uppercase">Widgets</h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2C73] text-center mb-8 leading-tight">
            Accelerate Your Development and Launch<br /> Rapidly with{' '}
            <span className="text-[#1F2C73]">Ekash</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {images.slice(0, 28).map((src, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={src}
                  alt={`Widget ${index + 1}`}
                  className="w-full h-32 sm:h-40 object-contain"
                />
              </div>
            ))}
            <div className="col-span-full flex flex-col sm:flex-row justify-center gap-4 mt-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-1/4">
                <img
                  src="image card 29.png"
                  alt="Widget 29"
                  className="w-full h-32 sm:h-40 object-contain"
                />
              </div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-1/4">
                <img
                  src="image card 30.png"
                  alt="Widget 30"
                  className="w-full h-32 sm:h-40 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm text-center text-gray-600 uppercase">Features</h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2C73] text-center mb-8 leading-tight">
            Extraordinary Features, Endless Flexibility
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'fa-wand-magic-sparkles', title: '2 Theme Colors', desc: 'We have included 6 pre-defined Theme Colors with Elegant Admin.' },
              { icon: 'fa-moon', title: 'Dark & Light Sidebar', desc: 'Included Dark and Light Sidebar for getting dark and feel.' },
              { icon: 'fa-file-alt', title: '45+ Page Templates', desc: 'Yes, we have 1 demos & 45+ Pages per demo to make it easier.' },
              { icon: 'fa-puzzle-piece', title: '150+ UI Components', desc: '150+ UI Components given with Ekash Admin Pack.' },
              { icon: 'fa-cog', title: 'Active Windows', desc: 'Go to settings to activate Windows.' },
              { icon: 'fa-bootstrap', title: 'Bootstrap 5x', desc: 'It’s been with Bootstrap 5 and full responsive layout.' },
              { icon: 'fa-gem', title: '2000+ Font Icons', desc: 'Lots of icon Fonts are included here in the package of Elegant Admin.' },
              { icon: 'fa-mobile-alt', title: 'Fully Responsive', desc: 'All the layout of Ekash Admin is Fully Responsive and widely tested.' },
              { icon: 'fa-code', title: 'SassBase CSS', desc: 'Our Css is written Sass Base to make your life easier.' },
              { icon: 'fa-arrows-alt', title: 'Easy to Customize', desc: 'Customize as we understand your pain.' },
              { icon: 'fa-chart-pie', title: 'Lots of Chart Options', desc: 'You have lots of variations for Charts.' },
              { icon: 'fa-table', title: 'Lots of Table Examples', desc: 'Data Tables we added them.' },
              { icon: 'fa-sync-alt', title: 'Regular Updates', desc: 'We are constantly updating our pack with new features.' },
              { icon: 'fa-book', title: 'Detailed Documentation', desc: 'We have made detailed documentation, so it will easy to use.' },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-md rounded-lg p-6 text-center"
              >
                <div className="text-blue-600 mb-4">
                  <i className={`fas ${feature.icon} text-xl sm:text-2xl`}></i>
                </div>
                <h3 className="text-gray-800 font-bold uppercase text-sm sm:text-base mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm text-center text-gray-600 uppercase">Reviews</h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2C73] text-center mb-8 leading-tight">
            Real Developers, Real Opinions – Read<br /> What Your Peers Have to Say!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'TPRx_Filo', category: 'Code Quality', review: 'Great support, functional, and well-designed site. Highly recommended!' },
              { name: 'Dijaron', category: 'Feature Availability', review: 'Great full-feature UI/UX, well-organized components. A+++++' },
              { name: 'Creativeorange3', category: 'Design Quality', review: 'Really professional product and great support. Highly recommended!' },
              { name: 'Mcluke123', category: 'Customer Support', review: 'Excellent experience! Would give 6 stars if possible.' },
              { name: 'Minshan Cui', category: 'Feature Availability', review: 'Excellent design quality and great flexibility.' },
              { name: 'Gsotirov', category: 'Customer Support', review: 'Amazing design, and very responsive customer support.' },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 relative"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center">
                    <i className="fas fa-user text-white text-lg"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-gray-800 font-bold uppercase text-sm">{review.name}</h3>
                    <p className="text-gray-600 text-xs">{review.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-yellow-400 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-sm"></i>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="support" className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm text-center text-gray-600 uppercase">Problem?</h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2C73] text-center mb-2 leading-tight">
            Don't Worry, I am waiting for your question
          </h2>
          <h2 className="text-xs sm:text-sm text-center text-gray-600 mb-8">Refreshing my inbox, waiting for your mail</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: 'fab fa-whatsapp', title: '+8801843666660', desc: 'Without sleeping time, I am available on WhatsApp. I recommend WhatsApp.', linkText: 'Send Message', href: '#' },
              { icon: 'fab fa-skype', title: 'sporsho9', desc: 'Without sleeping time, I am available on Skype. I also recommend Skype.', linkText: 'Add Skype', href: '#' },
              { icon: 'fas fa-envelope', title: 'imsaifun@gmail.com', desc: 'When you send me an email, I get a notification and quickly reply.', linkText: 'Send Email', href: '#' },
              { icon: 'fas fa-headset', title: 'Pre sale question', desc: 'Need more design or customization? Don’t worry about quality.', linkText: 'Hire Now', href: '#' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start"
              >
                <i className={`${item.icon} text-blue-600 text-2xl sm:text-3xl mb-2`}></i>
                <h3 className="text-base sm:text-lg font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-2">{item.desc}</p>
                <a href={item.href} className="text-blue-600 font-semibold text-sm sm:text-base">
                  {item.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;