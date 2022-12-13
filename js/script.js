// First task
let arr = ["455", 87.15, true, undefined, 7, null, "false", [], {}];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], typeof arr[i]);
  if(typeof arr[i] === 'number'){
    arr[i] +=3
  }
}
console.log(arr);

//Second task

let number = +prompt("Введите целое число от 1 до 10");
let rund;
let array = [];
while (number > 10) {
  number = +prompt("Повторите попытку число от 1 до 10");
}
for (let i = 0; i < number; i++) {
  array.push(Math.floor(Math.random() * 10));
}
console.log(array);
let arrayCopy = Object.assign([], array);
for (let i = 0; i < arrayCopy.length; i++) {
  if ((i + 1) % 3 === 0) {
    arrayCopy[i] *= 3;
  }
}
console.log(arrayCopy);
//Third task

const student1 = {
  firstName: "Lena",
  lastName: "Ivanova",
  mark: 12,
};
console.log(student1.mark);
const student2 = { ...student1, age: 22 };
student2.mark = 8;
console.log(student2.mark);
const student3 = Object.assign({}, student1);
student3.mark = 10;
console.log(student3.mark);
let middleMark = (student1.mark + student2.mark + student3.mark) / 3;
console.log(middleMark);

let num = 1;
for (let i = 0; i < 3; i++) {
  if (num == 1) {
    for (let key in student1) {
      console.log(key, student1[key]);
      num += 1;
    }
  }
}
