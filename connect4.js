$(document).ready(function() {
	drawBoard();
});

var generateComputerMove = function(){

};

var newGame = function(){

};

var board = [[null,null,null,null,null,null], 
			 [null,null,null,null,null,null], 
			 [null,null,null,null,null,null], 
			 [null,null,null,null,null,null], 
			 [null,null,null,null,null,null], 
			 [null,null,null,null,null,null],
			 [null,null,null,null,null,null]];

var drawSquare = function(x,y,symbol) {
    if(symbol === null) symbol = "blank";
    var squareSelector = "[data-index-x='"+ x + "'][data-index-y='"+ y + "']";
    var square = $(squareSelector);
    square.removeClass("blank");
    square.removeClass("red");
    square.removeClass("yellow");
    square.addClass(symbol);
};

var drawBoard = function(){
	var boardUI = $(".board")
	$.each(board, function(x,column) {
		debugger;
		$.each(column,function(y,square){
			debugger;
			drawSquare(x,y,square);
		});
	});
};


/*
var computerChoice = Math.random();
if(computerChoice < 0.34) {
	computerChoice = // computer picks the a random square between 35 and 41
} else if(computerChoice <=)

$(document).ready(function(){
	newGame();

});
*/