import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Core mouse position (Instant)
  const mouseX = useSpring(-100, { stiffness: 1000, damping: 40 });
  const mouseY = useSpring(-100, { stiffness: 1000, damping: 40 });

  // Ring 1 (Tight follow)
  const ring1X = useSpring(-100, { stiffness: 400, damping: 30 });
  const ring1Y = useSpring(-100, { stiffness: 400, damping: 30 });

  // Ring 2 (Loose follow)
  const ring2X = useSpring(-100, { stiffness: 200, damping: 25 });
  const ring2Y = useSpring(-100, { stiffness: 200, damping: 25 });

  // Ring 3 (Very loose follow)
  const ring3X = useSpring(-100, { stiffness: 100, damping: 20 });
  const ring3Y = useSpring(-100, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      ring1X.set(e.clientX);
      ring1Y.set(e.clientY);
      ring2X.set(e.clientX);
      ring2Y.set(e.clientY);
      ring3X.set(e.clientX);
      ring3Y.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' ||
          e.target.closest('a') || 
          e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, ring1X, ring1Y, ring2X, ring2Y, ring3X, ring3Y]);

  return (
    <div className="hidden md:block pointer-events-none z-[9999] fixed inset-0">
      {/* Core Dot */}
      <motion.div
        className="absolute top-0 left-0 bg-primary shadow-[0_0_15px_#3b82f6] rounded-full"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isHovering ? 6 : 10,
          height: isHovering ? 6 : 10,
        }}
      />
      
      {/* Ring 1 - Morphs into a rotated diamond on hover */}
      <motion.div
        className="absolute top-0 left-0 border-[1.5px] border-secondary"
        style={{ x: ring1X, y: ring1Y, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isHovering ? 45 : 20,
          height: isHovering ? 45 : 20,
          rotate: isHovering ? 45 : 0,
          borderRadius: isHovering ? "8px" : "50%"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Ring 2 - Morphs into an oppositely rotated soft square */}
      <motion.div
        className="absolute top-0 left-0 border border-accent opacity-70"
        style={{ x: ring2X, y: ring2Y, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isHovering ? 65 : 30,
          height: isHovering ? 65 : 30,
          rotate: isHovering ? -25 : 0,
          borderRadius: isHovering ? "12px" : "50%"
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Ring 3 - Large subtle outer pulse */}
      <motion.div
        className="absolute top-0 left-0 border border-primary opacity-30"
        style={{ x: ring3X, y: ring3Y, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isHovering ? 90 : 40,
          height: isHovering ? 90 : 40,
          rotate: isHovering ? 90 : 0,
          borderRadius: isHovering ? "16px" : "50%"
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
    </div>
  );
};

export default CustomCursor;
