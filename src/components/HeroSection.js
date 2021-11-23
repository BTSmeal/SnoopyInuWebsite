import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <>
    <section class="text-gray-600 bg-gray-100 body-font hero-container">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center hero-main-cont">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-7 md:mb-0">
      <Link to='/' > <img class="object-cover object-center rounded" alt="hero" src="Gourdon.png"/>
      </Link>
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center main-hero-bute">
     <div className="hero-head1">
        <h1 class="title-font sm:text-4xl text-3xl mb-1 font-medium text-gray-700 text-center">  <img src="383.png" className="pokemon-ball"/> GROUDON </h1> <p class="mb-2 leading-relaxed text-center">Continent Pokemon</p> </div>
        <div class="flex lg:flex-row md:flex-col mt-10  hero-size-btns">
      <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hexagon" viewBox="0 0 16 16">
        <path d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/>
          </svg>
            <span class="ml-4 flex items-start flex-col leading-none">
              <span class="title-font font-medium">HT  -  11'06''</span>
            </span>
          </button>
          <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hexagon" viewBox="0 0 16 16">
  <path d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/>
</svg>
            <span class="ml-4 flex items-start flex-col leading-none">
              <span class="title-font font-medium">WT  -  2094</span>
            </span>
          </button>
          </div>
          <Link to='/buy' > 
          <button class="flex lg:flex-row md:flex-col mt-10  bg-gray-100 inline-flex px-36 py-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none hero-cta-btn"
        ><span class="ml-4 flex items-start flex-col leading-none">
        <span class="title-font font-medium text-center flex-row">Buy Now!</span>
      </span>
        </button>
        </Link>
      </div>
    </div>
    <div class="hero-head2 mt-3">Groudon is said to be the personification of the land itself. Legends tell of its many clashes against Kyogre, as each sought to gain the power of nature. Through Primal Reversion and with nature's full power, it will take back its true form. It can cause magma to erupt and expand the landmass of the world.</div> 
  </section>
  </>
  );
}

export default HeroSection;