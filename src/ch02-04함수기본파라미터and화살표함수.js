//ch02-04함수기본파라미터and화살표함수.js
function circArea(r = 1) {
  return Math.PI * r * r;
}
const area = circArea();
console.log(area);

const circArea2 = (r = 1) => Math.PI * r * r;
const area2 = circArea2();
console.log(area2);
