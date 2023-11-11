import React from "react";

const HeroHeadImg = () => {
  return (
    // overlay img manipulation with position: relative and absolute was used
    <div
      className="container mt-5"
      style={{ width: "100%", position: "relative" }}
    >
      <img
        style={{ width: "100%", objectFit: "contain" }}
        src="https://media-cdn.tripadvisor.com/media/photo-s/25/8e/7c/47/disneyland-hotel.jpg"
        alt="Disney Hotel and Luxury"
      />
      <div
        className="bg-dark d-flex  justify-content-center align-items-center"
        style={{
          position: "absolute",
          top: 0,
          bottom: "0",
          left: "0",
          right: "0",
          opacity: "0.8",
          zIndex: 1,
          color: "white",
          margin: "0 10px",
        }}
      >
        {/* The heading text is here */}
        <h1 style={{ fontSize: "70px" }} className="text-center">
          Discovery of Disney Hotels
        </h1>
      </div>
    </div>
  );
};

export default HeroHeadImg;
