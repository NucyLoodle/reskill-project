const keys = document.querySelector('.calculator-buttons'); //applied to the whole container not just one button

keys.addEventListener('click', event => {
    //get value of the button clicked
    const {target} = event; //extracts target from the event info
    const {value} = target; //extract the value property from the target ie the number clicked!
    if (!target.matches('button')) { //check the user clicked a button
        return;
    } else {
        //console.log(target)
    }
})

const calculator = {
    displayText: '0', //the value that shows up when you first open calculator
    prevTotal: null, //should store the total from the previous operation

    parseInput(value) { //pass value from button in
        switch (value) { //compare value against several cases
            case '=' : 
                //compute answer
                break;
            case 'AC' : 
                //clear screen and stored values
                break;
            case '.' :
                if (this.displayText === '0') {
                    //pass string of '0.#' into method
                } else {
                    //add decimal to text string
                }
                break;
            default:
                //add value to text string
        }     
    },


    addText(value) {
        if (this.displayText === '0') { //check to see if any 'special' buttons have been clicked
            this.displayText = ''
        } else if (this.prevTotal !== null) {
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        if (/*user has entered an invalid sequence, don't proceed*/) {
            return;
        }
        this.displayText += value
        // output text to screen


    },
}