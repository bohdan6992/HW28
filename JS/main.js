const btnLeft = document.querySelector('.left')
const btnRight = document.querySelector('.right')
const btnBack = document.querySelector('.back')
const btnForward = document.querySelector('.forward')
const box = document.querySelector('.box')


btnLeft.addEventListener('mousedown', () => {
  box.classList.toggle('moveLeft')
});
btnLeft.addEventListener('mouseup', () => {
  box.classList.remove('moveLeft')
});

btnRight.addEventListener('mousedown', () => {
  box.classList.toggle('moveRight')
});
btnRight.addEventListener('mouseup', () => {
  box.classList.remove('moveRight')
});

btnBack.addEventListener('mousedown', () => {
  box.classList.toggle('moveBack')
});
btnBack.addEventListener('mouseup', () => {
  box.classList.remove('moveBack')
});

btnForward.addEventListener('mousedown', () => {
  box.classList.toggle('moveForward')
});
btnForward.addEventListener('mouseup', () => {
  box.classList.remove('moveForward')
});


document.addEventListener('keydown', (event) => {
  if (event.key === ' '){
    box.classList.add('magnif')
  }
});
document.addEventListener('keyup', (event) => {
  if (event.key === ' '){
    box.classList.remove('magnif')
  }
});

const keyClickFunc = (key1, key2, way) => {
  document.addEventListener('keydown', (event) => {
    if (event.key === `${key1}`|| event.code === `${key2}`){
      box.classList.toggle(`${way}`)
    };
  });
  document.addEventListener('keyup', (event) => {
    if (event.key === `${key1}`|| event.code === `${key2}`){
      box.classList.remove(`${way}`)
    }
  });
};

keyClickFunc('w', 'ArrowUp', 'moveForward');
keyClickFunc('s', 'ArrowDown', 'moveBack');
keyClickFunc('a', 'ArrowLeft', 'moveLeft');
keyClickFunc('d', 'ArrowRight', 'moveRight');




