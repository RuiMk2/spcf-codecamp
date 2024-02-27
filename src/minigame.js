let scorecomputer = 0;
let scoreplayer = 0;
let ties = 0;
function jackenpon(player)
{
    //computer picks a random move
    let choices = ["Rock", "Paper", "Scissors"];
    let computer = choices[ Math.floor(Math.random() * 3)];
    //print the choice of the player and computer
    document.querySelector("#choice").innerHTML = "You chose " + player;
    document.querySelector("#computer").innerHTML = "Enemy chose " + computer;
    //change the images to represent the choices
    document.getElementById("playericon").src= player +".png";
    document.getElementById("enemyicon").src= computer +".png";
    //check if the player won or lose
    //draw
    if (player == computer)
    {
        Result.style.color = "white"
        document.querySelector("#Result").innerHTML = "It's a tie";
        ties++;
    }
    //lose
    else if((player == "Scissors" && computer == "Rock") || (player == "Rock" && computer == "Paper") || (player == "Paper" && computer == "Scissors"))
    {
        Result.style.color = "red"
        document.querySelector("#Result").innerHTML = "You Lose!";
        scorecomputer++;
    }
    //win
    else
    {
        Result.style.color = "green"
        document.querySelector("#Result").innerHTML = "You Win!";
        scoreplayer++;
    }

    //print the score
    document.querySelector("#player").innerHTML = "Your Score: " + scoreplayer;
    document.querySelector("#enemy").innerHTML = "Enemy's Score: " + scorecomputer;
    document.querySelector("#tie").innerHTML = "Ties: " + ties;
}
