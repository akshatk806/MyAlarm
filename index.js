// You have to create an alarm clock, allow user to set alarm for a certain time

const alarmSubmit=document.getElementById('btn');
alarmSubmit.addEventListener('click',setAlarm);

var audio = new Audio('./audio.mp3');
function ringAlarm(){
    audio.play();
}

function setAlarm(event){
    event.preventDefault();
    console.log("Setting the Alarm");
    const alarm=document.getElementById('alarm');
    alarmDate=new Date(alarm.value);
    console.log(`Setting alarm for ${alarmDate}`);
    const now =new Date();
    let timeToAlarm=alarmDate-now;
    console.log(timeToAlarm);      // finding the diffrence in milliseconds

    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("ringing now");
            ringAlarm();
        }, timeToAlarm);
    }
}