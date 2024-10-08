import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollOffset, setScrollOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: `${mousePosition.x + scrollOffset.x}px`,
          top: `${mousePosition.y + scrollOffset.y}px`,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          pointerEvents: 'none',
          zIndex: 1000,
          transform: 'translate(10px, 10px)',
        }}
      >
        <div
          style={{
            position: 'relative',
            fontSize: '24px',
            textAlign: 'center',
          }}
        >
          👀
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
