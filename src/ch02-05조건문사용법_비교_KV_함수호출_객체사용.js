//ch02-05조건문사용법_비교_KV_함수호출_객체사용.js
function isAnimal(text) {
  return text === '고양이' || text === '개' || text === '다람쥐';
}
console.log(isAnimal('고양이'));
console.log(isAnimal('노트북'));

//비교하고 싶은 것을 배열로 만든다.
function isAnimal2(text) {
  const animals = ['고양이', '개', '다람쥐'];
  return animals.includes(text);
}
console.log(isAnimal2('고양이'));
console.log(isAnimal2('노트북'));

//
//화살표함수 적용결과
const isAnimal3 = text => ['고양이', '개', '다람쥐'].includes(text);
console.log(isAnimal2('고양이'));
console.log(isAnimal2('노트북'));

//주어진 값에 따라 다른 값을 반환하는 경우
function getSound(animal) {
  if (animal === '고양이') return '야옹';
  if (animal === '강아지') return '멍멍';
  if (animal === '비둘기') return '구구';
  return '...???';
}
console.log(getSound('다람쥐'));

//key-value 형태로 만들어준다.
function getSound2(animal) {
  const sounds = {
    고양이: '야옹',
    강아지: '멍멍',
    비둘기: '구구'
  };
  return sounds[animal] || '...?';
}
console.log(getSound2('다람쥐'));
console.log(getSound2());
console.log(getSound2('고양이'));

//주어진 값에 따라 다른 함수를 호출하는 경우
function makeSound(animal) {
  const tasks = {
    고양이() {
      console.log('야옹~');
    },
    강아지: () => {
      console.log('멍멍~');
    },
    비둘기: function() {
      console.log('구구~');
    }
  };

  //tasks[animal]이 없는 경우
  if (!tasks[animal]) {
    console.log('...?????');
    return;
  }
  tasks[animal]();
}
makeSound('고양이');
makeSound('비둘기');
makeSound('');

//개선된 코드
function makeSound2(animal) {
  const tasks = {
    고양이() {
      console.log('야옹~');
    },
    강아지: () => {
      console.log('멍멍~');
    },
    비둘기: function() {
      console.log('구구~');
    }
  };
  //tasks[animal]이 중복되므로 task를 선언해서 사용
  const task = tasks[animal];
  if (!task) {
    console.log('...?????');
    return;
  }
  task();
}
makeSound('고양이');
makeSound('비둘기');
makeSound('');
