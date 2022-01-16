// const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name}  ${emoji}`
}
let hi = "Hello"
greetUser(hi, "Keerthishankar", "👋")

function add(num1, num2) {
    return num1 + num2 
}

console.log( add(3, 4) )
