import React, { Component } from 'react';

import Square from './Square'
import './Board.css'


//newGame function returns original states of the game board, player, and "win"
function newGame() {
	return {
		gameArr: ["", "", "", "", "", "", "", "", "",]
		player: "X",
		win: ""
	}
}

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = newGame()	// starts with newGame
	}

}
//handleClick will keep input and show the user updated tic-tac-toe grid.
handleClick (e) {
	console.log(e.target);
}


winningCombo(){
  
}

gameCheck(){
	let newPlayer = this.state.player == "X" ? "O" : "X"
	this.setState({player.newPlayer})

	for(i=0; i < 6; i++) {	// smaller than 6 because over 6 equals a tie
		//if statement to check for win
		if {

		}
		//check if game is won
		else if () {

		}
		//else if statement to check for tie
		else if (i = 6) {
			return "It's a draw!"
		}
}

//ties an index number to each square
	render() {
		return (
			<main>
			<div className="square" id="0" onClick={this.handleClick}> {this.state.gameArr[0]} </div>
			<div className="square" id="1" onClick={this.handleClick}> {this.state.gameArr[1]} </div>
			<div className="square" id="2" onClick={this.handleClick}> {this.state.gameArr[2]} </div>
		</div>
		<div className="row">
			<div className="square" id="3" onClick={this.handleClick}> {this.state.gameArr[3]} </div>
			<div className="square" id="4" onClick={this.handleClick}> {this.state.gameArr[4]} </div>
			<div className="square" id="5" onClick={this.handleClick}> {this.state.gameArr[5]} </div>
		</div>
		<div className="row">
			<div className="square" id="6" onClick={this.handleClick}> {this.state.gameArr[6]} </div>
			<div className="square" id="7" onClick={this.handleClick}> {this.state.gameArr[7]} </div>
			<div className="square" id="8" onClick={this.handleClick}> {this.state.gameArr[8]} </div>
			</main>
		);
	}
}

export default Board;
