
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container"); 
let msg=document.querySelector("#msg");


let turn0= true;  //turn of the player x or player o

const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const resetGame = () => {
    turn0 = true;
    enableBoxes(); 
    msgContainer.classList.add("hide"); //msg container will hide when the game resets 
};



//adding event listeners so that when a button is clicked an action is performed

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{

    if(turn0){ //when playerO turn 
        box.innerText = "O"; //O is printed
        turn0=false; 
    } else{ //when player X turn 
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true; //you cannot click more than once in a box
    checkWinner();
    
});
});

const disableBoxes = () => {
 for(box of boxes){
    box.disabled =true;
 }
}

const enableBoxes = () => {
    for(box of boxes){
       box.disabled =false;
       box.innerText = "";
    }
   }

const showWinner = (winner) =>{
 msg.innerText=`Congratulations, Winner is ${winner}`;
 msgContainer.classList.remove("hide");
 disableBoxes();
}


const checkWinner = () => {
    for(let pattern of winPatterns){
    let pos1Val= boxes[pattern[0]].innerText;
    let pos2Val= boxes[pattern[1]].innerText;
    let pos3Val= boxes[pattern[2]].innerText;
    

    if(pos1Val!= "" && pos2Val!= "" && pos3Val!= ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
        }
    }
  }
};

 
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

