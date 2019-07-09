var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//Rectangles
c.fillStyle = 'gold';
c.fillRect(300, 300, 100, 100);
c.fillStyle = 'maroon';
c.fillRect(335, 340, 30, 60);

//Lines
c.beginPath();
c.moveTo(300, 300);
c.lineTo(350, 250);
c.lineTo(400, 300);
c.lineTo(300, 300);
c.strokeStyle = 'maroon';
c.stroke();

//Circles
var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
c.beginPath();
c.fillStyle = 'steelblue';
c.arc(x, y, 5, Math.PI * 2, false);
c.fill();
