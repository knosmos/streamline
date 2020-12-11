months = {
    "01":"January",
    "02":"February",
    "03":"March",
    "04":"April",
    "05":"May",
    "06":"June",
    "07":"July",
    "08":"August",
    "09":"September",
    "10":"October",
    "11":"November",
    "12":"December"};

function convDate(date){
    let d = date.split("T")[0].split("-").slice(1);
    if (d[1][0] == "0"){
        d[1] = d[1][1];
    }
    return `${months[d[0]]} ${d[1]}`;
}

function numDate(date){
    if (date != null){
        let d = date.split("T")[0].split("-");
        return parseInt(`${d[0]}${d[1]}${d[2]}`);        
    }
}