

//selctors
const clock = document.querySelector("#clock");

//form selctor
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let seconds = document.querySelector("#seconds");
let ampm = document.querySelector("#AMPM");
// let alarmTime = hour.value +":"+ minute.value +":"+ seconds.value +" "+ ampm.value;
function alarmClock(inputTime){
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
      clock.innerHTML = "time to wake up!!";
      alert("stop") ;
    }
  else{
    clock.innerHTML = localTime;
  } 

  
  }

  alarmClock(11,35,15,"AM");




  
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