import "./Cinematography.css";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import cinematography from "./CinematographyData"; // Ensure you have this data structure

function Cinematography() {
  const [flippedSlides, setFlippedSlides] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const swiper = document.querySelector(".swiper-container").swiper;

    function flipActiveSlide() {
      const activeSlide = document.querySelector(".swiper-slide-active");
      const button = activeSlide?.querySelector(".details-button");

      if (button) {
        button.addEventListener("click", (event) => {
          event.stopPropagation();
          activeSlide.classList.add("flipped");
        });
      }
    }

    const slides = document.querySelectorAll(".swiper-slide");
    slides.forEach((slide) => {
      slide.addEventListener("click", () => {
        if (
          slide.classList.contains("swiper-slide-active") &&
          slide.classList.contains("flipped")
        ) {
          slide.classList.remove("flipped");
        }
      });
    });

    swiper.on("slideChangeTransitionStart", () => {
      slides.forEach((slide) => {
        slide.classList.remove("flipped");
      });
      flipActiveSlide();
    });

    flipActiveSlide();
  }, []);

  const handleCardClick = (id) => {
    setFlippedSlides((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleButtonClick = (id) => {
    navigate(`/cinematographyinfo/${id}`); // Navigate to the CinematographyInfo page with the ID
  };

  return (
    <div id="cinematography" className="movies">
      {" "}
      {/* Added the ID for scroll target */}
      <h2 className="heading">Cinematography</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 170,
          modifier: 1.5,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
      >
        {cinematography.map((cinematography) => (
          <SwiperSlide key={cinematography.id}>
            <div
              className={`card ${
                flippedSlides[cinematography.id] ? "flipped" : ""
              }`}
              onClick={() => handleCardClick(cinematography.id)}
            >
              <div className="front">
                <img
                  src={cinematography.img || "default-placeholder.jpg"}
                  alt={cinematography.title}
                />
                <div className="slide-info">
                  <p>{cinematography.date}</p>
                  <h3>{cinematography.title}</h3>
                  <p>{cinematography.director || "Unknown Director"}</p>
                </div>
              </div>
              <div className="back">
                <img
                  src={cinematography.img || "default-placeholder.jpg"}
                  alt={cinematography.title}
                />
                <p>
                  {cinematography.description || "No description available."}
                </p>
                {cinematography.details && (
                  <small>{cinematography.details}</small>
                )}
                <button
                  className="details-button"
                  aria-label={`Learn more about ${cinematography.title}`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent flip when button is clicked
                    handleButtonClick(cinematography.id);
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Cinematography;
