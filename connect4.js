$(document).ready(function() {
	drawBoard();
});

var generateComputerMove = function(){

};

var newGame = function(){

};

var board = [[null,"yellow",null,null,null,null], 
			 [null,null,null,null,null,null], 
			 [null,null,null,null,null,null], 
			 [null,null,null,null,null,null], 
			 [null,null,null,null,null,null], 
			 [null,null,null,null,null,"red"],
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
	$.each(this.board, function(x,column) {
		$.each(column,function(y,square){
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