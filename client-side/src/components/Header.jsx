import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className="bg-green-500">
         <div className="flex justify-between items-center mx-auto p-3 max-w-6xl">
            <Link to="/">
               <h1 className="font-bold">Auth App</h1>
            </Link>
            <button
               className="block md:hidden text-white"
               onClick={toggleMenu}
            >
            </button>
            <ul
               className={`flex flex-col md:flex-row items-center gap-4 absolute md:static bg-green-500 w-full md:w-auto left-0 md:left-auto p-3 md:p-0 transition-transform duration-300 ${isOpen ? 'top-12' : '-top-full'
                  }`}
            >
               <Link to="/" onClick={() => setIsOpen(false)}>
                  <li>Home</li>
               </Link>
               <Link to="/about" onClick={() => setIsOpen(false)}>
                  <li>About</li>
               </Link>
               <Link to="/sign-in" onClick={() => setIsOpen(false)}>
                  <li>Sign In</li>
               </Link>
            </ul>
         </div>
      </div>
   );
}

export default Header;
