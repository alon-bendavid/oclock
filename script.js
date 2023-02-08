

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

let tasks = [];




// let stroedTime = hour.value +":"+ minute.value +":"+ seconds.value +" "+ ampm.value;
function alarmClock(){
  
  let alarmTime = hour.value +":"+ minute.value +":"+ seconds.value +" "+ ampm.value;


  
  // console.log(hour.value +":"+ minute.value +":"+ seconds.value +" "+ ampm.value);
  console.log(alarmTime);

  // let inputTime = `${hour}:${minutes}:${seconds} ${AM}`;
  const time = new Date();

let localTime = time.toLocaleTimeString();
// localTime.split();
console.log(localTime);

let t = setTimeout(alarmClock, 1000);

    if ( localTime  == alarmTime) {
      clock.innerHTML = "Time to wake up!!! ";
      // alert("stop") ;
    }
  else{
    clock.innerHTML = localTime;
  } 

  
  }
  function handleForm(event) { 
  event.preventDefault();
  
tasks.push( { time:hour.value +":"+ minute.value +":"+ seconds.value +" "+ ampm.value, message: task.value });
console.log(tasks);
} 
form.addEventListener('submit', handleForm);

  alarmClock();


  
// let t = setTimeout(function(){ clockTime() }, 100);



// clockTime();

// clock();

// function time(){
//     while(true){
//         console.log(start);
         
//     }
    
// }

// function clock()
// setTimeout(() => {
//   const millis = Date.now() - start;
//   console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
//   // Expected output: "seconds elapsed = 2"
// }, 2000);

// time();


// working clock ////////////////////////////////////////////// 

// function curenntTime(){


//   const time = new Date();
//   const clock = document.querySelector("#clock");
  
//   hour = time.getHours();
//   minute =time.getMinutes();
//   second = time.getSeconds();
//   let currentTime = (hour +" " + minute +" "+ second );
//   console.log(currentTime);
//   clock.innerHTML = time;
  
//   let t = setTimeout(function(){ curenntTime() }, 1000);
//   }
//   curenntTime();

/////////////////////////////////////////////////////////////////