setInterval(show12hrTime, 1000);
    // -- my clock
// Defining showTime funcion
function show12hrTime() {
    // Getting current time and date
    let time = new Date();
    time.setTime(time.getTime() + (60 * 60 * -4000));

    let hour = time.getUTCHours();
    let min = time.getUTCMinutes();
    let sec = time.getUTCSeconds();
    var am_pm = (hour > 11) ? "pm" : "am";
    
    if(hour > 12) {
        hour -= 12;
    } else if(hour == 0) {
        hour = 12;
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;

    // Displaying the time
    document.getElementById("12hour").innerHTML = currentTime;
}

show12hrTime();


setInterval(show24hrTime, 1000);
    // -- my clock
// Defining showTime funcion
function show24hrTime() {
    // Getting current time and date
    let time = new Date();
    time.setTime(time.getTime() + (60 * 60 * -4000));

    let hour = time.getUTCHours();
    let min = time.getUTCMinutes();
    let sec = time.getUTCSeconds();

    if (hour == 0) {
        hour = 24;
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec;

    // Displaying the time
    document.getElementById("24hour").innerHTML = currentTime;
}

show24hrTime();

/*
    // -- local clock
// Defining showTime funcion
function showLocalTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "am";

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "pm";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "am";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;

    // Displaying the time
    document.getElementById("localTime").innerHTML = currentTime;
}

showLocalTime();

*/