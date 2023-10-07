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


function drop(e)
{
    e.preventDefault();
    clone=e.target.cloneNode(true);

    let data=e.dataTransfer.getData("text"); //id del trapel che sposto


    if(clone.id !== data) {
        console.log("DIVERSO");

        let nodelist=document.getElementById("parent").childNodes;


        for(let i=0;i<nodelist.length;i++)
        {

            if(nodelist[i].id==data)
            {
                dragindex=i;
                break;
            }

        }

        document.getElementById("parent").replaceChild(document.getElementById(data),e.target);

        document.getElementById("parent").insertBefore(clone,document.getElementById("parent").childNodes[dragindex]);
        console.log(dragindex)
        console.log("conseguente id sarà "+"div-cell-"+dragindex)
        console.log(clone.id)


       console.log(sonoAdiacenti("div-cell-"+dragindex,clone.id));
    }

}


function sonoAdiacenti(div1Id, div2Id) {
    var div1 = document.getElementById(div1Id);
    var div2 = document.getElementById(div2Id);

    // Ottieni le coordinate
    var rect1 = div1.getBoundingClientRect();
    var rect2 = div2.getBoundingClientRect();

    // Controlla se sono adiacenti orizzontalmente
    if (
        (rect1.top >= rect2.top && rect1.top <= rect2.bottom) ||
        (rect1.bottom >= rect2.top && rect1.bottom <= rect2.bottom)
    ) {
        return "Orizzontale";
    }

    // Controlla se sono adiacenti verticalmente
    if (
        (rect1.left >= rect2.left && rect1.left <= rect2.right) ||
        (rect1.right >= rect2.left && rect1.right <= rect2.right)
    ) {
        return "Verticale";
    }

    return "Non adiacenti";
}




