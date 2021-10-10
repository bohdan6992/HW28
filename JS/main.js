const btn = document.querySelector('.search_btn');
const main = document.querySelector('.main');

const generateBoxes = () => {
  const text = document.querySelector('.input');
  const tempArr = text.value.split(' ')
  let tempStr = '';
  let longest = '';
  for(let i = 0; i < tempArr.length; i++){
    tempStr = `
    ${tempStr}
    <input class="out" placeholder='${tempArr[i]}'>`
    if (tempArr[i].length > longest.length){
      longest = tempArr[i];
    }
  };
  main.innerHTML = tempStr
  console.log(`The longest word: '${longest}'`);
};

btn.addEventListener('click', generateBoxes);
