

const arr = [1, 8, -3, 4];
let limit = arr.length-1;

// //______________#1______________________+
// const task1 =(x) =>{
//   for (let i = 0; i <= 99; i++){
//     arr.push(0);
//   };
//   console.log(arr);
// }

// task1(arr);

// //______________#2______________________+
// const task2 =(arr) =>{
//   for (let i = 0; i < 99; i++){
//     if(!(arr[i] > 0)){
//       arr.push(0);
//     };
//   };
//   console.log(arr);
// };

// task2(arr);

// //______________#3______________________+
// const task3 =(arr) =>{
//   for (let i = 0; i <= 99; i++){
//     arr.unshift(0);
//   };
//   console.log(arr);
// }

// task3(arr);


// //______________#4______________________+
// const task4 =(arr) =>{
//   for (let i = 0; i < 99; i++){
//     if(!(arr[i] > 0)){
//       arr.unshift(0);
//     };
//   };

//   console.log(arr);
// };

// task4(arr);

// //______________#5______________________+
// const task5 =(arr) =>{
//   for (let i = 0; i <= limit; i++){
//     for (i=0; i < limit * 20; i++){
//       arr.push(arr[i]);
//     };
//   };
//   for (let i = 0; i <=limit; i++){
//     arr.shift();
//   };
//   console.log(arr);
// };

// task5(arr);

// //______________#6______________________+
// const task6 =(arr) =>{
//   for (let i = 0; i < 25; i++){
//     arr.splice(1, 0, 0);
//   };
//   console.log(arr);
// };

// task6(arr);

// //______________#7______________________+
// const task7 =(arr) =>{
//   var sum = 0;

//   for (var i = 0; i <=limit; i++){
//     sum += arr[i];
//   };

//   arr.push(sum);
//   console.log(arr);
// };

// task7(arr);


// //______________#8______________________+
// const task8 =(arr) =>{
//   var sumPositve = 0;
//   var sumNegative = 0;

//   for (var i = 0; i <=limit; i++){
//     if(arr[i] > 0){
//       sumPositve ++;
//     }else{
//     sumNegative ++;
//     };
//   };

//   arr.push(sumPositve);
//   arr.push(sumNegative);
  
//   console.log(arr);
// };

// task8(arr);



// //______________#9______________________+
// const task9 =(arr) =>{
//   var sumPositve = 0;
//   var sumNegative = 0;

//   for (let i = 0; i <=limit; i++){
//     arr.push(arr[i]*2);
//   };
//   for (let i = 0; i <=limit; i++){
//     arr.shift();
//   };
  
//   console.log(arr);
// };

// task9(arr);



// //______________#10______________________+
// const task10 = (arr) =>{
//   for (let i = 0; i <=limit; i++){
//     arr.push(arr[i]+3);
//   }
  
//   console.log(arr);
// };

// task10(arr);

// //______________#11______________________+
// const task11 = (arr) =>{
//   arr.push(arr[0]);
  
//   console.log(arr);
// };

// task11(arr);

// //______________#12______________________+
// const task12 = (arr) =>{
//   for (let i = 0; i < limit; i++){
//     arr.push(arr[i]+arr[limit]);
//   };
//   for (let i = 0; i < limit+1; i++){
//     arr.shift();
//   };
  
//   console.log(arr);
// };

// task12(arr);

