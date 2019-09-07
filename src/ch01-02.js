//변수선언, 변수는 한번만 선언 가능하다. 다른 블록 내에서는 가능, hoisting
let value = 1;
value = 2;
console.log(value);

//상수선언
const c = 33;
//c=22
console.log(c);

//var변수 선언, 구형 브라우저에서는 let과 const가 동작하지 않음.
//바벨을 이용해서 구형브라우저에서도 동작하도록 변환
//똑간은 이름으로 다시 선언 가능.
//let과 동작하는 범위가 다름.
var v = 12;
var v = 13;
console.log(v);

let text = "test";
let name = "이름";
console.log(text + name);

//불리언선언
let truthy = true;
let falsy = false;
let nully = null; //존재하지 않음
let undefinny = undefined; //아직 정해지지 않음
console.log(truthy);
console.log(falsy);
console.log(nully);
console.log(undefinny);
