var drawMove = function(square, move){
	$(square).removeClass("blank").addClass(move);
};

//return DOM elements, not JQuery elements
var generateComputerMove = function(){
	var square = $(".blank.square");
	if (checkComputerMove(square) !== null) {
		checkComputerMove(square)
	} 
	if (checkComputerMove(square) == null) {
	return square[Math.floor(Math.random()*square.length)]		
	}
};

var newGame = function(){
	$(".blank").click(function(){
		gameStatus = checkEndGame();
		if(gameStatus) {
			alert(gameStatus);
			return;
		}
		drawMove(this, "x");
		gameStatus = checkEndGame();
		if(gameStatus) {
			alert(gameStatus);
			return;
		}
		var computerMove = generateComputerMove();
		drawMove(computerMove, "o");
		gameStatus = checkEndGame();
		if(gameStatus) {
			alert(gameStatus);
			return;
		}
	});
};

var checkComputerMove = function(square){
	if($(square[0]).hasClass("x") && 
   	   $(square[1]).hasClass("x") &&
   	   $(square[2]).hasClass("blank")){
		return square[2]
	}
	if($(square[3]).hasClass("x") && 
   	   $(square[4]).hasClass("x") &&
   	   $(square[5]).hasClass("blank")){
		return square[5]
	}
	if($(square[6]).hasClass("x") && 
   	   $(square[7]).hasClass("x") &&
   	   $(square[8]).hasClass("blank")){
		return square[8]
	}
	if($(square[0]).hasClass("x") && 
   	   $(square[3]).hasClass("x") &&
   	   $(square[6]).hasClass("blank")){
		return square[6]
	}
	if($(square[1]).hasClass("x") && 
   	   $(square[4]).hasClass("x") &&
   	   $(square[7]).hasClass("blank")){
		return square[7]
	}
	if($(square[2]).hasClass("x") && 
   	   $(square[5]).hasClass("x") &&
   	   $(square[8]).hasClass("blank")){
		return square[8]
	}
	if($(square[0]).hasClass("x") && 
   	   $(square[4]).hasClass("x") &&
   	   $(square[8]).hasClass("blank")){
		return square[8]
	}
	if($(square[2]).hasClass("x") && 
   	   $(square[4]).hasClass("x") &&
   	   $(square[6]).hasClass("blank")){
		return square[6]
	}
	if($(square[2]).hasClass("x") && 
   	   $(square[1]).hasClass("x") &&
   	   $(square[0]).hasClass("blank")){
		return square[0]
	}
	if($(square[5]).hasClass("x") && 
   	   $(square[4]).hasClass("x") &&
   	   $(square[3]).hasClass("blank")){
		return square[3]
	}
	if($(square[8]).hasClass("x") && 
   	   $(square[7]).hasClass("x") &&
   	   $(square[6]).hasClass("blank")){
		return square[6]
	}
	if($(square[6]).hasClass("x") && 
   	   $(square[3]).hasClass("x") &&
   	   $(square[0]).hasClass("blank")){
		return square[0]
	}
	if($(square[7]).hasClass("x") && 
   	   $(square[4]).hasClass("x") &&
   	   $(square[1]).hasClass("blank")){
		return square[1]
	}
	if($(square[8]).hasClass("x") && 
   	   $(square[5]).hasClass("x") &&
   	   $(square[2]).hasClass("blank")){
		return square[2]
	}
	if($(square[8]).hasClass("x") && 
   	   $(square[4]).hasClass("x") &&
   	   $(square[0]).hasClass("blank")){
		return square[0]
	}
	if($(square[6]).hasClass("x") && 
   	   $(square[4]).hasClass("x") &&
   	   $(square[2]).hasClass("blank")){
		return square[2]
	}
		if($(square[2]).hasClass("x") && 
   	   $(square[0]).hasClass("x") &&
   	   $(square[1]).hasClass("blank")){
		return square[1]
	}
	if($(square[5]).hasClass("x") && 
   	   $(square[3]).hasClass("x") &&
   	   $(square[4]).hasClass("blank")){
		return square[4]
	}
	if($(square[8]).hasClass("x") && 
   	   $(square[6]).hasClass("x") &&
   	   $(square[7]).hasClass("blank")){
		return square[7]
	}
	if($(square[6]).hasClass("x") && 
   	   $(square[0]).hasClass("x") &&
   	   $(square[3]).hasClass("blank")){
		return square[3]
	}
	if($(square[7]).hasClass("x") && 
   	   $(square[1]).hasClass("x") &&
   	   $(square[4]).hasClass("blank")){
		return square[4]
	}
	if($(square[8]).hasClass("x") && 
   	   $(square[2]).hasClass("x") &&
   	   $(square[5]).hasClass("blank")){
		return square[5]
	}
	if($(square[8]).hasClass("x") && 
   	   $(square[0]).hasClass("x") &&
   	   $(square[4]).hasClass("blank")){
		return square[4]
	}
	if($(square[6]).hasClass("x") && 
   	   $(square[2]).hasClass("x") &&
   	   $(square[4]).hasClass("blank")){
		return square[4]
	}
	return null
};

var checkRow = function(squares){
	if($(squares[0]).hasClass("x") && 
	   $(squares[1]).hasClass("x") && 
	   $(squares[2]).hasClass("x")) {
		return "x"
	}
	if($(squares[3]).hasClass("x") && 
	   $(squares[4]).hasClass("x") && 
	   $(squares[5]).hasClass("x")) {
		return "x"
	}
	if($(squares[6]).hasClass("x") && 
	   $(squares[7]).hasClass("x") && 
	   $(squares[8]).hasClass("x")) {
		return "x"
	} 
	if($(squares[0]).hasClass("o") && 
	   $(squares[1]).hasClass("o") && 
	   $(squares[2]).hasClass("o")) {
		return "o"
	}
	if($(squares[3]).hasClass("o") && 
	   $(squares[4]).hasClass("o") && 
	   $(squares[5]).hasClass("o")) {
		return "o"
	}
	if($(squares[6]).hasClass("o") && 
	   $(squares[7]).hasClass("o") && 
	   $(squares[8]).hasClass("o")) {
		return "o"
	} 
	return null;
};

var checkColumn = function(squares){
	if($(squares[0]).hasClass("x") && 
	   $(squares[3]).hasClass("x") && 
	   $(squares[6]).hasClass("x")) {
		return "x"
	}
	if($(squares[1]).hasClass("x") && 
	   $(squares[4]).hasClass("x") && 
	   $(squares[7]).hasClass("x")) {
		return "x"
	}
	if($(squares[2]).hasClass("x") && 
	   $(squares[5]).hasClass("x") && 
	   $(squares[8]).hasClass("x")) {
		return "x"
	} 
	if($(squares[0]).hasClass("o") && 
	   $(squares[3]).hasClass("o") && 
	   $(squares[6]).hasClass("o")) {
		return "o"
	}
	if($(squares[1]).hasClass("o") && 
	   $(squares[4]).hasClass("o") && 
	   $(squares[7]).hasClass("o")) {
		return "o"
	}
	if($(squares[2]).hasClass("o") && 
	   $(squares[5]).hasClass("o") && 
	   $(squares[8]).hasClass("o")) {
		return "o"
	} 
	return null;
};

var checkDiagonal = function(squares){
	if($(squares[0]).hasClass("x") && 
	   $(squares[4]).hasClass("x") && 
	   $(squares[8]).hasClass("x")) {
		return "x"
	}
	if($(squares[2]).hasClass("x") && 
	   $(squares[4]).hasClass("x") && 
	   $(squares[6]).hasClass("x")) {
		return "x"
	}
	if($(squares[0]).hasClass("o") && 
	   $(squares[4]).hasClass("o") && 
	   $(squares[8]).hasClass("o")) {
		return "o"
	}
	if($(squares[2]).hasClass("o") && 
	   $(squares[4]).hasClass("o") && 
	   $(squares[6]).hasClass("o")) {
		return "o"
	} 
	return null;
};

var checkEndGame = function(){
	var squares = $(".square");
	if(checkRow(squares) === "x") {
		return "Player wins!";
	} 
	if (checkRow(squares) === "o"){
		return "Computer wins!";
	}
	if(checkColumn(squares) === "x") {
		return "Player wins!";
	} 
	if (checkColumn(squares) === "o"){
		return "Computer wins!";
	}
	if(checkDiagonal(squares) === "x") {
		return "Player wins!";
	} 
	if (checkDiagonal(squares) === "o"){
		return "Computer wins!";
	}
	return null;
};

$(document).ready(function(){
	newGame();

});
