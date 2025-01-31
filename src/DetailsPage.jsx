import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const slides = [
  { id: 1, details: "Detailed information about the first flower." },
  { id: 2, details: "Detailed information about the second flower." },
  { id: 3, details: "Detailed information about the third flower." },
];

function DetailsPage() {
  const { id } = useParams(); // Get the dynamic id from the URL
  const navigate = useNavigate(); // Initialize navigate to go back

  const slide = slides.find((s) => s.id === parseInt(id));

  if (!slide) {
    return <p>Topic not found!</p>;
  }

  return (
    <div className="details-container">
      <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
      <h1>Details</h1>
      <p>{slide.details}</p>
    </div>
  );
}

export default DetailsPage;
