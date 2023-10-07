let dragindex=0;
let clone="";



function we(){

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

            document.getElementById("parent").insertBefore(clone, document.getElementById("parent").childNodes[dragindex]);
            
            
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








