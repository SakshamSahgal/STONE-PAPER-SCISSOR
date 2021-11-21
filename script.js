
var my_move;
var computer_move;
var conclusion;
var moves = ["stone", "paper", "scissor"];
var computer;
var players_score=0;
var computers_score=0;
var Win_Audio = new Audio("Sounds/WIN_Sound.mp3");
var Loose_Audio = new Audio("Sounds/Loose_sound.mp3");
var Button_Click_audio = new Audio("Sounds/Click.mp3");
var Draw_Audio = new Audio("Sounds/Draw_sound.mp3");
function stone_Hovered()
{
    document.getElementById("Stone").src = "GUI/Stone_Pressed.png";
}
function stone_Exited()
{
    document.getElementById("Stone").src = "GUI/Stone.png";
}

function paper_Hovered()
{
    document.getElementById("Paper").src = "GUI/Paper_Pressed.png";
}
function paper_Exited()
{
    document.getElementById("Paper").src = "GUI/Paper.png";
}

function scissor_Hovered()
{
    document.getElementById("Scissor").src = "GUI/Scissor_Pressed.png";
}

function scissor_Exited()
{
    document.getElementById("Scissor").src = "GUI/Scissor.png";
}

function Set_stone() {
    Button_Click_audio.play();
    my_move = "stone";
    random();
}

function Set_paper() {
    Button_Click_audio.play();
    my_move = "paper";
    random();
}

function Set_scissor() {
    Button_Click_audio.play();
    my_move = "scissor";
    random();
}


function random() {
    
    computer = Math.floor((Math.random() * 3));
    computer_move = moves[computer];
    Decision();
}

function Decision() {
    if (my_move == computer_move)
        conclusion = "Draw";
    else

        if (my_move == "stone") {
            if (computer_move == "paper")
                conclusion = "LOOSE";
            else
                conclusion = "WIN";
        }
        else if (my_move == "paper") {
            if (computer_move == "scissor")
                conclusion = "LOOSE";
            else
                conclusion = "WIN";
        }
        else {
            if (computer_move == "stone")
                conclusion = "LOOSE";
            else
                conclusion = "WIN";
        }
        console.log(conclusion);
        set_my_move();

        if(conclusion != "Draw")
        {
            if(conclusion == "WIN")
            players_score++;
            else
            computers_score++;
        }
                
        Update_Score_Board();
        
        if(conclusion == "WIN")
        {
            document.getElementById("conclusion").src = "GUI/WIN.png";
            Win_Audio.play();
        }    
        else if(conclusion == "LOOSE")
        {
            document.getElementById("conclusion").src = "GUI/LOOSE.png";    
            Loose_Audio.play();
        }
        else
        {
            Draw_Audio.play();
            document.getElementById("conclusion").src = "GUI/DRAW.png";
        }
}

function Update_Score_Board()
{
    document.getElementById("Player_score").innerHTML = players_score;
    document.getElementById("computer_score").innerHTML = computers_score;
}

function set_my_move()
{
    if(my_move == "stone")
        document.getElementById("Your_Move").src = "GUI/stone.png";
    else if(my_move == "paper")
        document.getElementById("Your_Move").src = "GUI/Paper.png";
    else
        document.getElementById("Your_Move").src = "GUI/scissor.png";

    if(computer_move == "stone")
        document.getElementById("Computer_move").src = "GUI/stone.png";
    else if(computer_move == "paper")
        document.getElementById("Computer_move").src = "GUI/Paper.png";
    else
        document.getElementById("Computer_move").src = "GUI/Scissor.png";
}