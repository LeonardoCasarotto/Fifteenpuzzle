function press(){
    document.getElementById("username").innerHTML+=localStorage.getItem("Username");
    document.getElementById("points").innerHTML+=localStorage.getItem("Points");
}