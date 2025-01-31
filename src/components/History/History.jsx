import './History.css';
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import slides from './slidesData';

function History() {
  const [flippedSlides, setFlippedSlides] = useState({});
  const swiperRef = useRef(null); // Ref for Swiper instance
  const navigate = useNavigate(); // Hook to get the navigate function

  useEffect(() => {
    // Swiper initialization using the ref
    const swiper = swiperRef.current.swiper;
    const slides = document.querySelectorAll('.swiper-slide');

    // Function to flip the active slide
    const flipActiveSlide = () => {
      const activeSlide = document.querySelector('.swiper-slide-active');
      const button = activeSlide?.querySelector('.details-button');

      if (button) {
        button.addEventListener('click', (event) => {
          event.stopPropagation(); // Prevent propagation of the click event
          activeSlide.classList.add('flipped');
        });
      }
    };

    // Event listener to toggle the 'flipped' state when clicking on a slide
    slides.forEach((slide) => {
      slide.addEventListener('click', () => {
        if (
          slide.classList.contains('swiper-slide-active') &&
          slide.classList.contains('flipped')
        ) {
          slide.classList.remove('flipped');
        }
      });
    });

    // Reset the flipped state on slide change
    swiper.on('slideChangeTransitionStart', () => {
      slides.forEach((slide) => {
        slide.classList.remove('flipped');
      });
      flipActiveSlide();
    });

    flipActiveSlide(); // Initialize flipping on first load
  }, []);

  // Handle card flip toggle
  const handleCardClick = (id) => {
    setFlippedSlides((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Handle Learn More button click
  const handleButtonClick = (id) => {
    navigate(`/historyinfo/${id}`); // Navigate to the HistoryInfo page with the ID
  };

  return (
    <div id="history" className="history">
      <h2 className="heading">History</h2>
      <Swiper
        ref={swiperRef} // Pass the ref to Swiper
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`card ${flippedSlides[slide.id] ? 'flipped' : ''}`}
              onClick={() => handleCardClick(slide.id)}
            >
              <div className="front">
                <img src={slide.img} alt={`Slide ${slide.id}`} />
                <div className="slide-info">
                  <p>{slide.date}</p>
                  <h3>{slide.title}</h3>
                </div>
              </div>
              <div className="back">
                <img src={slide.img} alt={`Slide ${slide.id}`} />
                <p>{slide.description}</p>
                {slide.details && <small>{slide.details}</small>}
                <button
                  className="details-button"
                  onClick={(event) => {
                    event.stopPropagation(); // Prevent propagation of click to slide
                    handleButtonClick(slide.id); // Trigger navigation with the slide's ID
                  }}
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

export default History;
