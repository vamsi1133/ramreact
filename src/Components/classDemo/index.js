import { Button, Divider } from "@mui/material";
import React, { Component } from "react";
import { randomGenerator } from "../../util";
import "./classDemo.css";

class ClassDemo extends Component {
  state = {
    diceNo: 0,
    counter: 0,
  };

  componentDidMount() {
    console.log("mounted");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.diceNo !== nextState.diceNo) return true;
    else return false;
  }

  componentDidUpdate(prevProps, prevState) {
    alert("component updated");
  }

  componentWillUnmount() {
    alert("component unmounted");
  }

  rollDice = () => {
    const random = randomGenerator(1, 6);
    this.setState({ diceNo: random });
  };

  render() {
    return (
      <>
        <div className="dice-container">
          <div className="dice">
            <div className="face">{this.state.diceNo}</div>
          </div>
          <Button variant="contained" onClick={this.rollDice}>
            Roll The Dice
          </Button>
          <Button
            variant="contained"
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
          >
            counter
          </Button>
        </div>
      </>
    );
  }
}

export default ClassDemo;
