// Anything that involves the API or authentication is in this script.

let api_url = "https://cors-anywhere.herokuapp.com/https://canvas.instructure.com/api/v1/";
let prefix = '863700000000'; // that long thing that appears in front of all the ids and screws up JS
let newPrefix = '9900';
function sendcall(url){
    // Sends a synchronous GET request to the server.
    let xhttp = new XMLHttpRequest();
    let resp;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            resp = this.responseText;
        }
        if (this.status == 401) { // unauthorized
            resp = -1;
        }
    };
    xhttp.open("GET", api_url+url, false);
    //xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhttp.send();
    return resp;
}
function getToken(){
    // Tries to retrieve auth token from localStorage; otherwise redirects to login screen.
    let token = localStorage.getItem("token");
    if (token == null){
        location.href="index.html";
    }
    else{
        return token;
    }
    // Since token is currently hardcoded, just return it.
    //return auth_token;
}
function setToken(token){
    localStorage.setItem("token",token);
}