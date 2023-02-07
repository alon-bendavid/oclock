// This example takes 2 seconds to run
function clockTime(){
  
  
  // const time = new Date();
  const time = new Date();
  // console.log(time);
  
  const clock = document.querySelector("#clock");
  
  let hour = time.getHours();
  let minute =time.getMinutes();
  let second = time.getSeconds();
let milisecond = time.getMilliseconds() / 100;
//present only the current time
let localTime = time.toLocaleTimeString();
// console.log(localTime);
let currentTime = (hour +" " + minute +" "+ second);
console.log(currentTime);
// clock.innerHTML = time;
// }
let t = setTimeout(clockTime, 100);

  if ( currentTime  == "21 36 50") {
    clock.innerHTML = "time to wake up!!";
    alert("stop") ;
  }
else{
  clock.innerHTML = localTime;
} 
    // if (clock.innerHTML == "9:20:10")  {
    //   clock.innerHTML = "wake up!";
    // }
  // }
  
  }
// let t = setTimeout(function(){ clockTime() }, 100);



// clockTime();

// clock();

clock.innerHTML = clockTime();
alarmClock();

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