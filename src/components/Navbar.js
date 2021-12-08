import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <div className="nav-logos">
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img class=" object-center rounded-full w-12 h-12" alt="hero" src="snoopylogo.png"/>  
          </Link>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/tokenomics'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tokenomics
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/roadmap'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Roadmap
              </Link>
            </li>

            <li>
              <Link
                to='/buy'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Buy
              </Link>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;