import React, { Component } from "react";
import GameCard from "./GameCard";
import { Data } from "./data";
import generateCard from "./generateCard";
import { Container } from "@material-ui/core";
class Board extends Component {
  state = {
    flipped: [],
    cards: generateCard(Data),
  };

  handleClick = (id) => {
    this.setState({ flipped: [...this.state.flipped, id] });
  };

  render() {
    return (
      <div className="board-container">
        <div className="cards-container">
          {this.state.cards.map((card) => (
            <GameCard
              flipped={this.state.flipped.includes(card.id)}
              id={card.id}
              handleClick={this.handleClick}
              front={<h1>Mistery</h1>}
              back={<h2>{card.Region}</h2>}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
