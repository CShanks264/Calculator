const textBox = document.getElementById('textBox')

//MENU STUFF
//Function that will  toggle menu
const toggleMenu = (x) => {
    x.classList.toggle('change')

    const menuContent = document.getElementById('menuContent')

    if (menuContent.style.display === 'none' || menuContent.style.display === ''){
        menuContent.style.display = 'block'
    } else {
        menuContent.style.display = 'none'
    }
}

//Function that will toggle the history log underneath the calculator
const enableHistory = () => {
    const history = document.getElementById('history')

    if (history.style.display === 'none' || history.style.display === ''){
        history.style.display = 'block'
    } else {
        history.style.display = 'none'
    }
}

//BASE FUNCTIONS FOR CALCULATOR
// Function that will display things to textBox
const display = input => {
    textBox.style.color = 'lightgray'
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

        //Change the Solution color
        textBox.style.color = 'lightblue'

        //Adds whole equation to history
        addtoHistory(equation + '=' +  solution)
    } catch(error) {
        // I want to add more detailed errors later like NaN or undefined or something
        textBox.value = 'Error'
    }
}


//Keyboard Shortcuts
document.addEventListener('keydown', input => {
    if (input.code === 'Enter'){
        input.preventDefault()
        //Enter/return solves equation
        solve()
    } else if (input.code === 'Escape'){
        //Esc key clears textBox
        clearDisplay()
    }
})

//Eventlistener that only allows #'s and certain characters to be typed in textBox
//Chatgpt helped with this section of code
textBox.addEventListener('input', () => {
    textBox.value = textBox.value.replace(/[^0-9+\-*/.()^%]/g, '')
    textBox.style.color = 'lightgray'
});


