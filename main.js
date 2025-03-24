/* I was trying to get the calculator to work with event listeners
but I couldn't get it to work */


// const numButtons = document.getElementsByClassName('buttons')
// const opButtons = document.getElementsByClassName('opButtons')
// const equals = document.getElementById('equals')
 
// numButtons.addEventListener('click', e => {
//     textValue = e.value
// })

// equals.addEventListener('click', (textValue) => {
//     if (textValue === Number || textValue === opButtons){
        
//     } else {
//         textValue += 'ERROR NaN'
//     }
// })


const textBox = document.getElementById('textBox')


// Function that will display the button pressed
const display = input => {
    textBox.value += input
}


//Function that will clear the textBox
const clearDisplay = () => {
    textBox.value = ''
}

// Function that will act as a backspace/delete key
const backspace = () => {
    textBox.value = textBox.value.slice(0, textBox.value.length - 1)

}

//Function that Solves the given equation
const solve = () => {
    try{
        textBox.value = eval(textBox.value)
    } catch(error) {
        // I want to add more detailed errors later like NaN or undefined or something
        textBox.value = 'Error'
    }
}


//Keyboard Shortcuts
textBox.addEventListener('keydown', input => {
    if (input.code === 'Enter'){
        //Enter/return solves equation
        solve()
    } else if (input.code === 'Escape'){
        //Esc key clears textBox
        clearDisplay()
    }
})

//Trying to limit textBox to only allow numbers & certain characters
//Chatgpt helped with this section of code
textBox.addEventListener('input', () => {
    textBox.value = textBox.value.replace(/[^0-9+\-*/.()^%]/g, '');
});


