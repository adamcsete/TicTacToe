let player = "cross";

//Main game logic
function gameLogic(idnum){
    let fillsuccess = false;

    //if square is empty, then fill
    if (!(document.getElementById(idnum).innerHTML == "X" || document.getElementById(idnum).innerHTML=="O")){
            if(player=="cross") {document.getElementById(idnum).innerHTML="X";} else {document.getElementById(idnum).innerHTML="O";}
            fillsuccess = true;    
        };

    //checking if 3 of a kind are aligned
    let s11 = document.getElementById("s11").innerHTML;
    let s12 = document.getElementById("s12").innerHTML;
    let s13 = document.getElementById("s13").innerHTML;
    let s21 = document.getElementById("s21").innerHTML;
    let s22 = document.getElementById("s22").innerHTML;
    let s23 = document.getElementById("s23").innerHTML;
    let s31 = document.getElementById("s31").innerHTML;
    let s32 = document.getElementById("s32").innerHTML;
    let s33 = document.getElementById("s33").innerHTML;

    console.log(s11, s12, s13);

    if (( s11 == s12) && (s12 == s13) && !(s11=="")){
        document.getElementById("info").innerHTML="The winner is: " + player;
        fillsuccess=false;
        document.getElementById("s11").style.backgroundColor="#FF0000";
        document.getElementById("s12").style.backgroundColor="#FF0000";
        document.getElementById("s13").style.backgroundColor="#FF0000";
        }
    else if (( s21 == s22) && (s22 == s23) && !(s21=="")){
        document.getElementById("info").innerHTML="The winner is: " + player;
        fillsuccess=false;
        document.getElementById("s21").style.backgroundColor="#FF0000";
        document.getElementById("s22").style.backgroundColor="#FF0000";
        document.getElementById("s23").style.backgroundColor="#FF0000";
        }
    else if (( s31 == s32) && (s32 == s33) && !(s31=="")){
        document.getElementById("info").innerHTML="The winner is: " + player;
        fillsuccess=false;
        document.getElementById("s31").style.backgroundColor="#FF0000";
        document.getElementById("s32").style.backgroundColor="#FF0000";
        document.getElementById("s33").style.backgroundColor="#FF0000";
        }
    else if (( s11 == s21) && (s21 == s31) && !(s11=="")){
        document.getElementById("info").innerHTML="The winner is: " + player;
        fillsuccess=false;
        document.getElementById("s11").style.backgroundColor="#FF0000";
        document.getElementById("s21").style.backgroundColor="#FF0000";
        document.getElementById("s31").style.backgroundColor="#FF0000";
        }     
    else if (( s12 == s22) && (s22 == s32) && !(s12=="")){
        document.getElementById("info").innerHTML="The winner is: " + player;
        fillsuccess=false;
        document.getElementById("s12").style.backgroundColor="#FF0000";
        document.getElementById("s22").style.backgroundColor="#FF0000";
        document.getElementById("s32").style.backgroundColor="#FF0000";
        }
    else if (( s13 == s23) && (s23 == s33) && !(s13=="")){
        document.getElementById("info").innerHTML="The winner is: " + player;
        fillsuccess=false;
        document.getElementById("s13").style.backgroundColor="#FF0000";
        document.getElementById("s23").style.backgroundColor="#FF0000";
        document.getElementById("s33").style.backgroundColor="#FF0000";
        }
    else if (( s11 == s22) && (s22 == s33) && !(s11=="")){
        document.getElementById("info").innerHTML="The winner is: " + player;
        fillsuccess=false;
        document.getElementById("s11").style.backgroundColor="#FF0000";
        document.getElementById("s22").style.backgroundColor="#FF0000";
        document.getElementById("s33").style.backgroundColor="#FF0000";
        }
    else if (( s13 == s22) && (s22 == s31) && !(s13=="")){
        document.getElementById("info").innerHTML="The winner is: " + player;
        fillsuccess=false;
        document.getElementById("s13").style.backgroundColor="#FF0000";
        document.getElementById("s22").style.backgroundColor="#FF0000";
        document.getElementById("s31").style.backgroundColor="#FF0000";
        }
    

    //change player after successful fill
    if (fillsuccess){        
            if (player=="cross") {
                    player = "cricle";
                    document.getElementById("info").innerHTML="Next player: circle O";  
                } else  {
                    player = "cross";
                    document.getElementById("info").innerHTML="Next player: cross X";
                };
            }
}

function reset(){
    document.getElementById("s11").innerHTML = "";
    document.getElementById("s12").innerHTML = "";
    document.getElementById("s13").innerHTML = "";
    document.getElementById("s21").innerHTML = "";
    document.getElementById("s22").innerHTML = "";
    document.getElementById("s23").innerHTML = "";
    document.getElementById("s31").innerHTML = "";
    document.getElementById("s32").innerHTML = "";
    document.getElementById("s33").innerHTML = "";
    document.getElementById("info").innerHTML="Next player: cross X";
    for (let i = 0; i < 10; i++)  {document.getElementsByClassName("square")[i].style.backgroundColor="#FFFFFF";}
}
