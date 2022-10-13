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
bigBox.style.backgroundColor = ""
bigBox.style.width = "75%"
bigBox.style.textAlign = "center"

const title = document.createElement("h1")
title.textContent = "THE GUESSING GAME"

const direction = document.createElement("h4")
direction.textContent = "Guess a number between 1-100!"

const form = document.createElement("form")

let input = document.createElement("input")
input.placeholder = "Type guess here!"

const go = document.createElement("button")
go.textContent = "Go!"

const lowerSection = document.createElement("ul")
lowerSection.style.listStyle = "none"
lowerSection.style.display = "flex"
lowerSection.style.alignItems = "center"
lowerSection.style.justifyContent = "space-around"

let guess1 = document.createElement("li")
guess1.style.border = "1px solid black"
guess1.style.height = "15px"
guess1.style.width = "25px"
guess1.placeholder = "-"
let guess2 = document.createElement("li")
guess2.style.border = "1px solid black"
guess2.style.height = "15px"
guess2.style.width = "25px"
guess2.placeholder = "-"
let guess3 = document.createElement("li")
guess3.style.border = "1px solid black"
guess3.style.height = "15px"
guess3.style.width = "25px"
guess3.placeholder = "-"
let guess4 = document.createElement("li")
guess4.style.border = "1px solid black"
guess4.style.height = "15px"
guess4.style.width = "25px"
guess4.placeholder = "-"
let guess5 = document.createElement("li")
guess5.style.border = "1px solid black"
guess5.style.height = "15px"
guess5.style.width = "25px"
guess5.placeholder = "-"

const footer = document.createElement("footer")

const reset = document.createElement("button")
reset.textContent = "Reset?"
const hint = document.createElement("button")
hint.textContent = "Hint?"

guessingGame.append(bigBox)
bigBox.append(title, direction, form, lowerSection, footer)
form.append(input, go)
lowerSection.append(guess1, guess2, guess3, guess4, guess5)
footer.append(reset, hint)