import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./LiteratureInfo.css";
import Navbar from "../../components/Navbar/Navbar";
import literature from "../../components/Literature/literatureData";
import Comments from "../../components/Comments/Comments";
import Gallery from "../../components/Gallery/Gallery";

function LiteratureInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [wikiContent, setWikiContent] = useState("");
  const [wikiImages, setWikiImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const slide = literature.find((item) => item.id === parseInt(id));

  useEffect(() => {
    if (slide) {
      const fetchWikiContent = async () => {
        setLoading(true);
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
        setLoading(false);
      };

      const fetchWikiImages = async () => {
        setLoading(true);
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
            .filter((image) => image.url);

          setWikiImages(
            images.length ? images : [{ url: "/images/fallback.jpg" }]
          );
        } catch (error) {
          console.error("Error fetching Wikipedia images:", error);
          setWikiImages([{ url: "/images/fallback.jpg" }]);
        }
        setLoading(false);
      };

      fetchWikiContent();
      fetchWikiImages();
    }
  }, [slide]);

  if (!slide) {
    navigate("/"); // Redirect if the slide doesn't exist
    return null;
  }

  if (loading) {
    return <div>Loading...</div>;
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

export default LiteratureInfo;
