import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>

<section class="text-gray-600 body-font tokenomics-main">
  <div class="container px-5 py-24 mx-auto ">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">TOKENOMICS</h1>
    </div>
    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
        <span style={{color: "#abf4ff", fontSize: "2rem", paddingRight:"20px"}}>
           <i class="far fa-paw"></i>
           </span>
          <span class="title-font font-medium">13% Buy/Sell Tax</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
        <span style={{color: "#abf4ff", fontSize: "2rem", paddingRight:"20px"}}>
           <i class="far fa-paw"></i>
           </span>
          <span class="title-font font-medium">100,000,000,000,000 $SNOOPY Tokens</span>
        </div>
        </div>
 </div>
    <button class="flex mx-auto mt-16 px-12 py-3 text-black rounded cta-button"> <Link
                to='/buy'
              >
                Buy Now!!
              </Link></button>
  </div>
</section>
    </>
  )
}

export default Services
