const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

//JavaScript class constructor
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

const circleArray = [];

for (let i = 0; i < 100; i++) {
    let radius = 5;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = 0;
    let dy = (Math.random() + 0.1) * 4;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

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

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();
