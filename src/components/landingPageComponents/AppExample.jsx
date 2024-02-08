import React, { useEffect, useState } from "react";
import iphoneScreen from "../../pictures/5.png";

const SCROLL_THRESHOLD = 5;
const ANIMATION_DURATION = 0.5;

const AppExample = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldScroll = window.scrollY > SCROLL_THRESHOLD;
      if (shouldScroll !== scrolled) {
        setScrolled(shouldScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div>
      <img
        src={iphoneScreen}
        id="iphone-grafic"
        alt=""
        style={{
          position: "relative",
          left: scrolled && window.innerWidth > 668 ? "-200px" : "0",
          top: scrolled ? (window.innerWidth <= 668 ? "80px" : "130px") : "0",
          transition: `left ${ANIMATION_DURATION}s ease`,
          paddingBottom: "1.5em",
          backgroundImage:
            "linear-gradient(to top, rgba(10,10,10,0.5) 20%, transparent 80%)", // Create a linear gradient for the bottom border
          backgroundRepeat: "no-repeat",
          backgroundSize: "55% 10px", // Adjust the height of the border here
          backgroundPositionX: 70,
          backgroundPosition: "bottom", // Place the gradient at the bottom
          borderRadius: "20px",
        }}
      />
    </div>
  );
};

export default AppExample;
