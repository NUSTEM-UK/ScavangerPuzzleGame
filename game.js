$("div").each(function(event) {
    if ($(this).attr("id") == "grid1" || $(this).attr("id") == "grid4") {
        return;
    }

    var rotateamount = 90 * getRandomInt(4);
    $(this).css({ 'transform': 'rotate(' + rotateamount + 'deg)' });
});

$("div").click(function(event) {
    if ($(this).attr("id") == "grid1" || $(this).attr("id") == "grid4") {
        return;
    }

    angle = getRotationDegrees($(this)) + 90;
    console.log(angle);
    $(this).css({ 'transform': 'rotate(' + angle + 'deg)' });

    if ($(this).attr("id") == "grid8" || $(this).attr("id") == "grid22") {
        if (angle >= 180) {
            $(this).css({ 'transform': 'rotate(0deg)' });
        }
    }

    if (angle >= 360) {
        $(this).css({ 'transform': 'rotate(0deg)' });
    }

    var finished = checkFinish();

    if (checkFinish()) {
        alert("senior.books.happen - How many different types of plants can you spot before the next location?");
    }
});

function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
        obj.css("-moz-transform") ||
        obj.css("-ms-transform") ||
        obj.css("-o-transform") ||
        obj.css("transform");
    if (matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function checkFinish() {
    var finished = true;
    var grid = document.querySelectorAll("div");

    for (let square of grid) {
        let angle = getRotationDegrees($(square));
        if (angle > 0) {
            finished = false;
        }
    }

    return finished;
}