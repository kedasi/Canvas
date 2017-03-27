/**
 * Created by kedasi on 27/03/2017.
 */
window.onload = function () {
    var canvas = document.getElementById('canvas'); //locate the canvas
    var ctx = canvas.getContext('2d'); //access the 2d context (has to be lowercase)

    //rendering graphics
    ctx.fillStyle = 'pink';
    ctx.fillRect(300, 200, 200, 100); //location X Y, width, height

    ctx.fillStyle = 'yellow';
    ctx.arc(100, 100, 50, 0, 2 * Math.PI, false); // x, y, radius, start angle, end angle, clockwise(true)/anticlockwise(false)
    ctx.fill();
};