function startGame(){
    image = document.getElementById("image-choose").value;

    if(image == "default"){
        alert("Please choose an image to play!");
        return;
        
    } 
    
    else{
        localStorage.setItem("Image", "./assets/imgs/"+image+".jpg");
    }



    localStorage.setItem("Username", document.getElementById("username-input").value);

    if(localStorage.getItem('Points') == null) {

        localStorage.setItem("Points", 0);
    }

    window.location.assign("./play.html");



}

