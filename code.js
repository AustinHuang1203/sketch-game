//variables
let drawing1 = 0;

// 0 is draw, 1 is stop
let drawing2 = 1;

// 0  black, 1 blue, 2 green, 3 red, 4 eraser
let color = 0;


//functions
function make(){
    for (let i = 0; i<1600; i++){
        document.getElementById("grid1").innerHTML += `<div id = "box${i}" class ="box1w"></div>`;
    }
}
function reset(){
    for (let i = 0;i<1600;i++){
        let boxi = document.getElementById(`box${i}`)
        boxi.className= "box1w"
    }
}

//most impt thing
function change(x){
    const box1 = document.getElementById(`box${x}`);
    if(drawing2 == 0){
        
        if(color == 0){
            box1.className="box1b"
        }
        else if (color == 2){
            box1.className="box1g"
        }
        else if (color == 3){
            box1.className="box1r"
        }
        else if (color == 4){
            box1.className="box1w"
        }
        else if (color == 1){
            box1.className="box1blu"
        }
            
        

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

const colorbtn = document.getElementsByClassName("colorbtn");

function makegreen(){
    color = 2;
    for (let i = 0, long1 = colorbtn.length; i<long1; i++){
        colorbtn[i].className = "button1 colorbtn"
    };
    const greenbtn = document.getElementById("button3");
    greenbtn.className = "button2 colorbtn";
}

function makeblack(){
    color = 0;
    for (let i = 0, long1 = colorbtn.length; i<long1; i++){
        colorbtn[i].className = "button1 colorbtn"
    };
    const blackbtn = document.getElementById("button4");
    blackbtn.className = "button2 colorbtn";
}

function makered(){
    color = 3;
    for (let i = 0, long1 = colorbtn.length; i<long1; i++){
        colorbtn[i].className = "button1 colorbtn"
    };
    const redbtn = document.getElementById("button5");
    redbtn.className = "button2 colorbtn";
}

function makewhite(){
    color = 4;
    for (let i = 0, long1 = colorbtn.length; i<long1; i++){
        colorbtn[i].className = "button1 colorbtn"
    };
    const redbtn = document.getElementById("button2");
    redbtn.className = "button2 colorbtn";
}

function makeblue(){
    color = 1;
    for (let i = 0, long1 = colorbtn.length; i<long1; i++){
        colorbtn[i].className = "button1 colorbtn"
    };
    const redbtn = document.getElementById("button6");
    redbtn.className = "button2 colorbtn";
}



//run at start
make();
makeblack();

//event listerners
const box1 = document.getElementsByClassName("box1w");
for (let i =0, long=box1.length;i<long;i++){
    box1[i].addEventListener("mouseover",()=>{change(i)});
}

const grid1 = document.getElementById("grid1");
grid1.addEventListener("mousedown",toggle2);

const btn1 = document.getElementById("button1");
btn1.addEventListener("click",reset);

const btn2 = document.getElementById("button2");
btn2.addEventListener("click",makewhite);

const btn3 = document.getElementById("button3");
btn3.addEventListener("click", makegreen);

const btn4 = document.getElementById("button4");
btn4.addEventListener("click", makeblack);

const btn5 = document.getElementById("button5");
btn5.addEventListener("click", makered);

const btn6 = document.getElementById("button6");
btn6.addEventListener("click", makeblue);