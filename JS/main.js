const arr1 = [];
const arr2 = [];
let limit = 5;

do {
  let num1 = parseInt(prompt('Enter first number, please'));
  let num2 = parseInt(prompt('Enter second number, please'));

  let sum = num1 + num2;
  
  if (sum %2 == 0){
    arr1.push(sum);
  }else{
    arr2.push(sum);
  }

} while (arr1.length > 0 && arr1.length < limit || arr2.length > 0 && arr2.length < limit);

if (arr1.length > arr2.length){
  alert(`First array win!!! Array numbers:[${arr1}]`)
}else{
  alert(`Second array win!!! Array numbers:[${arr2}]`)
}
