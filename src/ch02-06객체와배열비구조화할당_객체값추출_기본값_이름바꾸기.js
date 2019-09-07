//ch02-06객체와배열비구조화할당_객체값추출_기본값_이름바꾸기.js
//객체 값 추출
const object = { a: 1, b: 2 };
let { a, b } = object;
console.log(a);
console.log(b);
//비구조화 문법은 함수의 파라미터 설정에도 사용가능
function print({ a, b }) {
  console.log(a);
  console.log(b);
}

print(object);
//print();

//b가 없는 경우 기본값 설정
const object2 = { a: 1 };
function print2({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}
print2(object2);

//비구조화할당을 사용하는 예시
const obj = { v1: 'vv1' };
const { v1, v2 = 'vv2' } = obj;
console.log(obj);
console.log(v1);
console.log(v2);

//비구조화할당시 이름을 바꾸는 방법
const animal = {
  name: '냥냥이',
  type: '고양이'
};
const nickname = animal.name;
console.log(nickname);

//{원래이름:새이름} = 객체
//객체 속성의 변수 원래이름이 새 이름으로 바뀌지는 않는다.
const { name: nickname2 } = animal;
console.log(nickname2);
console.log(animal);

//배열비구조화 할당
const array = [1, 2];
const one = array[0];
const two = array[1];
console.log(one);
console.log(two);
//값을 밖으로 꺼내기 위해서 비구조화할당을 사용한다.
const [one1, two2] = array;
console.log(one1);
console.log(two2);

//객체의 깊숙한 곳에 있는 값을 가져오기
const deepObject = {
  status: {
    info: {
      name: '객체명',
      location: ['서울', '대전', '부산']
    }
  },
  value: 5
};
//name과 location과 value를 꺼내는 방법
//1. 비구조화할당문법을 두 번 사용
const { name, location } = deepObject.status.info;
const { value } = deepObject;
let extracted = { name, location, value };
console.log(extracted);

//2. 비구조화 할당을 한 번만 사용.
/*
const {
  status: {
    info: { name, location }
  },
  value
} = deepObject;
let extracted = { name, location, value };
console.log(extracted);
*/
/*
const { name, location:[first,second] } = deepObject.status.info;
const { value } = deepObject;
let extracted = { name, first, second, value };
console.log(extracted);
*/
