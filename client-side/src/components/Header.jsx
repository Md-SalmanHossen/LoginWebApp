import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Header() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className="bg-green-500">
         <div className="flex justify-between items-center mx-auto p-3 max-w-6xl">
            <Link to="/">
               <h1 className="font-bold text-white">Auth App</h1>
            </Link>
            <button
               className="block md:hidden text-white focus:outline-none"
               onClick={toggleMenu}
            >
               {isOpen ? (
                  <XMarkIcon className="w-6 h-6" />
               ) : (
                  <Bars3Icon className="w-6 h-6" />
               )}
            </button>
            <ul
               className={`flex flex-col md:flex-row items-center gap-4 absolute md:static bg-green-500 w-full md:w-auto left-0 md:left-auto p-3 md:p-0 transition-transform duration-300 ${isOpen ? 'top-12' : '-top-full'
                  }`}
            >
               <li key="home">
                  <Link to="/" onClick={() => setIsOpen(false)}>
                     Home
                  </Link>
               </li>
               <li key="about">
                  <Link to="/about" onClick={() => setIsOpen(false)}>
                     About
                  </Link>
               </li>
               <li key="sign-in">
                  <Link to="/sign-in" onClick={() => setIsOpen(false)}>
                     Sign In
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Header;
