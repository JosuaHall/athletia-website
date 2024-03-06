import React from "react";
import app from "../pictures/appicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Impressum() {
  return (
    <div className="impressum-container">
      <div style={{ marginTop: "3em" }}>
        <img src={app} alt="" width={100} />
      </div>
      {/*<div>
        <h2 style={{ marginBottom: "1em" }}>Follow us on Instagram</h2>
        <a
          href="https://www.instagram.com/athletia.app/?utm_source=ig_embed&amp;utm_campaign=loading"
          style={{
            background:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", // Instagram gradient colors
            display: "inline-block",
            lineHeight: 0,
            padding: ".5em 0.7em",
            borderRadius: "1em", // Added border radius to make it a circle
            textDecoration: "none",
          }}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faInstagram} size="4x" color="#fff" />{" "}
          {/* Instagram icon 
        </a>
        </div>*/}

      <div>
        <h4>Contact us at support@athletia.app</h4>
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
