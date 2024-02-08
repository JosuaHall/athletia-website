import React from "react";

function ListItem({ icon, heading, text }) {
  return (
    <div className="list-item">
      <div className="list-item-icon">{icon}</div>
      <div className="list-item-text-area">
        <div className="list-item-heading">
          <h2>{heading}</h2>
        </div>
        <div className="list-item-text">{text}</div>
      </div>
    </div>
  );
}

export default ListItem;
