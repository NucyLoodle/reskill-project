const operations = document.querySelector("operations");
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
            // prevent user from entering more than one operation at a time
            // pass
            } else {
                calculation = display.textContent
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