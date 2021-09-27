

const arr = [1, 8, -3, 4];

let limit = arr.length-1;

// //______________#1______________________+
// for (let i = 0; i < 99; i++){
//   arr.push(0);
// }

// //______________#2______________________+
// for (let i = 0; i < 99; i++){
//   if(!(arr[i] > 0)){
//     arr.push(0);
//   };
// }

// //______________#3______________________+
// for (let i = 0; i < 99; i++){
//   arr.unshift(0);
// }

// //______________#4______________________+
// for (let i = 0; i <= 99; i++){
//   if(!(arr[i] > 0)){
//     arr.unshift(0);
//   };
// }

// //______________#5______________________+
// for (let i = 0; i <= limit; i++){
//   for (i=0; i < limit * 20; i++){
//     arr.push(arr[i]);
//   };
// }

// //______________#6______________________+
// for (let i = 0; i < 25; i++){
//   arr.splice(1, 0, 0);
// }

// //______________#7______________________+
// var sum = 0;

// for (var i = 0; i <=limit; i++){
//   sum += arr[i];
// }

// arr.push(sum);

// //______________#8______________________+
// var sumPositve = 0;
// var sumNegative = 0;

// for (var i = 0; i <=limit; i++){
//   if(arr[i] > 0){
//     sumPar ++;
//   }else{
//     sumOdd ++;
//   };
// }

// arr.push(sumPar);
// arr.push(sumOdd);

// //______________#9______________________+
// for (let i = 0; i <=limit; i++){
//   arr.push(arr[i]*2);
// }
// for (let i = 0; i <=limit; i++){
//   arr.shift();
// }

// //______________#10______________________+
// for (let i = 0; i <=limit; i++){
//   arr.push(arr[i]+3);
// }

// //______________#11______________________+
// arr.push(arr[0]);

// //______________#12______________________+
// for (let i = 0; i < limit; i++){
//   arr.push(arr[i]+arr[limit]);
// }
// for (let i = 0; i < limit+1; i++){
//   arr.shift();
// }


console.log(arr);

