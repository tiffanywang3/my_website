var drawMove = function(square, move){
	$(square).removeClass("blank").addClass(move);
};

var generateComputerMove = function(){
	var squares = $(".blank.square");
	var square = squares[Math.floor(Math.random()*squares.length)];
	return square;
};

var newGame = function(){
	$(".blank").click(function(){
		drawMove(this, "x");
		var computerMove = generateComputerMove();
		drawMove(computerMove, "o");
	});
};


var checkEndGame = function(board, move){
	if( ) {
		console.log("Player wins!");
	} else if (){
		console.log("Computer wins!");
	} else{

	}



};


$(document).ready(function(){
	newGame();
});
