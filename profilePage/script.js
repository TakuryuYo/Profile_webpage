'use strict';

//const bmi = window.prompt('BMIの値を入力してください');
const bmi = 12;
//idによる場所指定の場合
//const p_element = document.getElementById('message');
const p_element = document.querySelector('p');
console.log(`あなたのBMIは${bmi}：`);

if (bmi > 25) {
  p_element.textContent = '肥満です';
} else if (bmi < 18.5) {
  p_element.textContent = '低体重です';
} else {
  p_element.textContent = '適正体重です';
}
let str2;
if(bmi % 2 == 0){
    str2= 'even';
}  else{
    str2 ="odd";
}
console.log(`${bmi}は${str2}です`);

for (let num = 1; num <= 20; num += 1) {
    let str;
   
    if (num % 2 == 0) {
      str = '偶数';
    } else {
      str = '奇数';
    }
    console.log(`${num}は${str}です`);
  }
  for (const servant of ['犬', '猿', '雉']) {
    for (let n = 1; n <= 3; n += 1) {
      console.log(`${servant}${n}号！`);
    }
  }
const element = document.createElement('p');
element.textContent = 'Created Hello World!!';
document.body.appendChild(element);
console.log(element);

const ul = document.getElementById('list');
for (let i = 0; i < 5; i += 1) {
    const li = document.createElement('li');
    li.textContent = `子要素${i}号`;
    ul.appendChild(li);

  }
