// Prompt user for grid size function
let userInput = 10;
function promptUser(){
    let message = "What size of grid would you like? (MIN 10) (Max 100)"
    do {
        userInput = prompt(message, 10)
        console.log(userInput);
        userInput = parseInt(userInput);
    } while (userInput <= 10 || userInput >= 100 || isNaN(userInput));
}

document.addEventListener("DOMContentLoaded", function() {

const container = document.querySelector("#container");
const square = document.createElement("div");
container.appendChild(square);
square.setAttribute("class", "square");

});