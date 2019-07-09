var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//JavaScript Object
class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;

        this.draw = () => {
            //Circle
            c.beginPath();
            c.fillStyle = 'steelblue';
            c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
            c.fill();
        }
        this.update = () => {
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
}
var circle = new Circle(200, 200, 0, 4, 5);

//Animation Loop
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight); //clears entire canvas
    circle.update();

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
}

animate();
