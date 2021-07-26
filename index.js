const element = document.getElementById('DraggableDiv');


element.addEventListener("mousedown",DragMousedown);

let p1 = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;

function DragMousedown(e){
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = CloseDrag;
    document.onmousemove = drag;

    
}

function drag(e)
{
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
}

function CloseDrag(){
    document.onmouseup = null;
    document.onmousemove = null;
}























// function drag(e) {
//     // element.style.top = e.pageY + "px";
//     // element.style.left = e.pageX + "px";

//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

// }

// element.addEventListener("mousedown", function(event){
//       window.addEventListener("mousemove",drag);

// element.addEventListener("mouseup",function(){
//     window.removeEventListener("mousemove",drag);
// })
// });


// e = e || window.event;
// e.preventDefault();
// // calculate the new cursor position:
// pos1 = pos3 - e.clientX;
// pos2 = pos4 - e.clientY;
// pos3 = e.clientX;
// pos4 = e.clientY;
// // set the element's new position:
// elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
// elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";