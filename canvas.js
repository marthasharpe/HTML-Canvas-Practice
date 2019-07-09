var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//Rectangles
c.fillStyle = '#ffde05';
c.fillRect(300, 300, 100, 100);
c.fillStyle = 'red';
c.fillRect(335, 340, 30, 60);

//Lines
c.beginPath();
c.moveTo(300, 300);
c.lineTo(350, 250);
c.lineTo(400, 300);
c.strokeStyle = 'red';
c.stroke();
