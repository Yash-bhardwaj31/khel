let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset")
let newBtn = document.querySelector("#new")
let msg = document.querySelector(".msg")
let msg2 = document.querySelector("#msg")

let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msg.classList.add("hide")
}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{

    if(turnO){
        box.innerText =  "O";
        turnO = false;
    } else {
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
})
});

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
} 
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
} 

const showWinner = (winner)=>{
    msg2.innerText = `ahh, cutie win legyi...(^///^) ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
                let pos1 = boxes[pattern[0]].innerText;
                let pos2 = boxes[pattern[1]].innerText;
                let pos3 = boxes[pattern[2]].innerText;

                if(pos1 != "" && pos2 != "" && pos3 != ""){
                    if(pos1 === pos2 && pos2 === pos3){

                        showWinner(pos1);
                    }
                }
    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
