console.log("`Let's build an awesome project!!!`");

// add 64x64 in grid

document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);
    getSize()
    console.log("hello!")
    
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

//add user input using window.prompt();
// set min 0 max 100
// so we need to create size choosing function
function getSize() {
    let userChoice = prompt("Enter your size of choice to start the game board!");
}
