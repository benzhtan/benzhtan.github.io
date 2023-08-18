function getRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i=i+1) {
        color = color + letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function changeColor() {
document.getElementById("poem").style.color = getRandomColor();
}