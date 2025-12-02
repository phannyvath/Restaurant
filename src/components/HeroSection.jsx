import React from "react";
import video from "../assets/hero.mp4";
import logo from "../assets/logoMori.png";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
  {/* Background Video */}
  <div className="absolute inset-0 -z-20 h-full w-full">
    <video
      src={video}
      className="h-full w-full object-cover"
      muted
      autoPlay
      loop
      playsInline
    />
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/30 to-black"></div>

  {/* CENTER CONTENT */}
  <div className="relative z-20 flex flex-col items-center justify-center text-white">
    
    {/* BIG CENTER LOGO */}
   <img
  src={logo}
  alt="MORI"
  className="
    mx-auto 
    drop-shadow-[0_15px_40px_rgba(0,0,0,0.7)]

    w-72          /* BIG on mobile */
    sm:w-80       /* slightly bigger */
    md:w-[28rem]  /* large tablets */
    lg:w-[34rem]  /* large desktop */
    xl:w-[40rem]  /* ultra wide */
  "
/>

    {/* <p className="mt-6 text-lg sm:text-xl md:text-2xl font-light tracking-wide">
      Coffee & Tea
    </p> */}
  </div>
</section>

  );
};

export default HeroSection;
