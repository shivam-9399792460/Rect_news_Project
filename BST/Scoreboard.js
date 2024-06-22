// According to create class component of ScoreBoard.

import { Component } from "react";

export class Scoreboard extends Component {
    constructor() {
        super();
        this.state = {
            score: 0
        }

    }
    handlePlusClick = () => {
        this.setState({ score: this.state.score + 1 });
    }
    handleSubClick = () => {
        this.setState({ score: this.state.score - 1 });
    }
    render() {
        return (
            <>
                <h1>{this.state.score}</h1>
                <button type="button" value="+" onClick={this.handlePlusClick}>+</button>
                <button type="button" value="-" onClick={this.handleSubClick}>-</button>
            </>
        )
    }
}