// If Else statement using Rock Paper scissor game

let player1 : string= "Rock";
let player2 : string= "scissor";

if (player1 === player2){
    console.log("Its a Tie!!");
} else if ((player1 === "Rock" && player2 === "scissor")||
(player1 === "scissor" && player2 === "paper") ||
(player1 === "paper" && player2 === "Rock")){
    console.log("Player 1 win this match")
} else {
    console.log("playe 2 win this match successfully")
}
