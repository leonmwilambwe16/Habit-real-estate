import React, { useState } from 'react';
import { RiBuilding2Fill } from "react-icons/ri";
import { FaBell, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { useUserContext } from '../context/UserContext';
import '../component.styles/Navbar.scss';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loading } = useUserContext();
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className='navbar-container'>
      <div className="container-box">

        {/* Logo */}
        <div className="logo-box" onClick={closeMenu}>
          <RiBuilding2Fill />
          <p>Habit</p>
        </div>

        {/* Menu Links */}
        <div className={`menu-bar ${isOpen ? 'open' : ''}`}>
          <ul className="list-menu">
            <li><NavLink className='list-nav' to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink className='list-nav' to="/list" onClick={closeMenu}>Map</NavLink></li>
            <li><NavLink className='list-nav' to="/favorites" onClick={closeMenu}>Favorites</NavLink></li>
            <li><NavLink className='list-nav' to="/help" onClick={closeMenu}>Help</NavLink></li>
            <li><NavLink className='list-nav' to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </div>

        {/* Icons & Auth */}
        <div className="icon-box">
          <FaBell />
          {loading ? (
            <p>Loading...</p>
          ) : user ? (
            <div className='modal'>
              <p className="greeting">Hi, {user.firstName}</p>
              <UserButton />
            </div>
          ) : (
            
            <button onClick={()=>openSignIn()} 
            className='auth-btn'>Login</button>
          )}

          {/* ✅ Hamburger / Close Icon */}
          <div className="btn-open-close" onClick={toggleMenu}>
            {isOpen ? <IoMdClose /> : <FaBars />}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
