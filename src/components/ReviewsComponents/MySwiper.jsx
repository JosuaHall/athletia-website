import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import Card from "./Card";
import kathlin from "../../pictures/kathlin.jpg";
import dani from "../../pictures/dani.jpg";
import emil from "../../pictures/emil.jpg";
import michaela from "../../pictures/michaela.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const reviews = [
  {
    quote:
      "''Athletia is a game-changer for my family! Now, they easily follow my basketball team's schedule and catch every livestream with just one click. It's streamlined and hassle-free.''",
    image: michaela,
    name: "Michaela Kucera",
    school: "Student athlete / St. Mary's University",
  },
  {
    quote:
      "''A must-have for any sports fan at any university - I can quickly check upcoming games on campus and also see which other students are going to watch.''",
    image: emil,
    name: "Emil Jönsson",
    school: "Student athlete / CSU-Pueblo",
  },
  {
    quote:
      "''My mom has always struggled to find the live streams to my games, and now it's easy! My whole family loves it!''",
    image: kathlin,
    name: "Kaitlin Bean",
    school: "Student athlete / CSU-Pueblo",
  },
  {
    quote:
      "''I use Athletia daily to check the game schedules on campus. I also love using it to track when my own games are coming up.''",
    image: dani,
    name: "Daniel Gimena",
    school: "Student athlete / St. Mary's University",
  },
];

const MySwiper = () => {
  const [showArrows, setShowArrows] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
      },
    });

    const updateArrows = () => {
      setShowArrows(
        swiperRef.current.slides && swiperRef.current.slides.length > 1
      );
    };

    swiperRef.current.on("resize", updateArrows);
    updateArrows();

    return () => {
      swiperRef.current.off("resize", updateArrows);
    };
  }, []);

  const handleNextClick = () => {
    swiperRef.current.slideNext();
  };

  const handlePrevClick = () => {
    swiperRef.current.slidePrev();
  };

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {reviews.map((review, index) => (
          <div key={index} className="swiper-slide">
            <Card
              quote={review.quote}
              image={review.image}
              name={review.name}
              school={review.school}
            />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      {showArrows && (
        <>
          <div className="swiper-button-prev" onClick={handlePrevClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className="swiper-button-next" onClick={handleNextClick}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </>
      )}
    </div>
  );
};

export default MySwiper;
