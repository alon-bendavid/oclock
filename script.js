

//selctors
const clock = document.querySelector("#clock");
const btn = document.querySelector("#submitBtn");
//form selctor
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let seconds = document.querySelector("#seconds");
let ampm = document.querySelector("#AMPM");
let task = document.querySelector("#task");
const taskIs = document.getElementById("taskIs");
const form = document.getElementById("form");
const clockHouse = document.querySelector(".clock-house")

//select programs selectors
const AlarmClock = document.getElementById("AlarmClock")
const StopWatch = document.getElementById("StopWatch")
const Timer = document.getElementById("Timer")



let alarmList = document.getElementById("alarmList");

let tasks = [];

function alarmClock(){
  
  let alarmTime = hour.value +":"+ minute.value +":"+ seconds.value +" "+ ampm.value;
  
  
  // console.log(hour.value +":"+ minute.value +":"+ seconds.value +" "+ ampm.value);
  // console.log(alarmTime);
  
  // let inputTime = `${hour}:${minutes}:${seconds} ${AM}`;
  const time = new Date();
  
  let localTime = time.toLocaleTimeString();
  // localTime.split();
  // console.log(localTime);
  
  let t = setTimeout(alarmClock, 1000);
  // clock.innerHTML = localTime;
  if (tasks.length === 0){
    clock.innerHTML = localTime;

  }else{


    tasks.forEach(element => {
      if ( localTime  == element.time) {
        clock.innerHTML = "Time to wake up!!! ";
        // alert("stop") ;
        var playButton = document.getElementById("play-button");
        var video = document.getElementById("video");
        video.style.display = "block";
        video.src = "https://www.youtube.com/embed/SPlQpGeTbIE?autoplay=1";
      taskIs.innerHTML = "this alram is set for- " + this.task.value;
      }
  
      else{
        clock.innerHTML = localTime;
      }
   
    });
  }
  console.log(tasks);
  // return localTime;
}
//handle the form and create the task list on the page
function handleForm(event) { 
  event.preventDefault();
  
  tasks.push({ time:hour.value +":"+ minute.value +":"+ seconds.value +" "+ ampm.value, message: task.value });
  // console.log(tasks);
  alarmList.innerHTML = "";
  
  for (let i = 0; i < tasks.length; i++) {
    // console.log(i);
    // console.log(tasks[i].message);
    
    const element =  " Alarm is set for: " + tasks[i].message + '<br>'  + " " + tasks[i].time ;
    const item = document.createElement("li");
    item.innerHTML = element;
    alarmList.appendChild(item);
  }
  }
  
  
  
 //event listeners
 AlarmClock.addEventListener('click', function() {
  clockHouse.style.display = 'flex';

  form.style.display = 'flex';
  form.addEventListener('submit', handleForm);
  alarmClock();
console.log('alarmclockbtn works')
 }) 
 
 
 
 
 
 StopWatch.addEventListener('click', function() {
  clockHouse.style.display = 'none';

  // StopWatch.style = 'block';
  console.log('stopwatchbtn works');


 }) 

  
  
  
 Timer.addEventListener('click', function() {
  clockHouse.style.display = 'none';
  clockHouse.style.display = 'none';


  // StopWatch.style = 'block';
  console.log('stopwatchbtn works');


 }) 

  
  
  //run youtube song
  
//   var playButton = document.getElementById("play-button");
// var video = document.getElementById("video");

// playButton.addEventListener("click", function() {
//   video.style.display = "block";
//   video.src = "https://www.youtube.com/embed/SPlQpGeTbIE?autoplay=1";
// });
  
  
  // let stroedTime = hour.value +":"+ minute.value +":"+ seconds.value +" "+ ampm.value;
  

