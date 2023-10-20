const canvas = document.getElementById("canva");

const ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath()
ctx.arc(200 , 200, 100, 0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath()
// esto es para hacer los ojos
ctx.fillStyle = 'red';
ctx.moveTo(130, 190);
ctx.lineTo(120, 95);
ctx.lineTo(140, 86);
ctx.fill();
ctx.moveTo(130, 190);
ctx.lineTo(120, 89 );
ctx.lineTo(140, 86);
ctx.fill();
ctx.fillStyle = 'red';
ctx.beginPath();
// esto es para hacer la boca de la cara
ctx.arc(200, 225, 60, 0, Math.PI, false);
ctx.fill();


ctx.beginPath();
ctx.strokeStyle = 'white';
ctx.moveTo(144, 124);
ctx.lineWidth = 14;
ctx.lineCap = "round";
ctx.lineTo(183, 145);
ctx.stroke();



