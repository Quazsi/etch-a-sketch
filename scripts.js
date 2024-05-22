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
        drawGrid(userInput);

    } while (userInput < 10 || userInput > 100 || isNaN(userInput));
}

function drawGrid(userInput){
    container.innerHTML = '';
    for (let index = 0; index < userInput; index++) {
        const row = document.createElement('div')
        for (let index = 0; index < userInput; index++) {
            const square = document.createElement("div");
            row.appendChild(square);
            square.setAttribute("class", "square")
   
        }
        container.appendChild(row);
    }
}
document.addEventListener("DOMContentLoaded", function() {
const container = document.querySelector("#container");
drawGrid(userInput);
});