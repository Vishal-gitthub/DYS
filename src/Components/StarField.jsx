// src/StarField.js

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Star = () => {
  const starRef = useRef(null);

  useEffect(() => {
    const star = starRef.current;

    const animateStar = () => {
      gsap.set(star, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random(),
      });

      gsap.to(star, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: 100 + Math.random() * 3,
        opacity: Math.random(),
        ease: "none",
        onComplete: animateStar,
      });
    };

    animateStar();
  }, []);

  return <div className="star" ref={starRef}></div>;
};

const StarField = () => {
  const createStars = (numStars) => {
    return Array.from({ length: numStars }).map((_, index) => (
      <Star key={index} />
    ));
  };

  return <div className="star-field">{createStars(100)}</div>;
};

export default StarField;
