
// //___________________1_____________________________
// const arr1 = [56, 6, 3, 88, 23, -11];


// const castlingItems = (arrIndex1, arrIndex2) => {
//   let limit = arr1.length;
//   const arr2 = [];
//   console.log(`Inlet array: [${arr1}]`);

//   for (let i=0; i<limit; i++){
//     arr2[i] = arr1[i];
//   }

//   if (arrIndex1 < limit && arrIndex2 < limit){
//     arr2[arrIndex1] = arr1[arrIndex2];
//     arr2[arrIndex2] = arr1[arrIndex1];
//     console.log(`Resultative array: [${arr2}]`);
//   }
//   else{
//     console.log(`Sorry, but the indexes are outside the array`);
//   }
// };

// castlingItems(4, 3);


// //___________________2_____________________________
// const arr1 = [56, 6, 3, 88, 23, -11];

// const shiftItem = (arrIndex, direction) => {
//   let limit = arr1.length;
//   console.log(`Inlet array: [${arr1}]`);
//   const arr2 = [];

//   for (let i = 0; i < limit; i++){
//     arr2[i] = arr1[i];
    
//   }

//   if (direction == 'right' && arrIndex < limit - 1){
//     arr2[arrIndex + 1] = arr1[arrIndex];
//     arr2[arrIndex] = arr1[arrIndex + 1];
//     console.log(`Resultative array: [${arr2}]`);
//   }
//   if (direction == 'left' && arrIndex < limit - 1 && arrIndex > 0){
//     arr2[arrIndex] = arr1[arrIndex + 1];
//     arr2[arrIndex + 1] = arr1[arrIndex];
//     console.log(`Resultative array: [${arr2}]`);
//   }
//   if (arrIndex > limit){
//     console.log(`Sorry, but the index ${arrIndex} is outside the array`);
//   }
//   if (direction != 'right' && direction != 'left'){
//     console.log(`Sorry, but you can only select "right" or "left"`);
//   }
// };

// shiftItem(2, 'left');

