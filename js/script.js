let progressValue = document.querySelector('.progress_value span'),
progress_container = document.querySelector('.progress_container');
let speed = 20;
let startValue = 0,
    endValue = 90;

let progress = setInterval(() => {
    startValue++;
    progressValue.innerHTML = startValue;
    progress_container.style.background = `conic-gradient(#3A1078 ${3.6 * startValue}deg, #797777 ${3.6 * startValue}deg 360deg)`;
    if(startValue == endValue){
        clearInterval(progress)
    }
    console.log(startValue);
}, speed);



 

