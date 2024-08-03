const keys = document.querySelector('.calculator-buttons');

keys.addEventListener('click', event => {
    // get value of the button clicked and pass value on
    const {target} = event; //extracts target from the event info
    const {value} = target; //extract the value property from the target ie the number clicked!
    if (!target.matches('button')) { //check the user clicked a button
        return;
    } else {
        console.log()
    }
})