import React from "react";
import ListItem from "./IconListComponents/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const handshakeIcon = (
  <FontAwesomeIcon color={"#FFD700"} icon="fa-solid fa-handshake" size={"2x"} />
);
const rocketIcon = (
  <FontAwesomeIcon color={"#FFA500"} icon="fa-solid fa-rocket" size={"2x"} />
);
const phoneIcon = (
  <FontAwesomeIcon
    color={"#009999"}
    icon="fa-solid fa-mobile-screen-button"
    size={"2x"}
  />
);

function IconList() {
  return (
    <div className="icon-list-grid-container">
      <ListItem
        icon={handshakeIcon}
        heading={"Unite Students"}
        text={"Seamlessly bring the school community together"}
      ></ListItem>

      <ListItem
        icon={phoneIcon}
        heading={"All in One"}
        text={
          "Discover Attendees and Live Streams for Upcoming Events Instantly"
        }
      ></ListItem>

      <ListItem
        icon={rocketIcon}
        heading={"Increase game attendance"}
        text={"Transform sports events into unforgettable experiences"}
      ></ListItem>
    </div>
  );
}

export default IconList;
