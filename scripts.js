// Prompt user for grid size function
let userInput = 10;
function promptUser(){
    let message = "What size of grid would you like? (MIN 10) (Max 100)"
    do {
        input = prompt(message, 10)
        // If user clicks cancel, exit the window
        if(input === null){
            console.log("Cancelled");
            return;
        }
        userInput = parseInt(input);
        console.log(userInput);

    } while (userInput < 10 || userInput > 100 || isNaN(userInput));
}

document.addEventListener("DOMContentLoaded", function() {

const container = document.querySelector("#container");
const square = document.createElement("div");
container.appendChild(square);
square.setAttribute("class", "square");

});