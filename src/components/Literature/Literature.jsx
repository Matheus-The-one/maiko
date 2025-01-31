import "./Literature.css";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import literature from "./literatureData"; // Assuming you have your data here

function Literature() {
  const [flippedSlides, setFlippedSlides] = useState({});
  const navigate = useNavigate(); // Hook to get the navigate function

  useEffect(() => {
    const slides = document.querySelectorAll(".swiper-slide");

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

    const swiper = document.querySelector(".swiper-container").swiper;

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
    navigate(`/literatureinfo/${id}`); // Navigate to the LiteratureInfo page with the ID
  };

  return (
    <div id="literature" className="literature">
      {" "}
      {/* Added the ID for scroll target */}
      <h2 className="heading">Literature</h2>
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
        {literature.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`card ${flippedSlides[slide.id] ? "flipped" : ""}`}
              onClick={() => handleCardClick(slide.id)}
            >
              <div className="front">
                <img src={slide.img} alt={`Slide ${slide.id}`} />
                <div className="slide-info">
                  <p>{slide.date}</p>
                  <h3>{slide.title}</h3>
                  <p>{slide.author}</p> {/* Added author */}
                </div>
              </div>
              <div className="back">
                <img src={slide.img} alt={`Slide ${slide.id}`} />
                <p>{slide.description}</p>
                {slide.details && <small>{slide.details}</small>}
                <button
                  className="details-button"
                  onClick={() => handleButtonClick(slide.id)} // Trigger navigation with the slide's ID
                >
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Literature;
