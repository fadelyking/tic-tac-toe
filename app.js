//An object to control the flow of the game
function TicGame() {
	// Gameboard module with a board array inside of it to store the value of each position
	const gameBoard = (() => {
		let board = Array(9).fill("");
		return board;
	})();

	console.log(gameBoard);

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

		// Each row takes up to three squares
		function generateSquares() {
			for (let i = 0; i <= gameBoard.length - 1; i++) {
				if (3 > i) {
					container.appendChild(firstRow);
					const square = document.createElement("div");
					square.classList.add(`square-${i}`);
					square.setAttribute("data-index", `${i}`);
					square.textContent = `${gameBoard[i]}`;
					firstRow.appendChild(square);
				} else if (3 <= i && 6 > i) {
					container.appendChild(secondRow);
					const square = document.createElement("div");
					square.classList.add(`square-${i}`);
					square.textContent = `${gameBoard[i]}`;
					square.setAttribute("data-index", `${i}`);
					secondRow.appendChild(square);
				} else {
					container.appendChild(thirdRow);
					const square = document.createElement("div");
					square.classList.add(`square-${i}`);
					square.textContent = `${gameBoard[i]}`;
					square.setAttribute("data-index", `${i}`);
					thirdRow.appendChild(square);
				}
			}
		}
		generateSquares();

		// Winning Function
		function winX() {
			const body = document.querySelector("body");
			if (
				(gameBoard[1] === gameBoard[2] &&
					gameBoard[2] === gameBoard[3] &&
					gameBoard[1] === "X") ||
				(gameBoard[4] === gameBoard[5] &&
					gameBoard[5] === gameBoard[6] &&
					gameBoard[4] === "X") ||
				(gameBoard[6] === gameBoard[7] &&
					gameBoard[7] === gameBoard[8] &&
					gameBoard[6] === "X") ||
				(gameBoard[1] === gameBoard[4] &&
					gameBoard[4] === gameBoard[7] &&
					gameBoard[1] === "X") ||
				(gameBoard[2] === gameBoard[5] &&
					gameBoard[5] === gameBoard[8] &&
					gameBoard[2] === "X") ||
				(gameBoard[3] === gameBoard[6] &&
					gameBoard[6] === gameBoard[9] &&
					gameBoard[3] === "X") ||
				(gameBoard[1] === gameBoard[5] &&
					gameBoard[5] === gameBoard[9] &&
					gameBoard[1] === "X") ||
				(gameBoard[3] === gameBoard[5] &&
					gameBoard[5] === gameBoard[7] &&
					gameBoard[3] === "X")
			) {
				alert("X is the winner");
				gameBoard.fill("");
			}
		}

		function winO() {
			if (
				(gameBoard[1] === gameBoard[2] &&
					gameBoard[2] === gameBoard[3] &&
					gameBoard[1] === "O") ||
				(gameBoard[4] === gameBoard[5] &&
					gameBoard[5] === gameBoard[6] &&
					gameBoard[4] === "O") ||
				(gameBoard[6] === gameBoard[7] &&
					gameBoard[7] === gameBoard[8] &&
					gameBoard[6] === "O") ||
				(gameBoard[1] === gameBoard[4] &&
					gameBoard[4] === gameBoard[7] &&
					gameBoard[1] === "O") ||
				(gameBoard[2] === gameBoard[5] &&
					gameBoard[5] === gameBoard[8] &&
					gameBoard[2] === "O") ||
				(gameBoard[3] === gameBoard[6] &&
					gameBoard[6] === gameBoard[9] &&
					gameBoard[3] === "O") ||
				(gameBoard[1] === gameBoard[5] &&
					gameBoard[5] === gameBoard[9] &&
					gameBoard[1] === "O") ||
				(gameBoard[3] === gameBoard[5] &&
					gameBoard[5] === gameBoard[7] &&
					gameBoard[3] === "O")
			) {
				alert("O is the Winner");
				/* gameBoard.fill(""); */
			}
		}

		// Push value to array on click
		let activePlayer = 0;
		const squareClick = container.addEventListener("click", (e) => {
			console.log(activePlayer);
			let number = e.target.getAttribute(`data-index`);
			if (activePlayer === 0 && e.target.textContent !== "O") {
				e.target.textContent = "X";
				gameBoard[parseInt(number) + 1] = "X";

				// Switch Active Player
				activePlayer = activePlayer === 0 ? 1 : 0;
			} else if (activePlayer === 1 && e.target.textContent !== "X") {
				e.target.textContent = "O";
				gameBoard[parseInt(number) + 1] = "O";

				// Switch Active Player
				activePlayer = activePlayer === 0 ? 1 : 0;
			}

			// Calculate how many times X or O were clicked
			let xCount = 0;
			let oCount = 0;
			for (option of gameBoard) {
				if (option === "X") {
					xCount++;
				} else if (option === "O") {
					oCount++;
				}
			}
			console.log(oCount, xCount);
			if (winX()) {
				return winX();
			} else if (winO()) {
				return winO();
				// Return tie based on the x/o count
			} else if (xCount === 5 && oCount === 4) {
				alert("TIE");
			}
			winX();
			winO();
			console.log(gameBoard);
		});
	})();

	// Factory function to create players

	function GameController(playerOne = Player("Fadely"), playerTwo = Player("Fadals")) {
		const board = gameBoard();
	}
	const Player = (name) => {
		const getName = () => name;
		return { getName };
	};
}

TicGame();
