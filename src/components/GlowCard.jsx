import React, { useRef, useEffect } from 'react';

const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

const GlowCard = ({ card, children }) => {
  const cardRef = useRef(null);

  // Simulate a moving "fake mouse" on mobile to animate the glow
  useEffect(() => {
    if (!isMobile) return;
    const card = cardRef.current;
    if (!card) return;
    let frame;
    let angle = 0;
    const animate = () => {
      angle = (angle + 2) % 360;
      // Simulate the mouse moving around the border by updating the --start variable
      card.style.setProperty('--start', angle + 60);
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty('--start', angle + 60);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={isMobile ? undefined : handleMouseMove}
      className='card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column'
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
