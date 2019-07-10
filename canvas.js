const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');



//JavaScript class constructor
class Circle {
    constructor(x, y, dy, radius) {
        this.x = x;
        this.y = y;
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
            if (this.y + this.radius > innerHeight) {
                this.y = -(Math.random() * (innerHeight - radius * 2) + radius);;
            }
            this.y += this.dy;
            this.draw();
        }
    }
}

const circleArray = [];

for (let i = 0; i < 200; i++) {
    let radius = 5;
    let x = (Math.random() * 200) + 250;
    let y = -(Math.random() * (innerHeight - radius * 2) + radius);
    let dy = Math.random() + 5;
    circleArray.push(new Circle(x, y, dy, radius));
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
