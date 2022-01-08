
// change the count-el in the html to reflect the new count

// camelCase
let countEl = document.getElementById("count-el") 
// pass in arguements

console.log(countEl)

let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
}

increment()