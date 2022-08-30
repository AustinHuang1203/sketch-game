//variables
let drawing1 = 0
let drawing2 = 1


//functions
function make(){
    for (let i = 0; i<400; i++){
        document.getElementById("grid1").innerHTML += `<div id = "box${i}" class ="box1w"></div>`;
    }
}
function reset1(){
    const reset1 = document.getElementsByClassName("box1b");
    console.log(reset1);
    for (let i = 0, long=reset1.length;i<long;i++){
        reset1[i].className="box1w";
    }
}

function reset(){
    for (let i = 0;i<400;i++){
        let boxi = document.getElementById(`box${i}`)
        boxi.className= "box1w"
    }
}

function change(x){
    const box1 = document.getElementById(`box${x}`);
    if(drawing2 == 0){
    if(box1.className == "box1b"){
        box1.className="box1w";
    } else{
        box1.className="box1b"
    };
}
    
}

function toggle1(){
    drawing1 = 1;
}

function toggle2(){
    if (drawing2 == 0){
        drawing2 = 1;
    } else{
        drawing2 = 0;
    }
}

//run at start
make();

//event listerners
const box1 = document.getElementsByClassName("box1w");
for (let i =0, long=box1.length;i<long;i++){
    box1[i].addEventListener("mouseover",()=>{change(i)});
}

const grid1 = document.getElementById("grid1");
grid1.addEventListener("mousedown",toggle2);

const btn1 = document.getElementById("button1");
btn1.addEventListener("click",reset);