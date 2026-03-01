import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-8 md:pt-12 lg:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand Section */}
          <div className="space-y-3 md:space-y-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Job Hunt</h2>
              <p className="text-xs md:text-sm text-gray-400">Discover your dream job and advance your career with us.</p>
            </div>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-[#6A38C2] rounded-full p-2 transition duration-300" aria-label="Facebook">
                <svg className="w-4 md:w-5 h-4 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" /></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-[#6A38C2] rounded-full p-2 transition duration-300" aria-label="Twitter">
                <svg className="w-4 md:w-5 h-4 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" /></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-[#6A38C2] rounded-full p-2 transition duration-300" aria-label="LinkedIn">
                <svg className="w-4 md:w-5 h-4 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" /></svg>
              </a>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">For Job Seekers</h3>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li><a href="#" className="text-gray-400 hover:text-[#6A38C2] transition">Browse Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#6A38C2] transition">Companies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#6A38C2] transition">Career Advice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#6A38C2] transition">Salary Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#6A38C2] transition">My Applications</a></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">For Employers</h3>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li><a href="#" className="text-gray-400 hover:text-[#6A38C2] transition">Post a Job</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#6A38C2] transition">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#6A38C2] transition">Recruiting Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#6A38C2] transition">Company Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#6A38C2] transition">Support</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">Company</h3>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li><a href="#" className="text-gray-400 hover:text-[#6A38C2] transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#6A38C2] transition">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#6A38C2] transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#6A38C2] transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#6A38C2] transition">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#6A38C2] to-[#5a2fa6] rounded-lg p-6 md:p-8 mb-8 md:mb-12">
          <div className="max-w-2xl">
            <h3 className="text-white text-lg md:text-xl font-bold mb-1 md:mb-2">Get the latest job opportunities</h3>
            <p className="text-purple-100 text-xs md:text-sm mb-3 md:mb-4">Subscribe to our newsletter to get job alerts and career updates directly to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-lg text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition text-xs md:text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">© 2024 Job Hunt. All rights reserved.</p>
          <div className="flex space-x-4 md:space-x-6 text-xs md:text-sm text-gray-400">
            <a href="#" className="hover:text-[#6A38C2] transition">Privacy</a>
            <a href="#" className="hover:text-[#6A38C2] transition">Terms</a>
            <a href="#" className="hover:text-[#6A38C2] transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;