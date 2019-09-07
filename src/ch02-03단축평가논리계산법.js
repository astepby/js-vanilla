//ch02-03단축평가논리계산법.js
//논리 연산자를 이용한 코드 압축

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true || false);

console.log(!!3 && !!0);

const dog = {
  name: 'Terry'
};

function getName(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}

console.log(getName(dog));
let name = getName();
console.log(name);

function getName2(animal) {
  return animal && animal.name;
}

let name2 = getName();
name2 = getName(dog);
console.log(name2);

//어떤 값이 대체로 Truthy할 때 && 연산자를 사용한다.
//출력결과 <- Truthy && 출력결과: 오른쪽 것
//Falsy <- Falsy && Anything
console.log(true && 'hello');
console.log(false && '이건 안나옴');
console.log('오른쪽게나옴' && '왼쪽이 Truthy하니까 오른쪽이 나오지');
console.log(null && '왼쪽이 Falsy하니까 왼쪽이 나오지');
console.log(undefined && '왼쪽이 Falsy하니까 왼쪽이 나오지');
console.log('' && '왼쪽이 Falsy하니까 왼쪽이 나오지');
console.log(0 && '왼쪽이 Falsy하니까 왼쪽이 나오지');

let object = { name: 'Objecty' };
let objname = object;
console.log(objname);

object = null;
//에러발생
//objname = object.name
console.log(objname);

//에러해결
objname = object && object.name;
console.log(objname);

//어떤 값이 대체로 Falsy할 때, 없을 때 || 연산자를 사용해서 대체한다.
console.log(false || '왼쪽에 falsy ||를 사용하면 오른쪽 결과가 나온다.');
console.log('참값은 무조건 왼쪽거' || 'Anything ');
const namelessDog = {
  name: ''
};

function getName3(animal) {
  const name = animal && animal.name;
  if (!name) {
    return '이름이 없는 동물입니다.';
  }
  return name;
}
namelessDog.name = '멈멍이';
namelessDog.name = '';
console.log(getName3(namelessDog));

//개선된 getName4
function getName4(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.';
}
namelessDog.name = '멈멍이';
namelessDog.name = '';
console.log(getName4(namelessDog));
