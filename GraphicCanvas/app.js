const canvas = document.getElementById("canva");

const ctx = canvas.getContext("2d");

// esto es para hacer un cuadrado
ctx.strokeRect(10, 10, 100, 100);
ctx.fillRect(20, 20, 80, 80);
ctx.clearRect(30, 30, 60, 60);
ctx.fillStyle = `rgb(255, 0, 0)`;
ctx.fillRect(40, 40, 40, 40);


ctx.fillStyle = "rgb(0, 0, 255)";

// esto es para hacer un triangulo
ctx.beginPath();
ctx.moveTo(60, 48);
ctx.lineTo(75, 70);
ctx.lineTo(45, 70);
ctx.fill();

// esto es para hacer un circulo
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(60, 62, 5, 0, Math.PI * 2, true);
ctx.fill();


ctx.beginPath()
ctx.arc(200 , 200, 100, 0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath()
// esto es para hacer los ojos
ctx.fillStyle = 'black';
ctx.arc(150, 170, 20, 0, Math.PI * 2, true);
ctx.fill();
ctx.arc(250, 170, 20, 0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
// esto es para hacer la boca de la cara
ctx.arc(200, 220, 60, 0, Math.PI, false);
ctx.fill();