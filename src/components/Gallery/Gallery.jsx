import { useState } from "react";
import "./Gallery.css";

const Gallery = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
  
    // Check if the current slide has a valid url
    const currentSlide = slides[currentIndex];
    const backgroundImage = currentSlide && currentSlide.url ? currentSlide.url : "fallback-image-url.jpg"; // Fallback image if url is missing
  
    return (
      <div className="slider">
        <div className="arrows">
          <div className="arrow left" onClick={goToPrevious}>
            ❰
          </div>
          <div className="arrow right" onClick={goToNext}>
            ❱
          </div>
        </div>
        <div
          className="slide"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="dots">
          {slides.map((_, slideIndex) => (
            <div
              className={`dot ${slideIndex === currentIndex ? "active" : ""}`}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;
  