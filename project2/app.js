var num = 0;
var teams = [];
var form = document.getElementById("Teams");

function getData(){
    const data = new FormData(form);
    for(const [name,value] of data){
        if(name=="Matches"){
            num = value;
        }
        else{
            teams.push(value);
        }
    }
    console.log(teams.length);
}

form.addEventListener("submit", function (e) 
    {
        e.preventDefault;
        getData();
        console.log(teams);
    });

var add = function() {
    var added = document.createElement("input");
    form.appendChild(added);
    added.setAttribute("name", "Team " + document.getElementById("Teams").childElementCount-1);
    form.appendChild(document.createElement("br"));
  };


function create_table(data){
    
}

