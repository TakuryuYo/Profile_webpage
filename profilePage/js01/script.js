'use strict';

const weight = 50;
const height = 1.55;
console.log('体重' + weight + 'kg／身長' + height * 100 + 'cmのBMI：');
console.log(weight / (height * height)); // → 20.20..
let who = 'World!!';
console.log('Hello ' + who);
who = "everyone!!";
console.log('Good Morning! ' + who);


let x = 10;  // 初期値ありの変数宣言（推奨）
let y;       // 初期値なしの変数宣言
// 中略
y = 20;      // あとで代入
console.log(y)