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
// ojo derecho
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.moveTo(190, 190);
ctx.lineTo(135, 190);
ctx.lineTo(150, 152);
ctx.fill();
//ojo izquierdo
ctx.beginPath();
ctx.moveTo(265, 190);
ctx.lineTo(212, 190);
ctx.lineTo(249, 150);
ctx.fill();
// esto es para la boca
ctx.fillStyle = 'red';
ctx.beginPath();
// esto es para hacer la boca de la cara
ctx.arc(200, 225, 60, 0, Math.PI, false);
ctx.fill();



// luna
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(60, 62, 21, 0, Math.PI * 7, true);
ctx.fill();

// tronco

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.moveTo(200, 110);
ctx.lineWidth = 13;
ctx.lineCap = "round";
ctx.lineTo(175, 68);
ctx.stroke();


