function startGame(){
    image = document.getElementById("image-choose").value;

    if(image == "default"){
        alert("Please choose an image to play!");
        return;
        
    } 
    
    else{
        let location = window.location.toString();
        location = location.replace("index.html","");
        console.log("current location:" +location);
        alert("ciao");
        localStorage.setItem("Image", location+"/assets/imgs/"+image+".jpg");
    }



    localStorage.setItem("Username", document.getElementById("username-input").value);

    if(localStorage.getItem('Points') == null) {

        localStorage.setItem("Points", 0);
    }

    window.location.assign("./play.html");



}

