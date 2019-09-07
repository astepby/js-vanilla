//ch02-02_Truthy and Falsy
function print(person) {
  console.log(person.name);
}

function print2(person) {
  if (person === undefined) {
    return;
  }
  console.log(person.name);
}

//null checking
function print3(person) {
  if (person === undefined || person === null) {
    return;
  }
  console.log(person.name);
}

//null checking by using falsy
function print4(person) {
  if (!person) {
    return;
  }
  console.log(person.name);
}

const person = {
  name: "Terry"
};

print(person);
print2(1);
print3(null);
print4(null);

//falsy 5가지
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!"");
console.log(!NaN);
console.log(!(1 / "asdf"));

//truthy는 나머지
console.log(!1);
console.log(!"hello");
console.log(![]);
console.log(!{});
console.log(![1, 2, 3]);

let value = { p: 1 };
value = null;
//value가 존재하면
if (value) {
  console.log("value는 Truthy합니다..");
}

value = {};
let status = value ? true : false;
console.log(status);

//삼항연산자 필요없음. Truthy인지 Falsy인지 뽑아내는 방법
status = !!value;
console.log(status);


