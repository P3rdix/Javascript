var num = 0;

function getData(form) {
    var formData = new FormData(form);
    let temp = []
    for(var pair of formData.entries()) {
        temp.push(pair)
        console.log(pair[0] + " : " + pair[1]);
    }
    console.log("Bye");
    return temp
}

document.getElementById("Teams").addEventListener("submit", function (e) 
    {
        e.preventDefault;
        let data = getData(e.target);
    });

var add = function() {
    var added = document.createElement("div");
    document.getElementById("Teams").appendChild(added);
    added.setAttribute("id", "Team " + document.getElementById("Teams").childElementCount);
    added.appendChild(document.createElement("input"));
    added.appendChild(document.createElement("br"));
  };

function create_table(data){
    
}

