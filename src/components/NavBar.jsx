import React, { useEffect, useState } from 'react';
import { navLinks } from '../constants';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled); // fix here too: use the actual value
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // ✅ don't close the function here!

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className='inner'>
        <a className='logo' href="#hero">
          Haad | ASPYC
        </a>
        <nav className='desktop'>
          <ul>
            {
              navLinks.map(({ link, name }) => (
                <li key={name} className='group'>
                  <a href={link}>
                    <span>{name}</span>
                    <span className='underline' />
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>

        <a href='#contact' className='contact-btn-group'>
          <div className='inner'>
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
