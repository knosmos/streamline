let token = getToken();

const urlParams = new URLSearchParams(window.location.search);
let name = urlParams.get('name');
let id = urlParams.get('course');

let nameDiv = document.getElementById("course-name");
nameDiv.innerHTML = name;

let assignmentsDiv = document.getElementById("assignments");
let assignments = sendcall(`courses/${id.toString().replace(newPrefix,prefix)}/assignments?access_token=${token}&per_page=1000`);
assignments = JSON.parse(assignments.replaceAll(prefix,newPrefix));

if (assignments.length == 0){
    assignmentsDiv.innerHTML = '<a class=assignment><p>no assignments found</p></a>';
}
else{
    // Sort assignments by due date
    function compareDates(a,b){
        d1 = a["due_at"];
        d2 = b["due_at"];
        if (d1 == null || d2 == null){
            if (numDate(a["created_at"])>numDate(b["created_at"])){ return -1 }
            if (numDate(a["created_at"])<numDate(b["created_at"])){ return 1 }
            return 0;  
        }
        if (numDate(d1)>numDate(d2)){ return -1 }
        if (numDate(d1)<numDate(d2)){ return 1 }
        return 0;
    }
    assignments.sort(compareDates);
    for (let a of assignments){
        date = a["due_at"];
        if (date == null){
            d = "created on "+convDate(a["created_at"]);
        }
        else{
            d = convDate(a["due_at"])
        }
        let submitted = "";
        if (a["has_submitted_submissions"]){
            submitted = "complete";
        }
        assignmentsDiv.innerHTML += `
            <a class="assignment" href="assignment.html?id=${a["id"]}&course=${id}">
                <p>${a["name"]}</p>
                <p class=date>${d}</p>
            </a>
        `        
    }    
}
