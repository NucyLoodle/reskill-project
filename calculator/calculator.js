const display = document.querySelector(".display");
const buttons = document.querySelectorAll('button');

// performs an action when button is clicked
// change calculator display
function button_pressed() {
    // add event listener for each button click
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // allow user to clear display
            if (button.textContent === 'AC') {
                display.textContent = '0'            
            // update display by replacing the 0 value
            } else if (display.textContent === '0') {
                display.textContent = button.textContent
            // update display with operations
            } else if (button.textContent != '=') {
                display.textContent += button.textContent           
            // compute calculation
            } else {
                calculation = display.textContent
                // catch errors from user input
                try {
                    solution = eval(calculation)
                    display.textContent = solution                    
                } catch (error) {
                    display.textContent = "This is not a valid calculation."                    
                }   
            }           
        });
    });
}
button_pressed()