// import "./index.css";


var value = 0;
// function handleClick(operation,obj) {
//     console.log(operation);
//     switch (operation) {
//         case 'increase': 
//         // document.getElementById("val").innerHTML = ++value;
//         obj.innerHTML = ++value;
//         break;

//         case 'reset': value = 0;
//             document.getElementById("val").innerHTML = 0;break;

//         case 'decrease': document.getElementById("val").innerHTML = --value;break;


//     }
//     // console.log(value);
//     evaluate();
// }
function evaluate() {
    console.log(value);
    if (value < 0) {

        document.getElementById("val").style.color = 'red';
    }
    else if (value > 0) {
        document.getElementById("val").style.color = "green";
    }
    else {
        document.getElementById("val").style.color = "black";
    }
}
document.getElementById("val").innerHTML = value;
function increase() {
    document.getElementById("val").innerHTML = ++value;
    evaluate();
}

function reset() {
    value = 0;
    document.getElementById("val").innerHTML = value;
    evaluate();
}
function decrease() {
    document.getElementById("val").innerHTML = --value;
    evaluate();
}
