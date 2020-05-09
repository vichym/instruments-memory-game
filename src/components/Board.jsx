import React, { Component } from "react";
import GameCard from "./GameCard";
import Dialog from "@material-ui/core/Dialog";
import frontCard from "../Images/frontcard.png";
import Info from "./Info";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const  Board = ({app}) =>  {
  
    return (
      <div className="board-container">
        <div className="cards-container">
          {app.state.cards.map((card) => (
            <GameCard
              flipped={
                app.state.flipped.includes(card.id) ||
                app.state.correctPairs.includes(card.id)
              }
              id={card.id}
              name={card.name}
              handleClick={app.handleClick}
              front={<img className="card-image" src={frontCard} />}
              back={<Info card={card} />}
            />
          ))}
        </div>
        <Dialog
          open={app.state.dialog}>
          <DialogTitle id="alert-dialog-title">
            {"You Won!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">You can choose a different category or region</DialogContentText>
          </DialogContent>
          <DialogActions>
            <button className="button" onClick={() => app.setState({ dialog: false })} color="primary">
              Okay
            </button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default Board;
