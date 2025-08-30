
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    setIsAuthenticated(!!token);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto py-3 px-4">
        <Link href={isAuthenticated ? '/product' : '/'} className="text-white font-bold text-xl tracking-wide hover:text-yellow-200 transition-colors">
          Smart Accessories
        </Link>

        <div className="flex items-center bg-transparent rounded-full px-3 py-1 sm:w-10">
          <input
            type="search"
            placeholder="Search..."
            className="outline-pink-500 px-2 py-1 text-gray-700 bg-transparent"
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400 ml-2">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
          </svg>
        </div>

        <Link href="/:username" className="flex items-center gap-2 text-white hover:text-yellow-200 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <circle cx="12" cy="8" r="4" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-4 4-7 8-7s8 3 8 7" />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;