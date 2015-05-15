$(document).ready(function() {
	resetGame();
	$('.reset').on('click', function(){
		resetGame();
	});
});

function resetGame() {
	document.getElementById("rock").style.display = "none";
    document.getElementById("paper").style.display = "none";
   	document.getElementById("scissors").style.display = "none";
	document.getElementById("compRock").style.display = "none";
	document.getElementById("compPaper").style.display = "none";
	document.getElementById("compScissors").style.display = "none";
	userPick();
};

function turnOffClickHandlers() {
	$('.rock').off('click');
	$('.paper').off('click');
	$('.scissors').off('click');
}

// userMove will be "rock", "paper" or "scissors"
function executeMove(userChoice) {
	document.getElementById(userChoice).style.display = "block";
	turnOffClickHandlers();
	var computerChoice = computerPick();
	compare(userChoice, computerChoice); 
}

function userPick(){
	$('.rock').on('click', function() {
		executeMove("rock");
    });
    $('.paper').on('click', function() {
		executeMove("paper");
    });
    $('.scissors').on('click', function() {
		executeMove("scissors");
    });
};

function computerPick() {
	var computerChoice = null;
	var computerRand = Math.random();
	if (computerRand <= 0.34) {
		document.getElementById("compRock").style.display = "block";
		document.getElementById("compPaper").style.display = "none";
		document.getElementById("compScissors").style.display = "none";
		computerChoice = "rock";
	} else if(computerRand >= 0.67) {
		document.getElementById("compPaper").style.display = "block";
		document.getElementById("compRock").style.display = "none";
		document.getElementById("compScissors").style.display = "none";
		computerChoice = "paper";
	} else {
		document.getElementById("compScissors").style.display = "block";
		document.getElementById("compRock").style.display = "none";
		document.getElementById("compPaper").style.display = "none";
		computerChoice = "scissors";
	}
	return computerChoice;
};


function compare(choice1, choice2) {
    if(choice1 === choice2) {
        alert("It's a tie!"); 
    } else if(choice1 === "rock") { 
        if(choice2 === "scissors") { 
            alert("Player 1 wins!");
        } else {
            alert("Computer wins!");
        }
    } else if(choice1 === "paper") {
        if(choice2 === "rock") {
            alert("Player 1 wins!");
        } else {
            alert("Computer wins!");
        }
    } else if(choice1 === "scissors"){
        if(choice2 === "rock") {
            alert("Computer wins!");
        } else {
            alert("Player 1 wins!");
        }
    }
};

/*$(document).ready(function() {
	userPick();
	resetGame();
});


function userPick(){
	$('.rock').on('click', function() {
    	document.getElementById("rock").style.display = "block";
    	$('.paper').off('click');
    	$('.scissors').off('click');
    	computerPick();
		compare(userChoice, computerChoice);    	
    });
    $('.paper').on('click', function() {
    	document.getElementById("paper").style.display = "block";
    	$('.rock').off('click');
    	$('.scissors').off('click');
    	computerPick();
    	compare(userChoice, computerChoice);
    });
    $('.scissors').on('click', function() {
    	document.getElementById("scissors").style.display = "block";
    	$('.paper').off('click');
    	$('.rock').off('click');
    	computerPick();
    	compare(userChoice, computerChoice);
    });
};

function computerPick() {
	var computerRand = Math.random();
	if (computerRand <= 0.34) {
		document.getElementById("compRock").style.display = "block";
		document.getElementById("compPaper").style.display = "none";
		document.getElementById("compScissors").style.display = "none";
	} else if(computerRand >= 0.67) {
		document.getElementById("compPaper").style.display = "block";
		document.getElementById("compRock").style.display = "none";
		document.getElementById("compScissors").style.display = "none";
	} else {
		document.getElementById("compScissors").style.display = "block";
		document.getElementById("compRock").style.display = "none";
		document.getElementById("compPaper").style.display = "none";
	}
};


function resetGame() {
	$('.reset').on('click', function(){
		document.getElementById("rock").style.display = "none";
	    document.getElementById("paper").style.display = "none";
	   	document.getElementById("scissors").style.display = "none";
		document.getElementById("compRock").style.display = "none";
		document.getElementById("compPaper").style.display = "none";
		document.getElementById("compScissors").style.display = "none";
		userPick();
	});

};
var rock = $("#rock").attr("id");
var paper = $("#paper").attr("id");
var scissors = $("#scissors").attr("id");
var compRock = $("#compRock").attr("id");
var compPaper = $("#compPaper").attr("id");
var compScissors = $("#compScissors").attr("id");

var userChoice = userPick();
var computerChoice = computerPick();

function compare(choice1, choice2) {
	if(choice1===rock && choice2===compRock) {
		alert("It's a tie!");
	} else if(choice1===paper && choice2===compPaper) {
		alert("It's a tie!");
	} else if(choice1===scissors && choice2===compScissors) {
		alert("It's a tie!");
	} else {

	};
};

/*		
	} else if(choice1 === "#rock") {
		if(choice2 === "#compPaper") {
			alert("Computer wins!");	
		} else if (choice2 ==="#compScissors") {
			alert("Player 1 wins!");
		} else {
			alert("Something's gone wrong!");
		};
	} else if( choice1=== "#paper") {
		if(choice2==="#compScissors") {
			alert("Computer wins!");
		} else if(choice2==="#compRock") {
			alert("Player 1 wins!");
		} else {
			alert("Something's gone wrong!");
		};
	} else if(choice1==="#scissors") {
		if(choice2==="#compRock"){
			alert("Computer wins!");	
		} else if (choice2==="#compPaper") {
			alert("Player 1 wins!");
		} else {
			alert("Something's gone wrong!");
		};
	} else {
	}
};

/*function compare(choice1, choice2) {
	if(choice1==="#rock" && choice2==="#compRock") {
		alert("It's a tie!");
	} else if(choice1==="#paper" && choice2==="#compPaper") {
		alert("It's a tie!");
	} else if(choice1==="#scissors" && choice2==="#compScissors") {
		alert("It's a tie!");
	} else if(choice1 === "#rock") {
		if(choice2 === "#compPaper") {
			alert("Computer wins!");	
		} else if (choice2 ==="#compScissors") {
			alert("Player 1 wins!");
		} else {
			alert("Something's gone wrong!");
		};
	} else if( choice1=== "#paper") {
		if(choice2==="#compScissors") {
			alert("Computer wins!");
		} else if(choice2==="#compRock") {
			alert("Player 1 wins!");
		} else {
			alert("Something's gone wrong!");
		};
	} else if(choice1==="#scissors") {
		if(choice2==="#compRock"){
			alert("Computer wins!");	
		} else if (choice2==="#compPaper") {
			alert("Player 1 wins!");
		} else {
			alert("Something's gone wrong!");
		};
	} else {
	}
};


/*$(document).ready(function() {
	userPick();
	computerPick();
});

function userPick(){
    $('.rock').on('click', function() {
    	$("#loadingImage").toggle();
    });
    $('.paper').on('click', function() {
    	$("#loadingImage1").toggle();
    });
    $('.scissors').on('click', function() {
    	$("#loadingImage2").toggle();
    });
};

function computerPick() {
	var computerRand = Math.random();
	if (computerRand < 0.34) {
		document.getElementById("loadingImage3").style.display = "block";
	} else if(computerRand > 0.67) {
		document.getElementById("loadingImage4").style.display = "block";
	} else {
		document.getElementById("loadingImage5").style.display = "block";	
	}
};


/*$(document).ready(function() {
    $('.rock').on('click', function() {
        var img = $('<img /images/rock.png>');
        $('.showimagediv').html(img).show();
    });
});

var playerPick = function(){
	if ($('.rock').hasClass('active') === true){
		playerChoice = "rock"
	} if ($('.paper').click === true){
		playerChoice = "paper"
	} if ($('.scissors').click === true){
		playerChoice = "scissors"
	}
};

var computerPick = Math.random();
if(computerPick < 0.34){
	computerChoice = rock
}

var compare = function(playerChoice, computerChoice) {

}



/* CODECADEMY GAME
var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerRand = Math.random();
if (computerRand < 0.34) {
	computerChoice = "rock";
} else if(computerRand > 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);


var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "Please make a new selection"; 
    } else if(choice1 === "rock") { 
        if(choice2 === "scissors") { 
            return "Rock wins!"
        } else {
            return "Paper wins!"
        }
    } else if(choice1 === "paper") {
        if(choice2 === "rock") {
            return "Paper wins!"
        } else {
            return "Scissors wins!"
        }
    } else if(choice1 === "scissors"){
        if(choice2 === "rock") {
            return "Rock wins!"
        } else {
            return "Scissors wins!"
        }
    } else
    
};

compare(userChoice, computerChoice)*/

