

//functions
function make(){
    for (let i = 0; i<100; i++){
        document.getElementById("grid1").innerHTML += '<div class ="box1"></div>';
         
    }
    
}

function change(){
    const box1 = document.getElementsByClassName("box1")
    box1[20].style.backgroundcolor="white";
}

//run at start
make();

//event listerners
const box1 = document.getElementsByClassName("box1");
for (let i =0, long=box1.length;i<long;i++){
    box1[i].addEventListener("mouseover",change);
}
