import { useState, useEffect, useRef } from "react";
import "./cursor.css";


function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    let animationFrame;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth following speed
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-circle" />;
}

export default Cursor;
