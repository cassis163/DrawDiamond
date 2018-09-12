var canvas = document.getElementById("DrawingSpace");
var vertices = document.getElementById("Vertices");
var context = canvas.getContext("2d");

var hwidth = canvas.width/2;
var hheight = canvas.height/2;


function drawLine(x1, y1, x2, y2) {
    // Place the origin position at the center of the canvas
    context.beginPath();
    context.moveTo(x1+hwidth, y1+hheight);
    context.lineTo(x2+hwidth, y2+hheight);
    context.stroke();
}

function clearCanvas() {
    context.clearRect(
        0, 0,
        2*hwidth, 2*hheight
    );
}

function drawDiamond() {
    clearCanvas();
    
    var x1 = hwidth
    var y1 = 0

    var n = Math.abs(vertices.value);
    if (!n) {
        n = 4;
    }

    for (i = 0; i < n+1; i++) {
        var alpha = 2*Math.PI/n*i;
        var x2 = Math.cos(alpha)*hwidth;
        var y2 = Math.sin(alpha)*hheight;
        
        drawLine(x1, y1, x2, y2);

        x1 = x2;
        y1 = y2;
    }
}


context.lineWidth = 1;
// Link the event to the drawDiamond variable
onclick = drawDiamond;