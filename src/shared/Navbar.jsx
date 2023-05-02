import React from "react";
import { AcademicCapIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container font-serif">
      <div className="flex items-center tracking-wider font-bold">
        <h1 className="text-3xl text-yellow-800">
          Chef
          <span className="text-red-700 text-3xl">Box</span>
          
        </h1>
        <p> <AcademicCapIcon className="h-8 w-8 text-red-700" /></p>
      </div>

      <ul className="flex space-x-4 text-lg items-center">
        <li><NavLink to="/" className={({isActive})=> isActive? 'active':'default'}>Home</NavLink></li>
        <li><NavLink to="/blog" className={({isActive})=> isActive? 'active':'default'}>Blog</NavLink></li>
        <li><NavLink to="/login" className={({isActive})=> isActive? 'active':'default'}>Login</NavLink></li>
        <li><NavLink to="/register" className={({isActive})=> isActive? 'active':'default'}>Register</NavLink></li>
      </ul>

      <div>
      <UserCircleIcon className="h-10 w-10 "/>
      </div>
    </div>
  );
};

export default Navbar;