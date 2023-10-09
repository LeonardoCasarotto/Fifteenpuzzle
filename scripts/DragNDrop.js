let dragindex=0;
let clone="";
let moves = 0;



function start(){
    
    setUsername();
    addMoves(moves);
    /*for(let i=0;i<14;i++){
        mix();
    }*/

}

function allowDrop(e)
{

    e.preventDefault();
}



function drag(e)
{
    e.dataTransfer.setData("text",e.target.id);
}



function drop(e) {
    e.preventDefault();
    clone = e.target.cloneNode(true);

    let data = e.dataTransfer.getData("text"); //id del trapel che sposto
    let dragId;

    if (clone.id !== data) {
        

        let nodelist = document.getElementById("parent").childNodes;

        for (let i = 0; i < nodelist.length; i++) {
            if (nodelist[i].id == data) {
                dragindex = i;
                dragId = nodelist[i].id;
                
                break;
            }
        }

        if (areAdjacent(document.getElementById(data), e.target) && clone.id =="emptyPiece"||
            areAdjacent(document.getElementById(data), e.target) && dragId =="emptyPiece")
        {
            document.getElementById("parent").replaceChild(document.getElementById(data), e.target);
            
            console.log("data:", data)
            console.log("cloneid ",clone.id)
            console.log("dragId ", dragId)
          
            console.log("etarget ", e.target)
            

            document.getElementById("parent").insertBefore(clone, document.getElementById("parent").childNodes[dragindex]);
            addMoves(moves++);
            
            
            
            if(Completed()){
                if(window.confirm("Congraturazioni, hai totalizzato "+ calcPoints(moves) + " punti, vuoi ricominciare il gioco?")){
                    window.location.assign("./index.html");
                }
                else{
                    
                }
            }
            
        } else {
            alert("Attenzione, spostare i pezzi del puzzle nel riquadro vuoto!");
        }
    }
}

function areAdjacent(div1, div2) {
    
    const index1 = Array.from(div1.parentNode.children).indexOf(div1);
    const index2 = Array.from(div2.parentNode.children).indexOf(div2);

    return Math.abs(index1 - index2) === 1 || Math.abs(index1 - index2) === 4;
}



function Completed(){

    let nodelist = document.getElementById("parent").childNodes;

    let getId = (element) => element.id;

    let idList = Array.from(nodelist).map(getId);
    
    console.log(idList)

    for(let i=0;i<idList.length-1;i++){
        if(idList[i] !="div-cell-"+i){
            return false;
        }
    }
    return true;
}

start();

function mix() {
    let rand1 = Math.floor(Math.random() * 15); 
    let rand2 = Math.floor(Math.random() * 15);

    while (rand1 === rand2) {
        rand2 = Math.floor(Math.random() * 15);
    }

    let temp = "div-cell-" + rand1;
    let temp2 = "div-cell-" + rand2;

    let target = document.getElementById(temp);
    let target2 = document.getElementById(temp2);

    let clone2 = target2.cloneNode(true);

    document.getElementById("parent").replaceChild(clone2, target);

    document.getElementById("parent").replaceChild(target, target2);
}


