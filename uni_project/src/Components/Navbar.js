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
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            UofA Hangout
            <i class='fab fa-typo3' />
          </Link>
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
                to='/Libraries'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Library
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/food'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Food
              </Link>
            </li>

            <li>
              <Link
                to='/Campus_Events'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
               Campus Events
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Campus Events</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;