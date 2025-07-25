
import { useEffect, useState } from 'react';

export const GameCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isClicking ? 'scale(0.8)' : 'scale(1)'}`,
        }}
      >
        {/* Outer ring */}
        <div className="absolute inset-0 w-8 h-8 border-2 border-neon-cyan rounded-full animate-pulse" />
        
        {/* Inner dot */}
        <div className="absolute inset-0 w-2 h-2 bg-neon-green rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-glow" />
        
        {/* Crosshair */}
        <div className="absolute inset-0 w-8 h-8">
          <div className="absolute w-0.5 h-2 bg-neon-cyan top-0 left-1/2 transform -translate-x-1/2" />
          <div className="absolute w-0.5 h-2 bg-neon-cyan bottom-0 left-1/2 transform -translate-x-1/2" />
          <div className="absolute h-0.5 w-2 bg-neon-cyan left-0 top-1/2 transform -translate-y-1/2" />
          <div className="absolute h-0.5 w-2 bg-neon-cyan right-0 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      {/* Trail effect */}
      <div
        className="fixed pointer-events-none z-[9998] w-4 h-4 bg-neon-cyan/20 rounded-full transition-all duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(2px)',
        }}
      />
    </>
  );
};
