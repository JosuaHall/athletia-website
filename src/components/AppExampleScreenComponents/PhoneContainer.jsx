import React from "react";

function PhoneContainer({ number, image, heading, text }) {
  return (
    <div className="phone-container">
      <div className="phone-container-number">{number}</div>
      <div className="phone-container-img">
        <img src={image} alt="" />
      </div>
      <div className="phone-container-text-area">
        <h3 className="phone-container-text-area-heading">{heading}</h3>
        <p className="phone-container-text-area-text">{text}</p>
      </div>
    </div>
  );
}

export default PhoneContainer;
