// src/components/HeroTitle.jsx
import React from "react";

const HeroTitle = ({ topText, highlightText, bottomText }) => {
  return (
    <div className="text-center">
      <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-2 ">
        {topText}
      </h1>
      <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
        {highlightText.split(" ").map((word, index) =>
          index === 0 ? (
            <span key={index}>{word} </span>
          ) : (
            <span key={index} className="text-primary">
              {word}
            </span>
          )
        )}
      </h1>
      <h3 className="text-white mt-8 text-xl font-normal">{bottomText}</h3>
    </div>
  );
};

export default HeroTitle;
