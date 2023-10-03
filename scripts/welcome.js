function startGame(){
    localStorage.setItem("Username", document.getElementById("username-input").value);


    window.location.assign("./play.html");



}