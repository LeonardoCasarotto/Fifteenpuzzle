function startGame(){
    localStorage.setItem("Username", document.getElementById("username-input").value);
    //document.cookie ="Username="+document.getElementById("username-input")+"; Point =0; expires = Thu, 32 Dec 2099 12:00:00 UTC;"

    window.location.assign("./play.html");



}

console.log(document.cookie)