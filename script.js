

//selctors
const clock = document.querySelector("#clock");
const btn = document.querySelector("#submitBtn");
//form selctor
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let seconds = document.querySelector("#seconds");
let ampm = document.querySelector("#AMPM");
let task = document.querySelector("#task");
const form = document.getElementById("form");


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
  
  if ( localTime  == alarmTime) {
    clock.innerHTML = "Time to wake up!!! ";
    // alert("stop") ;
  }
  else{
    clock.innerHTML = localTime;
  } 
  
  return localTime;
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
  form.addEventListener('submit', handleForm);
  alarmClock();
  
  
  
  
  
  
  
  // let stroedTime = hour.value +":"+ minute.value +":"+ seconds.value +" "+ ampm.value;
  

