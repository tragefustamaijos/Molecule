let canvas = document.createElement("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
let c = canvas.getContext("2d");
document.body.insertBefore(canvas, document.body.firstChild);
c.strokeStyle = "blue";
c.fillStyle = "green";

function Circle()
{
    this.radius = 50;
    this.x = Math.random() * (innerWidth - 2*this.radius) + this.radius;
    this.y = Math.random() * (innerHeight - 2*this.radius) + this.radius;
    this.dx = Math.random() * 2;
    this.dy = Math.random() * 2;
}

function draw(circ)
{
    c.beginPath();
    c.arc(circ.x, circ.y, circ.radius, 0, Math.PI * 2, false);
    c.fill();
    c.stroke();
}

 let arr = [];
 for(let i=0; i<70; i++)
     arr.push(new Circle);

let circ = new Circle;
setInterval(update, 2);

function update()
{
    c.clearRect(0, 0, innerWidth, innerHeight);
    for(var i=0; i<arr.length; i++)
    {
        current = arr[i];
        if(current.x + current.radius > innerWidth || current.x - current.radius < 0)
            current.dx = -current.dx;
        if(current.y + current.radius > innerHeight || current.y - current.radius < 0)
            current.dy = -current.dy;
        
        current.x += current.dx;
        current.y += current.dy;
        draw(current);
    } 
}