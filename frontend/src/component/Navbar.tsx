import React, { useState } from 'react';
import { RiBuilding2Fill } from "react-icons/ri";
import { FaBell, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import {useClerk,UserButton,useUser} from '@clerk/clerk-react';
import { useUserContext } from '../context/UserContext';
import '../component.styles/Navbar.scss';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loading } = useUserContext();
  const {openSignIn} = useClerk()
  const {user} = useUser()


  const fallbackImage = "https://via.placeholder.com/40";

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav className='navbar-container'>
      <div className="container-box">

        {/* Logo Section */}
        <div className="logo-box">
          <span><RiBuilding2Fill /></span>
          <p>Habit</p>
        </div>

        {/* Menu Links */}
        <div className={`menu-bar ${isOpen ? 'open' : ''}`}>
          <ul className="list-menu">
            <li><NavLink className='list-nav' to="/">Home</NavLink></li>
            <li><NavLink className='list-nav' to="/list">Map</NavLink></li>
            <li><NavLink className='list-nav' to="/favorites">Favorites</NavLink></li>
            <li><NavLink className='list-nav' to="/help">Help</NavLink></li>
            <li><NavLink className='list-nav' to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* Right Icons / Auth */}
        <div className="icon-box">
          <span><FaBell /></span>

          {loading ? (
            <p style={{ color: 'white' }}>Loading...</p>
          ) : (
            <>
            {user?  <div className='modal'>
           
                       <p className="greeting">Hi, {user.firstName} {user.lastName}</p>

                      <UserButton/>

                    </div>
              :<button onClick={e => openSignIn()} className='auth-btn '>
                login
              </button>}
              
            </>
          )}
        

          {/* Mobile Menu Toggle */}
          <div className="btn-open-close">
            {isOpen
              ? <IoMdClose onClick={toggleMenu} />
              : <FaBars onClick={toggleMenu} />}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
