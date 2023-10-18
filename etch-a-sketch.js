console.log("`Let's build an awesome project!!!`");

// add 64x64 in grid

document.addEventListener("DOMContentLoaded", function() {
    createBoard(16); //default set at 16
    console.log("hello!")

    let btn_popup = document.querySelector("#popup");
    //if user click the button that will tricker the function that the size of the board will call the function getSize();
    btn_popup.addEventListener("click" , function(){
        let size = getSize();
        createBoard(size);
    });
    
});

//create function called createBoard()
function createBoard(size) {
    let board = document.querySelector(".board");

    //turn 16x16 grid size into variable that user could change later on.
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //create number of div to store size x size, amd look through every divs.
    //make div exit on screen

    // div in columns and rows.
    let numDiv = size * size;

    for (let i = 0; i < numDiv; i++); {
        // to insert element using insertAdjacentElement()
        let div = document.createElement("div");
        div.style.backgroundColor = "gray"; // add color to the div
        board.insertAdjacentElement("beforeend", div);
    }
     
}   

//add user userChoice using window.prompt();
// set min 0 max 100
// so we need to create size choosing function
function getSize() {
    let userChoice = prompt("Enter your size of choice to start the game board!");

    //check if userChoice == "" asked again!
    let message = document.querySelector("#message");
    if(userChoice == "") {
        message.innerHTML = "You didn't enter a number!";
    }
    else if (userChoice <= 0 || userChoice > 100 ) {
        message.innerHTML = "Enter a number between 1-100"
    }
    else {
        message.innerHTML = "Let's play this game!"
        return userChoice;
    }
    console.log(message);
}
