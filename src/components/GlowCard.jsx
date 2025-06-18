import React, { useRef } from 'react';

const GlowCard = ({ card, children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    // Optional: Add glow effect logic here using e.clientX, e.clientY
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className='card card-border timeline-card rounded-xl p-10'
    >
      <div className='glow'></div>
      <div className='flex items-center gap-1 mb-5'>
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" key={i} alt="star" className='size-5' />
        ))}
      </div>
      <div className='mb-5'>
        <p className='text-white-50 text-lg'>
          {card.review}
        </p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
