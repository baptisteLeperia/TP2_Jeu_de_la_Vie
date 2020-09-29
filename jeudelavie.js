document.addEventListener("DOMContentLoaded",function(){


/*
// Un booléen qui, lorsqu'il est vrai, indique que le déplacement de
// la souris entraîne un dessin sur le canevas
let isDrawing = false;
let x = 0;
let y = 0;

const context = cvs.getContext('2d');

// On récupère le décalage du canevas en x et y par rapport aux bords
// de la page
const rect = cvs.getBoundingClientRect();

// On ajoute les gestionnaires d'évènements pour mousedown, mousemove
// et mouseup
cvs.addEventListener('mousedown', e => {
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  isDrawing = true;
});

cvs.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

*/

    /*
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    ctx.textAlign = "center";
    ctx.font = "30px arial";
    ctx.strokeStyle = "#0000FF";
    ctx.strokeText("Ready!", cvs.width/2, cvs.height/2);
    */

    /*
    var ctx = cvs.getContext("2d");

    cvs.addEventListener("mousemove", function(e) {
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        ctx.fillText("x = " + e.clientX + ", y = " + e.clientY, cvs.width/2, cvs.height/2);
    });
    */
    var rect = cvs.getBoundingClientRect();
    var ctx = cvs.getContext("2d");
    let isDrawing = true;

    let x = 0;
    let y = 0;

    cvs.addEventListener('mousemove', e => {

        if (isDrawing === true) {
            drawLine(ctx, x, y, e.clientX - rect.left, e.clientY - rect.top);
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
        }

        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top; 
        console.log(x + " " + y)
    });

    function drawLine(context, x1, y1, x2, y2) {
        context.beginPath();
        context.strokeStyle = 'black';
        context.lineWidth = 1;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();
    }


});