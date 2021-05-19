var Canvas = document.getElementById("Canvas");
var Ctx = Canvas.getContext("2d");

Ctx.beginPath();
Ctx.strokeStyle = "Red";
Ctx.lineWidth = 2;
Ctx.rect(150, 143, 430, 200);
Ctx.stroke();

Ctx.beginPath();
Ctx.strokeStyle= "blue";
Ctx.lineWidth=5;
Ctx.arc(250,210, 40, 0, 2*Math.PI);
Ctx.stroke();

Ctx.beginPath();
Ctx.strokeStyle= "black";
Ctx.lineWidth=5;
Ctx.arc(350, 210, 40, 0, 360);
Ctx.stroke();

Ctx.beginPath();
Ctx.strokeStyle= "red";
Ctx.lineWidth=5;
Ctx.arc(450, 210, 40, 0, 360);
Ctx.stroke();

Ctx.beginPath();
Ctx.strokeStyle= "yellow";
Ctx.lineWidth=5;
Ctx.arc(300, 250, 40, 0, 360);
Ctx.stroke();

Ctx.beginPath();
Ctx.strokeStyle= "Green";
Ctx.lineWidth=5;
Ctx.arc(400, 250, 40, 0, 360);
Ctx.stroke();