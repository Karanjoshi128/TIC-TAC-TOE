console.log("Tic Tac Toe");

// import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2&display=swap');
let daden = new Audio("Audio/Laal_h.mp3");

let turn = "X";
let isgameover = false;

const checkWin = () => {
    let boxtext = document.getElementsByClassName('Boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.getElementsByClassName('info')[0].innerText = boxtext[e[0]].innerText + "   WON";
            isgameover = true;
            daden.play();
        }
    })

}
document.querySelector('.button').addEventListener('click', () =>{
    window.location.reload()
})

const changeTurn = () => {
    if (turn === "X") {
        turn = "O";
    }
    else {
        turn = "X";
    }
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.Boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            checkWin()
            if (!isgameover) {
                changeTurn();
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })
})