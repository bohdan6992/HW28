
const main = document.querySelector('.timer__main-clock')
const btn = document.querySelector('.play-btn')
let time = document.querySelector('.time-inp');


btn.addEventListener('click', () => {
  time = document.querySelector('.time-inp').value;

  let dateInp = time.split(':');

  let hoursInp = dateInp[0];
  let minutesInp =  dateInp[1];

  hoursInp  = Number(hoursInp );
  minutesInp  = Number(minutesInp);

  const dateNow = new Date();

  let hoursNow = dateNow.getHours();
  let minutesNow =  dateNow.getMinutes();

  let hoursResult = hoursInp - hoursNow;
  let minuteResult =  minutesInp - minutesNow;
  let secondsResult = 0;

  const showSecond = () => {

    let formattedTime = hoursResult + ':' + minuteResult + ':' + secondsResult;
    main.innerText = formattedTime;
    secondsResult--;
    if(secondsResult <= 0 && minuteResult > 0){
      minuteResult--;
      secondsResult = 60;
    }else if(minuteResult <= 0 && hoursResult > 0){
      hoursResult--;
      minuteResult = 60;
    }else if(hoursResult <= 0 && minuteResult <= 0 && secondsResult <= 0){
      main.innerText = 'End';
      clearInterval(timer);
    }
  };
  const timer = setInterval(showSecond, 1000);
})






