var num = 0;
var teams = [];
var form = document.getElementById("Teams");
var schedule = [];

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
}

form.addEventListener("submit", function (e) 
    {
        e.preventDefault;
        getData();
        console.log(num);
        create_table();
        let temp = [];
        for(i in schedule){
            temp.push([]);
            for(j in schedule[i]){
                temp[i].push(schedule[i][j]);
            }
        }
        for(let i=0;i<num-1;i++){
            for(j in temp){
                schedule.push(temp[j]);
            }
        }
        add_table();
    });

var add = function() {
    let added = document.createElement("input");
    form.appendChild(added);
    added.setAttribute("name", "Team " + document.getElementById("Teams").childElementCount-1);
    form.appendChild(document.createElement("br"));
  };

function create_table(){
    let n = teams.length;
    let used = [];
    if(n%2!=0){
        teams.push("");
        n+=1;
    }
    for(let i=0;i<n;i++){
        used.push(create_arr(n));
        used[i][i] = 1;
    }
    for(i in used){
        console.log(used[i]);
    }
    for(let i=0;i<n-1;i++){
        schedule.push([]);
        var lu = create_arr(n);
        for(let j=0;j<n/2;j++){
            for(k in lu){
                if(lu[k]==0){
                    lu[k]+=1;
                    let l=0;
                    while(lu[l]!=0 || used[k][l]!=0){
                        l++;
                    }
                    lu[l]=1;
                    used[k][l]=1;
                    used[l][k]=1;
                    schedule[i].push(teams[k] + " vs " + teams[l]);
                    break;
                }
            }
        }
    }
}

function create_arr(n){
    let x=[]
    for(let i=0;i<n;i++){
        x.push(0);
    }
    return x;
}

function add_table(){
    var table = document.getElementById("Schedule");
    for(let i=0;i<=schedule.length;i++){
        let added = document.createElement("tr")
        added.setAttribute("id", "row" + i);
        table.appendChild(added);
        if(i==0){
            for(j in schedule[0]){
                let s = document.createElement("th");
                s.textContent += "Match" + (j + 1);
            }
        }

    }
}