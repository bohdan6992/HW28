const btn1 = document.querySelector('.btn1'); 
const btn2 = document.querySelector('.btn2'); 
const divYes = document.querySelector('.divYes'); 
const divNo = document.querySelector('.divNo'); 


const clickerCountFunc = (btn, word, div, c) => {
  c = 0;
  btn.addEventListener('click', () => {
   c++;
   // console.log(`number of ${word} clicks ${c}`);
   div.innerHTML = `
   <div class="${word}_count">
     >>> Number of clicks - ${c} <<<
   </div>
   `;
   const co1 = document.querySelector('.YES_count').innerText; 
   const co2 = document.querySelector('.NO_count').innerText; 
   console.log(co1);

   if(co1 > co2){
    divYes.style.background = 'blue';
    divNo.style.background = 'orange';
   }else if(co1 < co2){
    divNo.style.background = 'blue';
    divYes.style.background = 'yellow';
   }else{
    divNo.style.background = 'aqua';
    divYes.style.background = 'aqua';
   }
  });
};

clickerCountFunc(btn1, 'YES', divYes, 'count1');
clickerCountFunc(btn2, 'NO', divNo, 'count2');




