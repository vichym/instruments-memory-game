import React from "react";

const Info = ({ card }) => {
  return (
    <div>
      {card.page === 1 ? (
        <img
          className="card-image"
          src={require(`../Images/${card.img}.png`)}
        ></img>
      ) : (
        <div className="container">
          <h3>{card.name}</h3>
          <div className="badge-container">
            <div>
              <span className="badge badge-region">{card.region}</span>
            </div>
            <div>
              <span className="badge badge-group">{card.group}</span>
            </div>
          </div>
          <div className="fun-fact">
            <p>{card.funFact}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Info;
