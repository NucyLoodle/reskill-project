const container = document.querySelector("operations");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll('button');
let currentNum = display.textContent


// performs an action when button is clicked
// change calculator display
function button_pressed(item) {
    console.log(item);
    if (currentNum === '0') {
        display.textContent = item
    }
}

// gets id from each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button_pressed(button.textContent)
        
    });
});


