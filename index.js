//dom
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');

//show time function
function showTIme() {
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    time.innerHTML = `${hour}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)}`;

    setGreeting();
    setTimeout(showTIme, 1000);
}
//add zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set greeting
function setGreeting() {
    var today = new Date();
    var hour = today.getHours();
    if (hour < 12) {
        //goodmoring
        greeting.innerHTML = "Good Morning";
        document.body.style.backgroundImage = "url('images/morning.jpg')";
    } else if (hour < 15) {
        //goodafternoon
        greeting.innerHTML = "Good Afternoon";
        document.body.style.backgroundImage = "url('images/afternoon.jpg')";
    } else if (hour < 19) {
        // goodevening
        greeting.innerHTML = "Good Evening";
        document.body.style.backgroundImage = "url('images/afternoon.jpg')";
    } else {
        greeting.innerHTML = "Good Evening";
        document.body.style.backgroundImage = "url('images/night.jpg')";
    }

}

function setName(e) {
    console.log("event me aya");
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerHTML);
            document.getElementById('name').blur();
            document.getElementById('name').style.textDecoration = "none";
        }
    } else {
        localStorage.setItem('name', e.target.innerHTML);
        document.getElementById('name').style.textDecoration = "none";
    }
}

function getName() {
    if (localStorage.getItem('name') === null) {
        document.getElementById('name').innerHTML = "[Enter Name]";
    } else {
        document.getElementById('name').innerHTML = localStorage.getItem('name');
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        document.getElementById('focus').innerHTML = "[ENTER FOCUS]";
    } else {
        document.getElementById('focus').innerHTML = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerHTML);
            document.getElementById('focus').blur();
            document.getElementById('name').style.textDecoration = "none";
        }
    } else {
        localStorage.setItem('focus', e.target.innerHTML);
        document.getElementById('focus').style.textDecoration = "none";
    }

}
document.getElementById('name').addEventListener('keypress', setName);
document.getElementById('focus').addEventListener('keypress', setFocus);

//run
showTIme();
getName();
getFocus();