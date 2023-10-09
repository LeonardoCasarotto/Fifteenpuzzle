

function loadImg(){
    let toAdd="<div id='parent'>";

    let id=0;
    for(let i=0;i<4;i++) {
        
        for(let j=0;j<4;j++){
            toAdd+="<div class='div-cell"+i+" puzzlePiece' class='puzzlePiece' id='div-cell-"+id+"' draggable='true' " +
                "ondragstart='drag(event)' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";


            id++;
        }
        

    }

    toAdd+="</div>"

    document.body.innerHTML+=toAdd;

    for(let i=0;i<id;i++){

        document.getElementById("div-cell-"+i).style.width= "180px";
        document.getElementById("div-cell-"+i).style.height= "180px";
        document.getElementById("div-cell-"+i).style.margin= "5px";
        document.getElementById("div-cell-"+i).style.background= "url("+localStorage.getItem("Image")+")";
        document.getElementById("div-cell-"+i).style.backgroundSize = "900px";
        document.getElementById("div-cell-"+i).style.backgroundPositionY = "-"+ (Math.floor(i/4))*200+"px";
        document.getElementById("div-cell-"+i).style.backgroundPositionX = "-"+ (i%4)*200+"px";

    }

    const boxes = document.getElementsByClassName('div-cell1');

    for (const box of boxes) {
        box.style.display = "inline-block";
    }
    document.getElementById('div-cell-15').id = 'emptyPiece';
    document.getElementById("emptyPiece").style.background="#3a3e45";

    

}

loadImg();

