import React from "react";

export default function GameCard({ handleClick, front, back, id, flipped }) {
  return (
    <div
      className={`flip-card ${flipped ? `flipped` : ""}`}
      onClick={() => handleClick(id)}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {front}
        </div>
        <div className="flip-card-back">
          {back}
        </div>
      </div>
    </div>
  );
}
