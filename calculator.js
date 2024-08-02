const container = document.querySelector("operations");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll('button');



// performs an action when button is clicked
// change calculator display
function button_pressed() {
    //console.log(item);
    
}

// gets id from each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.textContent === '0') {
            display.textContent = button.textContent
        } else {
            display.textContent += button.textContent
        }
        
    });
});


