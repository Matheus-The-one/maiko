import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CinematographyInfo.css";
import Navbar from "../../components/Navbar/Navbar";
import cinematography from "../../components/Cinematography/CinematographyData";
import Comments from "../../components/Comments/Comments";
import Gallery from "../../components/Gallery/Gallery";

function CinematographyInfo() {
  const { id } = useParams();
  const [wikiContent, setWikiContent] = useState("");
  const slide = cinematography.find((item) => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  useEffect(() => {
    if (slide) {
      const fetchWikiContent = async () => {
        try {
          const response = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
              slide.title
            )}`
          );
          if (!response.ok)
            throw new Error("Failed to fetch Wikipedia content");
          const data = await response.json();
          setWikiContent(
            data.extract || "No additional information available."
          );
        } catch (error) {
          console.error("Error fetching Wikipedia content:", error);
          setWikiContent("Failed to load content, please try again later.");
        }
      };

      fetchWikiContent();
    }
  }, [slide]);

  if (!slide) {
    return <div>Slide not found.</div>;
  }

  return (
    <>
      <Navbar />
      {/* Red Square Box */}
      <div className="red-box"></div>
      <div className="literature-info">
        <div className="image-container">
          <img src={slide.img} alt={slide.title} className="literature-image" />
          <div className="text-overlay">
            <h2>{slide.title}</h2>
          </div>
        </div>

        {/* Wikipedia Content Section */}
        <div className="wiki-content">
          <p>{wikiContent}</p>
        </div>
      </div>
      {/* Comments Section */}
      <Comments />
    </>
  );
}

export default CinematographyInfo;
