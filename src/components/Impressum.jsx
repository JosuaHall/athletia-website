import React from "react";
import app from "../pictures/appicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Impressum() {
  return (
    <div className="impressum-container">
      <div>
        <img src={app} alt="" width={100} />
      </div>
      <div>
        <h4>Contact us at support@athletia.com</h4>
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon="fa-regular fa-copyright" /> 2024 Athletia. All
          rights reserved. Josua Hall | Paul Suarez
        </p>
      </div>
    </div>
  );
}

export default Impressum;
