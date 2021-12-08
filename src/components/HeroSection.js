import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <>
    <div className="header-main">
  <section class="text-gray-600 body-font">
    <div className="hero-container">
  <div class="container mx-auto flex px-5 pb-12 pt-0 md:flex-row flex-col mx-44 items-center">
  <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center md:ml-20 text-center">
      <img src="snoopytext.png" class="md:items-center pl-14 pb-6 hero-text-image" />
      <div class="flex justify-center">
      <a href="https://app.uniswap.org/#/swap" target="_blank">  <button class="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-pink-400 hover:text-white rounded text-lg items-center hero-btnns">Buy on Uniswap <img class="w-8 h-8 items-center ml-3" alt="hero" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Uniswap_Logo.svg/1026px-Uniswap_Logo.svg.png" /></button></a>
       <a href="https://t.me/SnooopyInu" target="_blank"> <button class="ml-4 inline-flex text-gray-700 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 hover:text-white rounded text-lg items-center hero-btnns">Join Telegram <img class="w-5 h-5 items-center ml-3" alt="hero" src="https://fund-mining.com/styles/images/telegram.svg" /></button> </a>
      </div>
    </div>
  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  md:mb-0 md:mr-52 mt-14">
      <img class="hero-image rounded-full " alt="hero" src="Logogreen.jpeg" />
    </div>
  </div>
  <div className="hero-para">Snoopy Inu's personality is the perfect representation of the community it is tryig to create in the crypto and Defi space: Loyal, Funny, Imaginative, and good-natured. </div>
  </div>
</section>
</div>
  </>
  );
}

export default HeroSection;