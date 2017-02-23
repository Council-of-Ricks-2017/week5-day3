function jsWheatAndChessboard(square) {
  for (var i=1; i<=square; i++) {
    total = Math.pow(2, i) -1;
  }
  if (total === 18446744073709552000) {
    console.log("that's correct: " + total);
  }
  else {
    console.log("that's incorrect");
  }
}
jsWheatAndChessboard(64);


//doesn't work
function recursiveWheatAndChessboard(square) {
  if (square <=2) {
    return 1;
  }
  else {
    return recursiveWheatAndChessboard(square-1) + recursiveWheatAndChessboard(square-2);
  }
}
recursiveWheatAndChessboard(5);
