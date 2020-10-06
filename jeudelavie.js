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






    /*
   function clickableGrid( rows, cols, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
      var tr = grid.appendChild(document.createElement('tr'));
      for (var c=0;c<cols;++c){
        var cell = tr.appendChild(document.createElement('td'));
        cell.innerHTML = ++i;
        cell.addEventListener('click',(function(el,r,c,i){
          return function(){ callback(el,r,c,i); }
         })(cell,r,c,i),false);
      }
    }
    return grid;
  }
  */


/*
 function changeColor(evt){
  var clickedOn = evt.target;
  // for HTML
  clickedOn.style.backgroundColor = '#f00';

  // for SVG
  clickedOn.setAttribute('fill','red');
}
mySquare.addEventListener('click',changeColor,false);

*/

const tab_transformation_25 = (tab) => {
  for (let i=0 ; i<25*25; i++){
    if (tab[i]==0){
      if (tab[i-1]+tab[i+1]+tab[i+24]+tab[i+25]+tab[i+26]+tab[i-24]+tab[i-25]+tab[i-26]==3){
        tab[i]=1;
      }
    }else{
      if (tab[i-1]+tab[i+1]+tab[i+24]+tab[i+25]+tab[i+26]+tab[i-24]+tab[i-25]+tab[i-26]==3 || tab[i-1]+tab[i+1]+tab[i+24]+tab[i+25]+tab[i+26]+tab[i-24]+tab[i-25]+tab[i-26]==2){
        tab[i]=1;
      }else{
        tab[i]=0;
      }
    }
  }
};




const drawGrid = (ctx, tileSize, highlightNum, tab) => {
  for (let y = 0; y < cvs.width / tileSize; y++) {
    for (let x = 0; x < cvs.height / tileSize; x++) {
      const parity = (x + y) % 2;
      const tileNum = x + cvs.width / tileSize * y;
      const xx = x * tileSize;
      const yy = y * tileSize;

      if (tileNum === highlightNum) {
        ctx.fillStyle = "#A0A0A0";
      }
      else {
        ctx.fillStyle = parity ? "#fff" : "#fff";
      }
      /*
      for (let i = 0 ;i<tab.length ; i++){
        if (tileNum == tab[i]){
          ctx.fillStyle ="#000";
        }
      }
      */
      
      if (tab[tileNum]==1){
        ctx.fillStyle="#000";
      }
      
      
      ctx.fillRect(xx, yy, tileSize, tileSize);
      //ctx.fillStyle = parity ? "#fff" : "#000";
    }
  }
};

var tab = [];

var tab2 = new Array(25*25);

for (let i = 0 ;i<25*25 ; i++){
  tab2[i]=0;
}

const size = 25;
const ctx = cvs.getContext("2d");
const tileSize = cvs.width / size;
const status = document.createElement("pre");
let lastTile = -1;

drawGrid(ctx, tileSize, -1, tab2);
document.body.style.display = "flex";
document.body.style.alignItems = "flex-start";

cvs.addEventListener("mousemove", evt => {
  event.target.style.cursor = "pointer";
  const tileX = ~~(evt.offsetX / tileSize);
  const tileY = ~~(evt.offsetY / tileSize);
  const tileNum = tileX + cvs.width / tileSize * tileY;
  
  if (tileNum !== lastTile) {
    lastTile = tileNum;
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    drawGrid(ctx, tileSize, tileNum, tab);
  }
  
  status.innerText = `  mouse coords: {${evt.offsetX}, ${evt.offsetX}}
  tile coords : {${tileX}, ${tileY}}
  tile number : ${tileNum}`;
});

cvs.addEventListener("click", event => {
  status.innerText += "\n  [clicked]";
  const tileX = ~~(event.offsetX / tileSize);
  const tileY = ~~(event.offsetY / tileSize);
  const tileNum = tileX + cvs.width / tileSize * tileY;
  var b=false;
  console.log(tileNum);
  /*
  for (let i=0; i<tab.length; i++){
    if (tileNum==tab[i]){
      tab[i]=-1;
      b=true;
    }
  }
  */
  
  if (tab2[tileNum]==1){
    tab2[tileNum]==0;
  }else{
    tab2[tileNum]==1;
  }
  

  if (b==false){
    tab.push(tileNum);
  }
  tab.forEach(function(x){
    console.log(x)
  });
  drawGrid(ctx, tileSize, -1, tab2);
});

/*
canvas.addEventListener("mouseout", event => {
  drawGrid(canvas, ctx, tileSize);
  status.innerText = "";
  lastTile = -1;
});
*/




    /*
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
    */









    /*
    const drawGrid = (canvas, ctx, tileSize, highlightNum) => {
  for (let y = 0; y < canvas.width / tileSize; y++) {
    for (let x = 0; x < canvas.height / tileSize; x++) {
      const parity = (x + y) % 2;
      const tileNum = x + canvas.width / tileSize * y;
      const xx = x * tileSize;
      const yy = y * tileSize;

      if (tileNum === highlightNum) {
        ctx.fillStyle = "#f0f";
      }
      else {
        ctx.fillStyle = parity ? "#555" : "#ddd";
      }
      
      ctx.fillRect(xx, yy, tileSize, tileSize);
      ctx.fillStyle = parity ? "#fff" : "#000";
      ctx.fillText(tileNum, xx, yy);
    }
  }
};

const size = 10;
const canvas = document.createElement("canvas");
canvas.width = canvas.height = 200;
const ctx = canvas.getContext("2d");
ctx.font = "11px courier";
ctx.textBaseline = "top";
const tileSize = canvas.width / size;
const status = document.createElement("pre");
let lastTile = -1;

drawGrid(canvas, ctx, tileSize);
document.body.style.display = "flex";
document.body.style.alignItems = "flex-start";
document.body.appendChild(canvas);
document.body.appendChild(status);

canvas.addEventListener("mousemove", evt => {
  event.target.style.cursor = "pointer";
  const tileX = ~~(evt.offsetX / tileSize);
  const tileY = ~~(evt.offsetY / tileSize);
  const tileNum = tileX + canvas.width / tileSize * tileY;
  
  if (tileNum !== lastTile) {
    lastTile = tileNum;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid(canvas, ctx, tileSize, tileNum);
  }
  
  status.innerText = `  mouse coords: {${evt.offsetX}, ${evt.offsetX}}
  tile coords : {${tileX}, ${tileY}}
  tile number : ${tileNum}`;
});

canvas.addEventListener("click", event => {
  status.innerText += "\n  [clicked]";
});

canvas.addEventListener("mouseout", event => {
  drawGrid(canvas, ctx, tileSize);
  status.innerText = "";
  lastTile = -1;
});
*/

});