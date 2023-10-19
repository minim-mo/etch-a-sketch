console.log("`Let's build an awesome project!!!`");

//set global variable for click
let click = false;
//set a global variable for color as black(default color)
let color = "black";

// add 64x64 in grid

document.addEventListener("DOMContentLoaded", function() {
    createBoard(16); //default set at 16
    console.log("hello!")

   document.querySelector("body").addEventListener("click", function(e){
    // check if it's a button or not.
    if (e.target.tagname != "BUTTON") {
        // if  click is TRUE = !true = false then we're going to click to be able to start drawing on the color that got pick(clicked button).
        click = !click;
        let draw = document.querySelector("#draw");
        if (click) {
            draw.innerHTML = "Enjoy drawing! select color button for more fun!"
        }
        else {
            draw.innerHTML = "Click anywhere to start drawing"
        }
    }
   });

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

    //create number of div to store size x size, amd look through every div.
    //make div exit on screen

    // div in columns and rows.
    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        // to insert element using insertAdjacentElement()
        let div = document.createElement("div");
        // div.style.backgroundColor = "gray"; // add color to the div to test color
        // add hover effect when mouse hovering. || drawing function
        // adding colorDiv function for select different colors.
        div.addEventListener("mouseover", colorDiv);
        // function() {
        //     div.style.backgroundColor = "black";
        // });
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

function colorDiv() {
    if(click) {
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        this.style.backgroundColor = "black";
    }
    }

}

function setColor(colorChoice) {
     color = colorChoice;
}

function resetGame() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}