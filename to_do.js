$(document).ready(function(){
	$("#description").focus();
	document.getElementById("description").onkeyup = function(event){
		if (event.which == 13) {
			addItem();
		};
	};
	$("#add").click(addItem);
	
});

function addItem() {
	var newItem = $("#description").val();	
	if (newItem.length !== 0) {
		$("#todoList").append("<li> <input type='checkbox' id='myCheck' class='todo'>" + newItem + "</li>");
		document.getElementById("description").value = "";
	};
	$("#description").focus();
	checkDone();
};

function checkDone() {
    var x = document.getElementById("myCheck").checked;
    if (x == true) {
    	alert("Congrats it's done!");
    };
};

/*
THIS IS THE JUNK THAT DOESN'T WORK BUT REPRESENTS SOME OF THE WORK I PUT INTO THIS TODO LIST:D
function clearAll() {
	var removeList = document.getElementById("todoList");
	if (removeList.length > 0) {
	    removeList.remove(removeList.length);
	};	
};

//This is how each list item should look: 
//<li><input type="checkbox"/>Figure out how to code a To-Do list!</li>

/*var addButton = document.getElementById("add");
addButton.onclick = function() {
	alert("this button is working at least");
	var itemDescription = itemDescriptionText.value;
	if (!itemDescription || itemDescription == " " || itemDescription == ""){
		return false;

/*if you want to have users be able to enter their items by hitting the enter key instead of the add button
itemDescriptionText.onkeyup = function(event){
	if (event.which ==13 )

}	
====This will figure out the value of the enter key, which was 13 in the tutorial
var itemDescription = event.which;*/