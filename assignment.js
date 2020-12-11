let token = getToken();

const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');
let course = urlParams.get('course');

let data = sendcall(`courses/${course.toString().replace(newPrefix,prefix)}/assignments/${id.toString().replace(newPrefix,prefix)}?access_token=${token}&per_page=1000`);
data = JSON.parse(data.replaceAll(prefix,newPrefix));

let nameDiv = document.getElementById("assignment-name");
nameDiv.innerHTML = data["name"];

let mainDiv = document.getElementById("assignment-body");
mainDiv.innerHTML = `
<a class=back href=https://princetonk12.instructure.com/courses/${+course.replace(newPrefix,"")}/assignments/${id.replace(newPrefix,"")}>view assignment on Canvas</a>
`;
mainDiv.innerHTML += data["description"];