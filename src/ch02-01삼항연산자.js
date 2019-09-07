//ch02-01 삼항연산자
//condition ? true : false
let array = [];
array = [1, 2, 3];
let text = "";
if (array.length === 0) {
  text = "배열이 비어있습니다.";
} else {
  text = "배열이 비어있지 않습니다.";
}
console.log(text);

let mytext =
  array.length === 0 ? "배열이 비어있습니다." : "배열이 비어있지 않습니다.";
console.log(mytext);

const condition1 = false;
const condition2 = false;
const mycondition = condition1
  ? "실행안됨"
  : condition2
  ? "역시 실행안됨"
  : "실행됨";

console.log(mycondition);
