let currentLight = 0;

function changeLight() {
    if (currentLight == 0) {
        document.getElementById("red").style.backgroundColor = "gray";
        document.getElementById("yellow").style.backgroundColor = "yellow";
        document.getElementById("message").innerHTML = "The light is yellow.";
        currentLight = 1;
    } else if (currentLight == 1) {
        document.getElementById("yellow").style.backgroundColor = "gray";
        document.getElementById("green").style.backgroundColor = "green";
        document.getElementById("message").innerHTML = "The light is green.";
        currentLight = 2;
    } else {
        document.getElementById("green").style.backgroundColor = "gray";
        document.getElementById("red").style.backgroundColor = "red";
        document.getElementById("message").innerHTML = "The light is red.";
        currentLight = 0;
    }
}

document.addEventListener("keydown", function(event) {

    if (event.key == "r") {
        document.getElementById("red").style.backgroundColor = "red";
        document.getElementById("yellow").style.backgroundColor = "gray";
        document.getElementById("green").style.backgroundColor = "gray";
        document.getElementById("message").innerHTML = "STOP!";
        currentLight = 0;
    }

    if (event.key == "y") {
        document.getElementById("red").style.backgroundColor = "gray";
        document.getElementById("yellow").style.backgroundColor = "yellow";
        document.getElementById("green").style.backgroundColor = "gray";
        document.getElementById("message").innerHTML = "SLOW DOWN!";
        currentLight = 1;
    }

    if (event.key == "g") {
        document.getElementById("red").style.backgroundColor = "gray";
        document.getElementById("yellow").style.backgroundColor = "gray";
        document.getElementById("green").style.backgroundColor = "green";
        document.getElementById("message").innerHTML = "GO!";
        currentLight = 2;
    }
});

window.onresize = function() {
    document.getElementById("windowSize").innerHTML =
        "Browser width: " + window.innerWidth + "px";
};

document.getElementById("windowSize").innerHTML =
    "Browser width: " + window.innerWidth + "px";
