let score ='100';

if (score >= 80) {
  console.log(`${score}は80点以上なので合格です`)
}if (int <=79 && int >=50) {
  console.log(`${score}は50点以上なので惜しいです`);
}if (int <=49 && int >=30) {
  console.log(`${score}は30点以上なので残念です`);
}


// ifとforの処理
for (let i = 1; i<=30; i++){
  if (i % 3 ==0) {
    console.log ('crazy');
  }else{
    console.log(i);
  }
}

// 5の倍数と3の倍数の時にメッセージ
// それ以外は数字
// 1～100

for (let i = 1; i<=100; i++) {
  if( i % 3 == 0 || i % 5 == 0) {
    console.log('crazy');
  } else {
    console.log(i);
  }
}