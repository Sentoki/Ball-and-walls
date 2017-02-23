window.onload = function () {
    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');

    window.xSpeed = 4;
    window.ySpeed = 4;

    window.x = 20;
    window.y = 20;
    window.radius = 20;

    var fps = 50;
    setInterval(drawScene, 1000/fps, context);
};

function drawBorder(context) {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(800, 0);
    context.lineTo(800, 600);
    context.lineTo(0, 600);
    context.lineTo(0, 0);
    context.strokeStyle = 'black';
    context.stroke();
}

function drawCircle(context, x, y) {
    context.beginPath();
    context.arc(x, y, window.radius, 0, 2 * Math.PI);
    context.fillStyle = 'black';
    context.fill();
    context.stroke();
}

function clearCanvas(context) {
    context.clearRect(0, 0, 800, 600);
}

function getNewCoordinate(currentCoordinate, speed) {
    return currentCoordinate + speed;
}

function drawScene(context) {
    clearCanvas(context);
    drawBorder(context);
    window.x = getNewCoordinate(window.x, window.xSpeed);
    window.y = getNewCoordinate(window.y, window.ySpeed);
    if ((window.y + window.radius) >= 600 || (window.y - window.radius) <= 0) {
        window.ySpeed = window.ySpeed * -1;
        window.y = getNewCoordinate(window.y, window.ySpeed);
    }
    if ((window.x + window.radius) >= 800 || (window.x - window.radius) <= 0) {
        window.xSpeed = window.xSpeed * -1;
        window.x = getNewCoordinate(window.x, window.xSpeed);
    }
    drawCircle(context, window.x, window.y);
}