let fullImage;

function loadImg(){
    let toAdd="";


    let id=0;
    for(let i=0;i<4;i++)
    {
        toAdd+="<div class='div-row'>"
        for(let j=0;j<4;j++){
            toAdd+="<div class='div-cell"+i+"' id='div-cell-"+id+"'></div>";
            id++;
        }
        toAdd+="</div>";
    }


    document.body.innerHTML+=toAdd;

    for(let i=0;i<id;i++){

        document.getElementById("div-cell-"+i).style.width= "200px";
        document.getElementById("div-cell-"+i).style.height= "200px";
        document.getElementById("div-cell-"+i).style.background= "url('/assets/imgs/sunrise.jpg')";

    }

    const boxes = document.getElementsByClassName('div-cell1');

    for (const box of boxes) {
        box.style.display = "inline-box";
        box.style.padding = "10px";

    }

    console.log("done");


}
loadImg()

