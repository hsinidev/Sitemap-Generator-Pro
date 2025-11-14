import React, { useRef, useEffect } from 'react';

const GalaxyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    const numStars = 1200;
    const stars = [];
    const colors = ['#5E2BFF', '#2B95FF', '#2BFFD9', '#95FF2B', '#FFD92B', '#FF2B5E', '#D92BFF', '#FFFFFF'];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2,
        vx: (Math.random() - 0.5) * 0.05, // Slower speed
        vy: (Math.random() - 0.5) * 0.05, // Slower speed
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();

        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0 || s.x > width) s.vx = -s.vx;
        if (s.y < 0 || s.y > height) s.vy = -s.vy;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-black"
      aria-hidden="true"
    />
  );
};

export default GalaxyBackground;
