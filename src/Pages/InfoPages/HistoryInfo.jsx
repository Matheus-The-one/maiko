import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HistoryInfo.css";
import Navbar from "../../components/Navbar/Navbar";
import slides from "../../components/History/slidesData";

import Comments from "../../components/Comments/Comments";
import Gallery from "../../components/Gallery/Gallery";

function HistoryInfo() {
  const { id } = useParams();
  const [wikiContent, setWikiContent] = useState("");
  const [wikiImages, setWikiImages] = useState([]);
  const slide = slides.find((slide) => slide.id === parseInt(id));

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
          setWikiContent("Error fetching Wikipedia content.");
        }
      };

      const fetchWikiImages = async () => {
        try {
          const response = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(
              slide.title
            )}`
          );
          if (!response.ok) throw new Error("Failed to fetch Wikipedia images");
          const data = await response.json();
          const images = data.items
            .filter((item) => item.type === "image")
            .map((item) => ({ url: item.original?.source || "" }))
            .filter((image) => image.url); // Filter out invalid URLs

          setWikiImages(
            images.length ? images : [{ url: "fallback-image-url.jpg" }]
          ); // Add fallback image
        } catch (error) {
          console.error("Error fetching Wikipedia images:", error);
          setWikiImages([{ url: "fallback-image-url.jpg" }]); // Fallback image
        }
      };

      fetchWikiContent();
      fetchWikiImages();
    }
  }, [slide]);

  if (!slide) {
    return <div>Slide not found.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="history-info">
        <div className="image-container">
          <img src={slide.img} alt={slide.title} className="history-image" />
          <div className="text-overlay">
            <h2>{slide.title}</h2>
            <p>
              <strong>Author:</strong> {slide.author}
            </p>
          </div>
        </div>

        {/* Grouped Content Section */}
        <div className="content-group">
          <div className="wiki-content">
            <h3>Wikipedia Info:</h3>
            <p>{wikiContent}</p>
          </div>
        </div>
      </div>

      <Comments />
    </>
  );
}

export default HistoryInfo;
