import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <Link class='website-rights' to='/disclaimer'>Disclaimer</Link>
          <div class='social-icons'>
            <Link
             className='nav-links'
              to='/'
              target='_blank'
              aria-label='Telegram'
            >
              <i class='fab fa-telegram fa-2x' />
            </Link>
            <Link
             className='nav-links'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube fa-2x' />
            </Link>
            <Link
              className='nav-links'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter fa-2x' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
