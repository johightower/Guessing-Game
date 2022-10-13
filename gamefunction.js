let numberGuess = Math.floor(Math.random() * 100+1);
let count = 0
go.addEventListener("click"), function(event){
    event.preventDefault();
 if(input == numberGuess){
    alert("You did it! I'm proud of you")
 } else if (input < numberGuess && count < 5){ 
    count++
    alert('↑')
 } else if (input > numberGuess && count <5){ 
    count++ 
    alert('↓')
 } else (
    alert("Awww, not quite. But try again!")
 )
 }
