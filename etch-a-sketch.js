console.log("`Let's build an awesome project!!!`");

//make click function 
// add 64x64 in grid

document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);
    console.log("hello!")
});

//create function called createBoard()
function createBoard(size) {
    let board = document.querySelector(".board");

    //turn 16x16 grid size into variable that user could change later on.
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

}