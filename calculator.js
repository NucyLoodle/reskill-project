const container = document.querySelector("operations");
const display = document.createElement('div');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button_pressed(button.textContent)
    
    });
});

function button_pressed(item) {
    console.log(item);
}