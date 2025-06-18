import React from 'react';
import { counterItems } from '../constants';
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  return (
    <div id="counter" className="px-8 xl:mt-0 mt-32">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-6 md:p-10 flex flex-col justify-center"
          >
            <div className="text-white text-3xl md:text-5xl font-bold mb-2">
              <CountUp end={item.value} suffix={item.suffix} duration={2} />
            </div>
            <p className="text-white text-sm md:text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
