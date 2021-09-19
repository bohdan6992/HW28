let simpleNumBool;
for (let i = 1; i < 10000; i++) {
  simpleNumBool = false;

  for (let j = 2; j < i; j++) {
    if (i % j != 0 && (i+1)%8 == 0 ){
      simpleNumBool = true;
    };
  };
  if (simpleNumBool) console.log( i+1 );
}