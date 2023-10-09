function restart(){
    if(window.confirm("Do you want really to restart the game?")){
        window.location.assign("./index.html");
    }
}



function addMoves(p){
    document.getElementById("points").innerHTML = p+" moves";
}

function setUsername(){
    document.getElementById("username").innerHTML=localStorage.getItem("Username");
}


function calcPoints(moves){
    
    points = 200 - (moves * 0o5);
    addMoves(0)
    
    localStorage.setItem("Points",points);
    
    return points;
    
}