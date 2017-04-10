/**
 * Created by kedasi on 27/03/2017.
 */
window.onload = function () {

    function canvas() {
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

    }

    function chart() {
        var canvas = document.getElementById('canvasChart'); //locate the canvas
        var ctx = canvas.getContext('2d'); //access the 2d context (has to be lowercase)
        var scores = [100, 90, 85, 45, 72, 88];
        var width = 50;
        var currX = 50;
        var base = 200;

        for (var i = 0; i < scores.length; i++) {
            var height = scores[i];
            var y = canvasChart.height - height;
            var fullCircle = 2 * Math.PI;
            ctx.fillStyle = 'coral';
            ctx.fillRect(currX, y, width, height);

            ctx.fillStyle = 'teal';
            ctx.beginPath(); // removes connective line
            ctx.arc(currX + width / 2, y, 15, 0, fullCircle, false);
            ctx.fill();
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.stroke();

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

    }

    function arc() {
        var canvas = document.getElementById('canvasArc'); //locate the canvas
        var ctx = canvas.getContext('2d'); //access the 2d context (has to be lowercase)

        //using arcTo for rounded corners
        ctx.beginPath();
        ctx.moveTo(80, 50); //x y
        ctx.fillStyle = 'teal';
        ctx.strokeStyle = 'dark blue';
        ctx.lineWidth = 2;
        // top right
        ctx.arcTo(210, 50, 210, 70, 20); // begin x y, end x y, radius

        // bottom right
        ctx.arcTo(210, 200, 160, 200, 20);

        // bottom left
        ctx.arcTo(60, 200, 60, 180, 20);

        // top left
        ctx.arcTo(60, 50, 100, 50, 20);

        ctx.fill();
        ctx.stroke();
    }

    function lines() {
        var canvas = document.getElementById('canvasLine'); //locate the canvas
        var ctx = canvas.getContext('2d'); //access the 2d context (has to be lowercase)

        ctx.strokeStyle = 'violet';
        ctx.lineWidth = 10;
        ctx.beginPath();

        ctx.moveTo(250, 100);
        ctx.lineTo(175, 300);
        ctx.lineTo(325, 300);

        //controls the angle of corner connections
        // ctxLine.lineJoin = 'miter';
        // ctxLine.miterLimit = 1;
        // ctxLine.lineCap = 'round';

        ctx.closePath();

        ctx.stroke();
        ctx.fillStyle = 'HotPink';
        ctx.fill();
    }


    function lineChart() {
        var canvas = document.getElementById('canvasLineChart'); //locate the canvas
        var ctx = canvas.getContext('2d'); //access the 2d context (has to be lowercase)

        var scores = [200, 190, 185, 145, 172, 188];
        var width = 50;
        var currX = 100;
        var base = 200;
        var startX = 0;
        var startY = 0;
        var fullCircle = 2 * Math.PI;

        for (var i = 0; i < scores.length; i++) {
            var x = currX;
            var y = canvas.height - scores[i];

            //moveTo point
            if (startX === 0) startX = x;
            if (startY === 0) startY = y;

            ctx.beginPath();
            ctx.strokeStyle = 'HotPink';
            ctx.lineWidth = 4;
            ctx.moveTo(startX, startY);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.closePath();

            startX = currX + 10;
            startY = y;


            ctx.beginPath();
            ctx.fillStyle = 'PaleTurquoise';
            ctx.arc(x, y, 10, 0, fullCircle, false);
            ctx.fill();
            ctx.closePath();

            currX += width + 10;

        }

    }

    function bezier() {
        var canvas = document.getElementById('canvasBezier'); //locate the canvas
        var ctx = canvas.getContext('2d'); //access the 2d context (has to be lowercase)

        ctx.strokeStyle = 'red';
        ctx.fillStyle = 'yellow';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.bezierCurveTo(50, 400, 400, 400, 400, 50);
        ctx.lineTo(50, 50);
        ctx.stroke();
        ctx.fill();
    }

    function text() {
        var canvas = document.getElementById('canvasText'); //locate the canvas
        var ctx = canvas.getContext('2d'); //access the 2d context (has to be lowercase)

        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'PAPAYAWHIP';
        ctx.font = '40pt Arial';


        ctx.save(); // temporary
        ctx.translate(0, 500);
        ctx.rotate(-0.5 * Math.PI);

        var text = 'Hello World';

        ctx.fillText(text, 150, 150);
        ctx.strokeText(text, 150, 150);
        ctx.restore(); // restores canvas rotation


        var width = ctx.measureText(text).width;
        ctx.fillText('Random text.', 150, width + 120);
    }

    function quad() {
        var canvas = document.getElementById('canvasQuad'); //locate the canvas
        var ctx = canvas.getContext('2d'); //access the 2d context (has to be lowercase)

        ctx.strokeStyle = 'DARKKHAKI';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.quadraticCurveTo(50, 500, 500, 50);
        ctx.stroke();
    }

    

    canvas();
    chart();
    arc();
    lines();
    lineChart();
    bezier();
    quad();
    text();
};