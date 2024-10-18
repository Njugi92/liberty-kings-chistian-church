import React, { useState } from "react";
import "./GallerySection.css";

const images = [
  "/images/img2.jpg",
  "/images/img8.jpg",
  "/images/img5.jpg",
  "/images/img10.jpg",
  "/images/img11.jpg",
  "/images/img14.jpg",
  "/images/img9.jpg",
  "/images/img12.jpg",
  "/images/image9.jpg",
];

const GallerySection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextImage = () => {
    if (startIndex < images.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevImage = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="gallery-section">
      <h2 className="gallery-title">Our Gallery</h2>
      <div className="gallery-container">
        <button className="arrow-button left-arrow" onClick={prevImage}>
          {"<"}
        </button>
        <div className="gallery-images">
          {images.slice(startIndex, startIndex + 4).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index}`}
              className="gallery-image"
            />
          ))}
        </div>
        <button className="arrow-button right-arrow" onClick={nextImage}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default GallerySection;
