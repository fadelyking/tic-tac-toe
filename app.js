//An object to control the flow of the game
function TicGame() {
	// Gameboard module with a board array inside of it to store the value of each position
	const gameBoard = (() => {
		let i = 0;
		let board = Array(9).fill("x");
		return board;
	})();

	// Display Controller
	const displayController = (() => {
		// Generate squares based on the array length
		const container = document.querySelector(".container");

		const firstRow = document.createElement("div");
		firstRow.classList.add("first-row");

		const secondRow = document.createElement("div");
		secondRow.classList.add("second-row");

		const thirdRow = document.createElement("div");
		thirdRow.classList.add("third-row");

		for (let i = 0; i <= gameBoard.length - 1; i++) {
			if (3 > i) {
				container.appendChild(firstRow);
				const square = document.createElement("div");
				square.classList.add(`square-${i}`);
				square.textContent = `${gameBoard[i]} - ${i}`;
				firstRow.appendChild(square);
				console.log(firstRow);
			} else if (3 <= i && 6 > i) {
				container.appendChild(secondRow);
				const square = document.createElement("div");
				square.classList.add(`square-${i}`);
				square.textContent = `${gameBoard[i]} - ${i}`;
				secondRow.appendChild(square);
			} else {
				container.appendChild(thirdRow);
				const square = document.createElement("div");
				square.classList.add(`square-${i}`);
				square.textContent = `${gameBoard[i]} - ${i}`;
				thirdRow.appendChild(square);
			}
		}
	})();

	// Factory function to create players
	const Player = (name) => {
		const getName = () => name;
		return { getName };
	};

	const fadely = Player("Fadely");
}

TicGame();
