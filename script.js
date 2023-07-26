// Get the signature pad element
var canvas = document.getElementById('signature-pad');

// Set the canvas width and height
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// Get the 2D context
var ctx = canvas.getContext('2d');

// Set the line color
ctx.strokeStyle = '#ffffff';

// Set the line width
ctx.lineWidth = 3;

// Set the line cap
ctx.lineCap = 'round';

// Set the line join
ctx.lineJoin = 'round';

// Set the starting position
var posX = 0;
var posY = 0;

// Function to set the starting position
function setPos(e) {
    posX = e.clientX - canvas.offsetLeft;
    posY = e.clientY - canvas.offsetTop;
}

// Function to draw a line
function draw(e) {
    if (e.buttons != 1) return;

    ctx.beginPath();
    ctx.moveTo(posX, posY);
    setPos(e);
    ctx.lineTo(posX, posY);
    ctx.stroke();
}

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to enable the show copy button
function enableShowCopy() {
    document.getElementById('show-copy').disabled = false;
}

// Add event listeners
canvas.addEventListener('mousedown', setPos);
canvas.addEventListener('mouseenter', setPos);
canvas.addEventListener('mousemove', draw);

// Get the buttons and add event listeners
document.getElementById('clear-signature').addEventListener('click', clearCanvas);
document.getElementById('save').addEventListener('click', enableShowCopy);
