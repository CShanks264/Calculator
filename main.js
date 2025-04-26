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
const calc = document.getElementById('calc')

//MENU STUFF
//Function that will  toggle menu
const toggleMenu = (x) => {
    x.classList.toggle('change')
}

const enableHistory = () => {
    const history = document.getElementById('history')

    if (history.style.display === 'none'){
        history.style.display = 'block'
    } else {
        history.style.display = 'none'
    }
}


// Function that will display things to textBox
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

//HISTORY STUFF
const historyContent = document.getElementById('historyContent')

//Funtion that takes the last solve equation and logs it
const addtoHistory = input => {
    const recentHistory = document.createElement('p')
    historyContent.prepend(recentHistory)
    recentHistory.textContent = input

    

    //Event listener that append solution to textBox
    recentHistory.addEventListener('click', c => {
        const justAns = recentHistory.textContent.split('=')

        display(justAns[1])
    })
}


//Function that Solves the given equation
const solve = () => {
    try{
        const equation = textBox.value
        const solution = eval(textBox.value)
        textBox.value = solution

        //Adds whole equation to history
        addtoHistory(equation + '=' +  solution)
    } catch(error) {
        // I want to add more detailed errors later like NaN or undefined or something
        textBox.value = 'Error'
    }
}


//Keyboard Shortcuts
calc.addEventListener('keydown', input => {
    if (input.code === 'Enter'){
        input.preventDefault()
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


