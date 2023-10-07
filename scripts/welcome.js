function startGame(){
    localStorage.setItem("Username", document.getElementById("username-input").value);

    if(localStorage.getItem('Points') == null) {

        localStorage.setItem("Points", 0);
    }

    window.location.assign("./play.html");



}

console.log(document.cookie)