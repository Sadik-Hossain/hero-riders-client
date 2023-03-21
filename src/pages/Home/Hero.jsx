import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="hero1 min-h-screen bg-top bg-zinc-800 mt-2"
        style={{
          backgroundImage: `url("/blobanimation.svg")`,
        }}
      >
        <div className="hero-overlay1 bg-black/25   "></div>
      </div>
    </>
  );
};

export default Hero;
