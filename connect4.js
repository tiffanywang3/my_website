var drawMove = function(square, move){
	$(square).removeClass("blank").addClass(move);
};

var generateComputerMove = function(){
	var blankSquares = $(".blank.square");
	var squares = $(".square");
	var firstMove = blankSquares[Math.floor(Math.random()*blankSquares.length)];
	return firstMove;
};

var newGame = function(){
	$(".blank").click(function(){
		drawMove(this, "red");
		var computerMove = generateComputerMove();
		drawMove(computerMove, "yellow");
	});
};

var board = [[null,null,null,null,null,null,null], 
			 [null,null,null,null,null,null,null], 
			 [null,null,null,null,null,null,null], 
			 [null,null,null,null,null,null,null], 
			 [null,null,null,null,null,null,null], 
			 [null,null,null,null,null,null,null]];

var drawBoard = function(){
	var boardUI = $(".board")
	$.each(this.board, function(x,row)) {
		$.each(row,function(y,square){
			this.drawSquare(x,y,square);
		});
	};
};

var computerChoice = Math.random();
if(computerChoice < 0.34) {
	computerChoice = /* computer picks the a random square between 35 and 41*/
} else if(computerChoice <=)

$(document).ready(function(){
	newGame();

});
