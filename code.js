

//functions
function make(){
    for (let i = 0; i<100; i++){
        document.getElementById("grid1").innerHTML += `<div id = "box${i}" class ="box1"></div>`;
    }
}

function change(x){
    const box1 = document.getElementById(`box${x}`);
    if(box1.className == "box1"){
        box1.className="box1w";
    } else{
        box1.className="box1"
    }
    
}

//run at start
make();

//event listerners
const box1 = document.getElementsByClassName("box1");
for (let i =0, long=box1.length;i<long;i++){
    box1[i].addEventListener("mouseover",()=>{change(i)});
}
