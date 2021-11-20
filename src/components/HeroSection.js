import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
                <Link to='/' className='hero-cont-img'>
                <img src="https://i.imgur.com/uGZbRNj.png" border="0"/>
          </Link>
      <div className='hero-btns'>
        <a href="https://www.youtube.com/watch?v=1m6en0SQNFs" target="_blank"
          className='btns-1'
        ><img src="https://cryptozombies.io/images/start_btn.png"/>
        </a>
        <a
        href="https://www.youtube.com/watch?v=1rQWeXu33Ew" target="_blank"
          className='btns-2'
        ><img src="https://cryptozombies.io/images/learn_more_btn.png"/>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
