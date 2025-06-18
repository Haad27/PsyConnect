import React from 'react';
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from '../components/HeroModels/HeroExperience';
import AnimatedCounter from '../components/AnimatedCounter';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const Hero = () => {
  useGSAP(() => {
    gsap.from('.hero-text h1', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.inOut"
    });
  });

  // Scroll function for the scroll indicator
  const handleScrollToCounter = (e) => {
    e.preventDefault();
    const target = document.getElementById("counter");

    if (target) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-0">
        <img src="/images/bg.png" alt="background" />
      </div>

      {/* Hero Layout */}
      <div className="hero-layout relative z-10">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">

            {/* Animated Text */}
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span key={word.text} className="flex items-center gap-2">
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 p-1 rounded-full bg-white"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            {/* Subtext */}
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Adrian, a developer based in Croatia.
            </p>

            {/* CTA Button */}
            <Button
              id="button"
              className="md:w-80 md:h-16 w-60 h-12"
              text="Book Session"
            />
          </div>

          {/* Scroll Indicator */}
          <div className='absolute bottom-10 w-full flex justify-center items-center z-20'>
            <a onClick={handleScrollToCounter} className="cursor-pointer">
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
                <motion.div
                  animate={{ y: [0, 24, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                  className='w-3 h-3 rounded-full bg-white mb-1'
                />
              </div>
            </a>
          </div>
        </header>

        {/* 3D Hero Section */}
        <figure>
          <div className='hero-3d-layout'>
            <HeroExperience />
          </div>
        </figure>
      </div>

      {/* Counter Section */}
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
