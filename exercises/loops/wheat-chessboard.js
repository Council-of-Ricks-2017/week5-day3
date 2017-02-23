var squares = 64;
var grains = 0;

function totalGrains(squares, grains) {

	for (i = 0; i < squares; i++) {
		grains += Math.pow(2, i);
	}
	return grains;

}

console.log("There are " + totalGrains(squares, grains) + " grains of wheat on a chessboard")