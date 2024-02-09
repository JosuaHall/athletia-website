import React from "react";

function Card({ quote, image, name, school }) {
  return (
    <div className="card">
      <div className="quote">{quote}</div>
      <div className="profile">
        <div className="profile-image">
          <img src={image} alt="" />
        </div>
        <div className="profile-text">
          <div className="profile-name">{name}</div>
          <div className="profile-school">{school}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
