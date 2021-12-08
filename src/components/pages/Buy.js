import React from 'react'

const Buy = () => {
  return (
<>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
  <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-3xl font-medium text-center title-font text-gray-900 mb-4">Relax and HoLd your $SNOOPY</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl">Buy Now! </p>
    </div>
    <div classname="buy-main-cont">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/2">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-center" src="Buybutton.jpeg" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-lg title-font font-medium text-gray-400 mb-1">Wallet</h2>
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Download Metamask</h1>
            <p class="leading-relaxed mb-3">Visit Metamask.io and Download the Metamask Google Chrome extension to set up a Virtual Wallet. </p>
            <div class="flex items-center flex-wrap ">
            <span style={{color: "#abf4ff"}} >
              <a class="inline-flex items-center md:mb-2 lg:mb-0" href="https://metamask.io/" target="_blank">Learn More
              <span style={{color: "#abf4ff", fontSize: "1.5rem", paddingLeft:"20px"}}>
           <i class="far fa-paw"></i>
           </span>
              </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/2">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-center" src="Buybutton2.jpeg" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-lg title-font font-medium text-gray-400 mb-1">Uniswap</h2>
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Receive $SNOOPY</h1>
            <p class="leading-relaxed mb-3">  • Visit Uniswap.org and select Launch App, Connect your Metamask Wallet. <br/>  • Set Slippage to 10% enter the amount of ETH you want to swap into $SNOOPY. Make sure you enter the appropriate contract address into the token selection. <br/>   • Press "Swap" and receive your $SNOOPY Tokens.  </p>
            <div class="flex items-center flex-wrap">
            <span style={{color: "#abf4ff"}} >
              <a class="inline-flex items-center md:mb-2 lg:mb-0" href="https://uniswap.org/" target="_blank">Learn More
              <span style={{color: "#abf4ff", fontSize: "1.5rem", paddingLeft:"20px"}}>
           <i class="far fa-paw"></i>
           </span>
              </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
</section>
</>
  )
}

export default Buy
