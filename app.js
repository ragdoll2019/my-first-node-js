'use strict'
const number = process.argv[2] || 0; // コマンドライン引数が指定されていればその値、そうでなければ0を変数 number に代入する
let sum = 0;
for (let i = 0; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);