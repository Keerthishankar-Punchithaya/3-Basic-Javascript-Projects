let data = [
    {
        player: "Abc",
        score: 52
    },
    {
        player: "Def",
        score: 41
    }
]

const personBtn = document.getElementById("person-btn")

personBtn.addEventListener("click", function() {
    console.log(data[0].score)
})