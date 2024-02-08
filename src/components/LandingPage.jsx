import React, { useEffect, useState } from "react";
import AppExample from "./landingPageComponents/AppExample";
import ObjectiveLabel from "./landingPageComponents/ObjectiveLabel";
import DownloadInfo from "./landingPageComponents/DownloadInfo";

const SCROLL_THRESHOLD = 5;
const ANIMATION_DURATION = 2;

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD && !scrolled) {
        setScrolled(true);
      } else if (window.scrollY <= SCROLL_THRESHOLD && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div className="landing-page">
      <ObjectiveLabel />
      <AppExample />
      {scrolled && (
        <DownloadInfo
          duration={ANIMATION_DURATION}
          scrollFreshhold={SCROLL_THRESHOLD}
        />
      )}
    </div>
  );
};

export default LandingPage;
