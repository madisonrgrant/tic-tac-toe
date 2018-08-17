import React, { Component } from 'react';

import Square from './Square'
import './Board.css'


class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
		gameArr: ["", "", "", "", "", "", "", "", ""],
		player: "X",
		count: 0,
	}

}
//handleClick will keep input and show the user updated tic-tac-toe grid.
// handleClick (e) {
// 	console.log(e.target);
// }


gameCheck(id) {
	console.log(id)
	let updatedGameArr = this.state.gameArr
	updatedGameArr[id] = this.state.player
		if(this.state.count === 8) {
			alert ("it's a draw!")
		}
		//else if statement to check for win
		else if (this.state.count >= 4) {
			this.winCheck()
		}
		//toggles player from x and o
		let newPlayer = this.state.player == "X" ? "O" : "X"
		this.setState({player:newPlayer, count: this.state.count + 1, gameArr: updatedGameArr})

}

//checks if gameArr is at a win.
winCheck() {
	let {gameArr} = this.state
	// winning combinations for the gameArr
	const win = [
     ['0', '1', '2'],
     ['3', '4', '5'],
     ['6', '7', '8'],
     ['0', '3', '6'],
     ['1', '4', '7'],
     ['2', '5', '8'],
     ['0', '4', '8'],
     ['2', '4', '6']
   ]
	 //looks at winSet to see if winning combinations match gameArr
	 for (let i=0; i < win.length; i++) {
		 var winSet = win[i]
		 	if (gameArr[winSet[0]] === gameArr[winSet[1]] && gameArr[winSet[1]] === gameArr[winSet[2]]) {
				alert ("Winner!")
				return this.reset()
			}

		}
}

reset() {

	this.setState({
		gameArr: ["", "", "", "", "", "", "", "", ""],
		player: "X",
		count: 0,})
}

//ties an index number to each square
	render() {
		return (
			<main>
				<div className ="row">
					<div className="square" onClick={this.gameCheck.bind(this, 0)}> {this.state.gameArr[0]} </div>
					<div className="square" onClick={this.gameCheck.bind(this, 1)}> {this.state.gameArr[1]} </div>
					<div className="square" onClick={this.gameCheck.bind(this, 2)}> {this.state.gameArr[2]} </div>
				</div>
				<div className="row">
					<div className="square" onClick={this.gameCheck.bind(this, 3)}> {this.state.gameArr[3]} </div>
					<div className="square" onClick={this.gameCheck.bind(this, 4)}> {this.state.gameArr[4]} </div>
					<div className="square" onClick={this.gameCheck.bind(this, 5)}> {this.state.gameArr[5]} </div>
				</div>
				<div className="row">
					<div className="square" onClick={this.gameCheck.bind(this, 6)}> {this.state.gameArr[6]} </div>
					<div className="square" onClick={this.gameCheck.bind(this, 7)}> {this.state.gameArr[7]} </div>
					<div className="square" onClick={this.gameCheck.bind(this, 8)}> {this.state.gameArr[8]} </div>
				</div>
			</main>
		);
	}

}


export default Board;
