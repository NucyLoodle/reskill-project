const container = document.querySelector("operations");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll('button');



// performs an action when button is clicked
// change calculator display
function button_pressed() {
    //console.log(item);
    // gets id from each button
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // update display by replacing the 0 value
            if (display.textContent === '0') {
                display.textContent = button.textContent
            // update display with operations
            } else if (button.textContent != '=') {
                display.textContent += button.textContent
            } else {
                calculation = display.textContent
                solution = eval(calculation)
                display.textContent = solution
            }
            
        });
    });
}

button_pressed()