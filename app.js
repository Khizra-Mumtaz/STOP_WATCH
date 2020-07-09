var h1 = document.getElementsByTagName('h2')[0],
    startbutton = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    h1.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    startbutton.disabled = true
    t = setTimeout(add, 1000);
}
/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    startbutton.disabled = false
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    startbutton.disabled = false
    h1.innerHTML = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}