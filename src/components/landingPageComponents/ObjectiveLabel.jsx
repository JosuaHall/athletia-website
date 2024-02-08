import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const SCROLL_THRESHOLD = 5;
const ANIMATION_DURATION = 0.5;

const ObjectiveLabel = () => {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const shouldScroll = window.scrollY > SCROLL_THRESHOLD;
      if (shouldScroll !== scrolled) {
        setScrolled(shouldScroll);
        controls.start({
          y: shouldScroll ? (window.innerWidth <= 668 ? -200 : -135) : 0,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, scrolled]);

  return (
    <motion.div
      id="app-objective-label"
      animate={controls}
      transition={{ duration: ANIMATION_DURATION }}
      style={{ "background-color": scrolled ? "transparent" : "rgb(1,1,1)" }}
    >
      <div>
        {scrolled ? "..into social events" : "We turn sporting events.."}
      </div>
    </motion.div>
  );
};

export default ObjectiveLabel;
