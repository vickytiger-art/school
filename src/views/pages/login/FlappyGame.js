import React, { useState, useEffect } from "react";
import "./FlappyGame.css";

const FlappyGame = () => {
  const [birdPosition, setBirdPosition] = useState(200);
  const [isFalling, setIsFalling] = useState(true);

  useEffect(() => {
    const gravity = setInterval(() => {
      if (isFalling) {
        setBirdPosition((pos) => (pos < 400 ? pos + 5 : 400));
      }
    }, 50);
    return () => clearInterval(gravity);
  }, [isFalling]);

  const jump = () => {
    setBirdPosition((pos) => (pos > 50 ? pos - 50 : 0));
  };

  return (
    <div className="game-container">
      <h3>Flappy Bird Mini</h3>
      <div className="bird" style={{ top: `${birdPosition}px` }} onClick={jump}></div>
      <p className="instructions">Click the bird to keep it in the air!</p>
    </div>
  );
};

export default FlappyGame;
