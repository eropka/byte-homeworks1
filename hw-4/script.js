// Задание 1.1

let number;

function sum(a, b){
   return a + b;
}

number = sum(2, 3);
console.log('result sum', number);

number = sum(13, 14);
console.log('result sum', number);

// Задание 1.2

let sum2 = (a, b) => a + b;

let number2 = sum2(2, 4);
console.log('result sum2', number2);

// let number2 = sum2(11, 32);
// console.log('result sum2', number2);

let number3 = sum2(7, 13);
console.log('result sum2', number3);

// Задание 2

function greeting(age, name) {
   name = prompt('What is your name?');
   age = Number(prompt('how old are you?'))

   if (age < 30) {
      alert('Привет, ' + name);
   } else іf (age > 30) {
      alert('Здраствуйте, ' + name);
   } 
}

greeting()


// Задание 3

function powerOfNumber(number1, number2 = 2){
   number1 = prompt('Введите число:');
   number2 = prompt('Введите желаемую стпень числа:');

   if (number1 === Number && number2 ===Number){
      let result = number1 ** number2;
      alert(result);
   } else {
      alert('Введены неправельные данные =(')
   }
   
}

powerOfNumber()
