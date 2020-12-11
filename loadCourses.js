let token = getToken();
let resp = sendcall("courses?per_page=1000&access_token="+token);
resp = resp.replaceAll(prefix,newPrefix);
console.log(resp);
let div = document.getElementById("courses");
div.innerHTML = '';
resp = JSON.parse(resp);
for (let course of resp){
    div.innerHTML += `
    <a class=course-card href=course.html?course=${course["id"]}&name=${encodeURIComponent(course["name"])}>
        <p>${course["name"]}</p>
    </a>
    `
}
function logout(){
    localStorage.removeItem("token");
    location.href="index.html";
}