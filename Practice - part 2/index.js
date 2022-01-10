let hands = ["rock", "paper", "scissor"]

function getHand() {
    let randomIndex = Math.floor( Math.random() * 3 )     //0-2.9999
    return hands[randomIndex]
}

console.log( getHand() )