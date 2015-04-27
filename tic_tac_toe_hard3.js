var checkTopRow = function() {
	if($(squares[0]).hasClass("x") && 
	   $(squares[1]).hasClass("x") && 
	   $(squares[2]).hasClass("blank")) {
		return squares[2]
	}
	if($(squares[2]).hasClass("x") && 
	   $(squares[1]).hasClass("x") && 
	   $(squares[0]).hasClass("blank")) {
		return squares[0]
	}
	if($(squares[0]).hasClass("x") && 
	   $(squares[2]).hasClass("x") && 
	   $(squares[1]).hasClass("blank")) {
		return squares[1]
	}
	return null;
};

//////////////////////////////////////

// GOAL: If there are 2 in a row, return the 3rd blank square.
// 	Method 1 (Prove it):
//		- Count 2 squares of type symbol
//		- Count 1 blank square
//		-	If proved, return blank square
//
// Method 2 (Disprove it):
// 		- Count less than 2 squares of type symbol
//		- Count more than 1 blank squares
//
var proveTwoInARowEachLoop = function(squares, symbol) {
	var symbolCount = 0;
	var blankCount = 0;
	var blankSquare = null;
	$.each(squares, function(i, square) {
		if($(square).hasClass(symbol)) {
			symbolCount += 1;
		}
		if($(square).hasClass("blank")) {
			blankCount += 1;
			blankSquare = square;
		}
	});
	if(blankCount == 1 && symbolCount == 2) {
		return blankSquare;
	}
	return null;
};

var proveTwoInARowForLoop = function(squares, symbol) {
	var symbolCount = 0;
	var blankCount = 0;
	var blankSquare = null;
	for(var i = 0; i < squares.length; ++i) {
		var square = squares[i];
		if($(square).hasClass(symbol)) {
			symbolCount += 1;
		}
		if($(square).hasClass("blank")) {
			blankCount += 1;
			blankSquare = square;
		}	
	}
	if(blankCount == 1 && symbolCount == 2) {
		return blankSquare;
	}
	return null;
};



var disproveTwoInARow = function(squares, symbol) {
	var blankSquare = null;
	var fail = false;
	$.each(squares, function(i, square) {
		if($(square).hasClass("blank")) {
			if(blankSquare) {
				debugger;
				fail = true;
				return false;
			}
			blankSquare = square;
		} else if(!$(square).hasClass(symbol)) {
			debugger;
			fail = true;
			return false;
		}
	});
	if(fail) {
		return null;
	}
	return blankSquare;
};

function disproveTwoInARow(squares, symbol) {

}

var computerTryWin = function() {
	var winMove = null;
	var squares = $(".square");
	if(winMove = twoInARow([squares[0], squares[1], squares[2], "o") {
		return winMove;
	}
	if(winMove = twoInARow([squares[0], squares[3], squares[6]], "o") {
		return winMove;
	}
};
