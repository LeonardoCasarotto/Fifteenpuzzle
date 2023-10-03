function loadImg(){
    let toAdd="<div id='game-container'>";

    let id=0;
    for(let i=0;i<4;i++) {
        toAdd+="<div class='div-row'>"
        for(let j=0;j<4;j++){
            toAdd+="<div class='div-cell"+i+"' id='div-cell-"+id+"'></div>";
            id++;
        }
        toAdd+="</div>";
    }

    toAdd+="</div>"

    document.body.innerHTML+=toAdd;

    for(let i=0;i<id;i++){

        document.getElementById("div-cell-"+i).style.width= "200px";
        document.getElementById("div-cell-"+i).style.height= "200px";
        document.getElementById("div-cell-"+i).style.margin= "5px";
        document.getElementById("div-cell-"+i).style.background= "url('/assets/imgs/sunrise.jpg')";
        document.getElementById("div-cell-"+i).style.backgroundSize = "800px";
        document.getElementById("div-cell-"+i).style.backgroundPositionY = "-"+ (Math.floor(i/4))*200+"px";
        document.getElementById("div-cell-"+i).style.backgroundPositionX = "-"+ (i%4)*200+"px";

    }

    const boxes = document.getElementsByClassName('div-cell1');

    for (const box of boxes) {
        box.style.display = "inline-block";
    }
    document.getElementById("div-cell-15").style.background="#3a3e45";
}

loadImg();
