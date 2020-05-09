import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Board from "./components/Board";
import Menu from "./components/Menu";
import { Data } from "./components/data";
import generateCard from "./components/generateCard";

class App extends Component {
  state = {
    selectedButton: "",
    cards: generateCard(Data),
    flipped: [],
    openCard: "",
    correctPairs: [],
  };

  filter = (option, info) => {
    this.setState({ selectedButton: info });
    console.log(option, info);
    this.setState({ cards: generateCard(Data.filter((d) => d[option] === info)), flipped: [],
      openCard: "",
      correctPairs: [],});
  };

  handleClick = (id, name) => {
    /* of the flipped card match */
    console.log(id, name);
    if (name === this.state.openCard && !this.state.flipped.includes(id)) {
      /* open the card and stay */
      this.setState({
        correctPairs: [...this.state.correctPairs, ...this.state.flipped, id],
        flipped: [],
        openCard: "",
      });
      /* If all cards is matched */
      this.checkEndGame()
    } else if (this.state.flipped.length < 1) {
      this.setState({ flipped: [...this.state.flipped, id], openCard: name });
      console.log("First Card");
    } else {
      this.setState({ flipped: [...this.state.flipped, id], openCard: "" });
      setTimeout(() => this.setState({ flipped: [], openCard: "" }), 1000);
      console.log("Wrong card");
    }
  };

  checkEndGame = () =>{
    console.log(this.state.correctPairs.length)
    if (this.state.correctPairs.length === this.state.cards.length) {
      this.setState({dialog:true, flipped: [], openCard: "", correctPairs:[]})
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <Menu
            handleClick={this.filter}
            selected={this.state.selectedButton}
          />
          <Board app={this}/>
        </main>
      </div>
    );
  }
}

export default App;
