import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img src='assets/versado-logo.png' className='w-10 h-10 border-2 border-white rounded-full' alt="Versado Logo"/>
        
        <div className="text-white text-xl font-bold flex-grow text-center">
          Versado
        </div>
        
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="/login" className="text-white hover:text-gray-300">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
