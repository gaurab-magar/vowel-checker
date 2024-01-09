function updateClock(){
    let now = new Date();
    let hour = now.getHours().toString().padStart(2,'0');
    let minute = now.getMinutes().toString().padStart(2,'0');;
    let second = now.getSeconds().toString().padStart(2,'0');;

    let hours = document.getElementById('hour');    
    let minutes = document.getElementById('minute');    
    let seconds = document.getElementById('second');

    hours.textContent = hour;
    minutes.textContent = minute;
    seconds.textContent = second;

}

setInterval(updateClock,1000);
