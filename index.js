//big box
//Title (h1 maybe)
//instructions (centered text (h4))

//(form)
//input bar <input>
//go! <button>

//(section2)
//guesses (logs the last guess) maximum 5 guesses
//5 p's 


//footer
//reset button and hint button

const guessingGame = document.querySelector("body")
guessingGame.style.display = "flex"
guessingGame.style.justifyContent = "center"

const bigBox = document.createElement("div")
bigBox.style.border = "1px solid black"
bigBox.style.backgroundColor = "#014737"
bigBox.style.width = "85%"
bigBox.style.textAlign = "center"

const title = document.createElement("h1")
title.textContent = "THE GUESSING GAME"
title.style.color = "ivory"

const direction = document.createElement("h4")
direction.textContent = "Guess a number between 1-100!"
direction.style.color = "ivory"

const form = document.createElement("form")

let input = document.createElement("input")
input.placeholder = "?"
input.style.color = "ivory"
input.style.fontSize = "75px"
input.style.textAlign = "center"
input.style.borderRadius = "50%"
input.style.border = "1px dotted ivory"
input.style.height = "120px"
input.style.width = "120px"
input.style.backgroundColor = "#E69b63"

const go = document.createElement("button")
go.textContent = "Go!"
go.style.borderRadius = "50%"
go.style.color = "ivory"
go.style.backgroundColor = "#a1491c"
go.style.border = "1px dotted ivory"
go.style.height = "50px"
go.style.width = "50px"

const lowerSection = document.createElement("ul")
lowerSection.style.listStyle = "none"
lowerSection.style.display = "flex"
lowerSection.style.alignItems = "center"
lowerSection.style.justifyContent = "space-around"




let guess1 = document.createElement("li")
guess1.style.border = "1px solid ivory"
guess1.style.color = "ivory"
guess1.style.fontSize = "30px"
guess1.style.height = "30px"
guess1.style.width = "40px"
guess1.style.backgroundColor = "#6F3637"
let guess2 = document.createElement("li")
guess2.style.border = "1px solid ivory"
guess2.style.color = "ivory"
guess2.style.fontSize = "30px"
guess2.style.height = "30px"
guess2.style.width = "40px"
guess2.style.backgroundColor = "#B35340"
let guess3 = document.createElement("li")
guess3.style.border = "1px solid ivory"
guess3.style.color = "ivory"
guess3.style.fontSize = "30px"
guess3.style.height = "30px"
guess3.style.width = "40px"
guess3.style.backgroundColor = "#233342"
let guess4 = document.createElement("li")
guess4.style.border = "1px solid ivory"
guess4.style.color = "ivory"
guess4.style.fontSize = "30px"
guess4.style.height = "30px"
guess4.style.width = "40px"
guess4.style.backgroundColor = "#4B2B31"
let guess5 = document.createElement("li")
guess5.style.border = "1px solid ivory"
guess5.style.color = "ivory"
guess5.style.fontSize = "30px"
guess5.style.height = "30px"
guess5.style.width = "40px"
guess5.style.backgroundColor = "#CE8054"

let hintText = document.createElement("h1")
hintText.style.color = "ivory"


const footer = document.createElement("footer")
footer.style.padding = "10px"
footer.style.display = "flex"
footer.style.justifyContent = "space-around"

const reset = document.createElement("button")
reset.textContent = "Reset?"
reset.style.color = "ivory"
reset.style.backgroundColor = "#611d06"
reset.style.width = "10em"
reset.style.boxShadow = "-3px 3px 3px 0px ivory"

const hint = document.createElement("button")
hint.textContent = "Hint?"
hint.style.backgroundColor = "#300804"
hint.style.color = "ivory"
hint.style.width = "10em"
hint.style.boxShadow = "-3px 3px 3px 0px ivory"



let numberGuess = Math.floor(Math.random() * 100) + 1;
let possibleNum = [numberGuess, " or" , " " + Math.floor(Math.random()* 100 + 1)]
// const removeComma = possibleNum.replaceAll(","," ")
let count = 0
go.addEventListener("click", function(event){
    event.preventDefault();
    if( count == 0){ 
    guess1.textContent = input.value;
    } 
    if (count == 1){ 
        guess2.textContent = input.value;
    }
    if (count == 2){ 
        guess3.textContent = input.value;
    }
    if (count == 3){
        guess4.textContent = input.value;
    }
    if (count == 4){ 
        guess5.textContent = input.value;
    }
 if(input.value == numberGuess){
    alert("You did it! I'm proud of you")
 } else if (input.value < numberGuess && count < 4){ 
    count++
    alert('↑')
 } else if (input.value > numberGuess && count < 4){ 
    count++ 
    alert('↓')
 } else (
    alert("Awww, not quite. But Reset try again!")
 )
 })

hint.addEventListener("click", function(){
    console.log(possibleNum)
    hintText.textContent = possibleNum, removeComma
})
guessingGame.append(bigBox)
bigBox.append(title, direction, form, lowerSection, footer, hintText)
form.append(input, go)
lowerSection.append(guess1, guess2, guess3, guess4, guess5)
footer.append(reset, hint)
