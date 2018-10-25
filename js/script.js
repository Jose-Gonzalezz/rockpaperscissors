// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function() {
    $("#userChoice").text($("#input").val())
    $('#computerChoice').text(computerchoice)
    
    if(Math.random() > .9){
    $("#computerChoice").html("Rock")}
    else if(Math.random() > .6) {
    $("#computerChoice").html("Paper") }
    else if(Math.random() > .3){
    $("#computerChoice").html("Scissors")
    }
});

var computerchoice="";

var userChoice="";

var winner="";

var randomNumber="0";

