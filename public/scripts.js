/**
 * Created by kedasi on 27/03/2017.
 */
window.onload = function () {
    var canvas = document.getElementById('Canvas'); //locate the canvas
    var ctx = canvas.getContext('2d'); //get the context

    //rendering
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 200, 100);
};