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
    ctx.arc(100, 100, 50, 0, 2 * Math.PI, false); // x, y, radius, start angle, end angle, anticlockwise
    ctx.fill();

    ctx.strokeStyle = 'blue';
    ctx.strokeRect(300, 200, 200, 100);


    // chart //


    var canvasChart = document.getElementById('canvasChart'); //locate the canvas
    var ctxChart = canvasChart.getContext('2d'); //access the 2d context (has to be lowercase)
    var scores = [100, 90, 85, 45, 72, 88];
    var width = 50;
    var currX = 50;
    var base = 200;

    for (var i = 0; i < scores.length; i++) {
        var height = scores[i];
        var y = canvasChart.height - height;
        var fullCircle = 2 * Math.PI;
        ctxChart.fillStyle = 'coral';
        ctxChart.fillRect(currX, y, width, height);

        ctxChart.fillStyle = 'teal';
        ctxChart.beginPath(); // removes connective line
        ctxChart.arc(currX + width / 2, y, 15, 0, fullCircle, false);
        ctxChart.fill();
        ctxChart.strokeStyle = 'white';
        ctxChart.lineWidth = 2;
        ctxChart.stroke();

        currX += width + 10;
    }

    // ctxChart.translate(475, 400);
    // ctxChart.rotate(Math.PI);
    // ctxChart.fillStyle = 'coral';
    // for (var i = 0; i < scores.length; i++) {
    //     ctxChart.fillRect(currX, 0, width, scores[i]);
    //     currX += width + 10;
    // }

    // ctxChart.strokeStyle = 'white';
    // ctxChart.fillStyle = 'purple';
    // ctxChart.arc(310, 100, 30, 0, 2 * Math.PI, false);
    // ctxChart.stroke();
    // ctxChart.fill();


    // Arc //

    var canvasArc = document.getElementById('canvasArc'); //locate the canvas
    var ctxArc = canvasArc.getContext('2d'); //access the 2d context (has to be lowercase)

    //using arcTo for rounded corners
    ctxArc.beginPath();
    ctxArc.moveTo(80, 50); //x y
    ctxArc.fillStyle = 'teal';
    ctxArc.strokeStyle = 'dark blue';
    ctxArc.lineWidth = 2;
    // top right
    ctxArc.arcTo(210, 50, 210, 70, 20); // begin x y, end x y, radius

    // bottom right
    ctxArc.arcTo(210 ,200, 160, 200, 20);

    // bottom left
    ctxArc.arcTo(60, 200, 60, 180, 20);

    // top left
    ctxArc.arcTo(60, 50, 100, 50, 20);
    
    ctxArc.fill();
    ctxArc.stroke();

};