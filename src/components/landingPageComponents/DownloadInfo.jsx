import React, { useEffect, useState } from "react";
import barcode from "../../pictures/BarcodeAthletia.png";
import downloadButton from "../../pictures/downloadAppStore.png";

const DownloadInfo = ({ duration, scrollFreshhold }) => {
  const SCROLL_THRESHOLD = scrollFreshhold;
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

  const handleDownloadClicked = () => {
    const url = "https://apps.apple.com/us/app/athletia/id6463032641";
    window.open(url, "_blank");
  };

  return (
    <div
      className={`download-info-area ${scrolled ? "show" : ""}`}
      style={{
        transition: `opacity ${duration}s ease`, // Add opacity transition
        opacity: scrolled ? 1 : 0, // Show or hide based on scroll position
      }}
    >
      <div id="see-who-is-going-label">
        "Look! Jack, Emma and Kayla are all
        <br /> going to this week's basketball game"
      </div>
      <div id="ios-download-button">
        <img
          src={downloadButton}
          alt=""
          onClick={() => handleDownloadClicked()}
        />
      </div>
      <div id="download-barcode">
        <img src={barcode} alt="" />
      </div>
    </div>
  );
};

export default DownloadInfo;
