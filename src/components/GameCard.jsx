import React, { memo } from "react";

const  GameCard = ({
  handleClick,
  name,
  front,
  back,
  id,
  flipped,
}) => {
  return (
    <div
      className={`flip-card ${flipped ? `flipped` : ""}`}
      onClick={() => {
        handleClick(id, name);
        console.log("Click on card");
      }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back" style={{background: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)}}>{back}</div>
      </div>
    </div>
  );
}
export default memo(GameCard)
