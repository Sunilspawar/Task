import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="banner-image">
        <img src="https://example.com/banner.jpg" alt="Banner" />
      </div>
      <div className="banner-content">
        <h1>Example Banner</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default Banner;
