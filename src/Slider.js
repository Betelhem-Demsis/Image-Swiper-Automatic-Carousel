import React, { useState, useEffect } from "react";
import "./Home.css";
import Photo4Image from "./image/Photo_4.jpg";
import photo1Image from "./image/photo-1.jpg";
import photo5Image from "./image/photo-5.png";
import photo2Image from "./image/photo-2.png";
import photo3Image from "./image/photo-3.jpeg";

function Slider() {
  const [itemActive, setItemActive] = useState(0);
  const items = [
    {
      src: Photo4Image,
      content: {
        title: "[CONTENT ONE]",
        description:
          " [add your p tag content here add your p tag content here] ",
      },
    },
    {
      src: photo1Image,
      content: {
        title: "[CONTENT TWO]",
        description:
          "[add your p tag content here add your p tag content here ] ",
      },
    },
    {
      src: photo5Image,
      content: {
        title: "[CONTENT THREE]",
        description:
          "[add your p tag content here add your p tag content here ] ",
      },
    },
    {
      src: photo2Image,
      content: {
        title: "[CONTENT FOUR]",
        description:
          "[add your p tag content here add your p tag content here ]",
      },
    },
    {
      src: photo3Image,
      content: {
        title: "[CONTENT FIVE]",
        description:
          "[add your p tag content here add your p tag content here ]",
      },
    },
  ];

  const handleNext = () => {
    setItemActive((prevItemActive) => (prevItemActive + 1) % items.length);
  };

  const handlePrev = () => {
    setItemActive(
      (prevItemActive) => (prevItemActive - 1 + items.length) % items.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (index) => {
    setItemActive(index);
  };

  return (
    <div className="slider">
      <div className="list">
        {items.map((item, index) => (
          <div
            className={`item ${index === itemActive ? "active" : ""}`}
            key={index}
          >
            <img src={item.src} alt="" />
            <div className="content">
              <h2>{item.content.title}</h2>
              <p>
                <b>{item.content.description}</b>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button onClick={handlePrev}>{"<"}</button>
        <button onClick={handleNext}>{">"}</button>
      </div>
      <div className="thumbnail">
        {items.map((item, index) => (
          <div
            className={`item ${index === itemActive ? "active" : ""}`}
            key={index}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={item.src} alt="" />
            <div className="content">Name Slider</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
