"use client"
import React, { useState } from 'react';

const Heart = () => {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
    }, 600);
  };

  return (
    <div className="player">
      <div className="like__container">
        <div
          className={`like__heart heart-shape ${isBouncing ? 'bounce' : ''}`}
          onClick={handleClick}
        >
          <div className="heart-shape-sm heart-split-1"></div>
          <div className="heart-shape-sm heart-shape-sm-white heart-split-2"></div>
          <div className="heart-shape-sm heart-shape-sm-white heart-split-3"></div>
          <div className="heart-shape-sm heart-split-4"></div>
          <div className="heart-shape-sm heart-split-5"></div>
          <div className="heart-shape-sm heart-split-6"></div>
          <div className="heart-shape-sm heart-split-7"></div>
          <div className="heart-shape-sm heart-split-8"></div>
          <div className="heart-shape-sm heart-shape-sm-white heart-split-9"></div>
          <div className="heart-shape-sm heart-split-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Heart;
