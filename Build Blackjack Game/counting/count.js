let array = ["123", "456", "789"]

let arrayEl = document.getElementById("array-el")

for (let i = 0; i < array.length; i++) {
    arrayEl.textContent += array[i] + " "
}