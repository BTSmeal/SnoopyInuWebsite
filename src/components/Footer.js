import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <a
             className='foot-links'
              href="https://t.me/Groudoninu"
              target='_blank'
              aria-label='Telegram'
            >
              <i class='fab fa-telegram fa-2x' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
