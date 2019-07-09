var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
var dx = 0;
var dy = 4;
var radius = 5;

//Animation Loop
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight); //clears entire canvas
    
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
    c.beginPath();
    c.fillStyle = 'steelblue';
    c.arc(x, y, radius, Math.PI * 2, false);
    c.fill();

    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}

animate();
