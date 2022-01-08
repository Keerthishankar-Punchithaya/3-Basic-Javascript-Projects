let myPoints = 3

// Create two functions, add3Points() and removePoints(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
    myPoints += 3
}

function removePoints() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
removePoints()
removePoints()


// Call the functions to that the line below logs out 10
console.log(myPoints)