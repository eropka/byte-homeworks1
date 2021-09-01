//Задание №1

let number1;
let number2;

number1 = Number(prompt("Введите первое число:"));

number2 = Number(prompt("Введите второе число:"));

if (number1 > number2){
   alert('Первое число больше второго');
} else if (number1 < number2) {
   alert('Второе число больше первого');
} else {
   alert('Числа равны');
}

// Задание 2

let numberOne;
let numberTwo;
let mathActive;
let result;

numberOne = Number(prompt("Введите первое число:"));
numberTwo = Number(prompt("Введите второе число:"));
mathActive = prompt("Введите математическое действие:");

switch (mathActive) {
   case "+":
      alert(numberOne + numberTwo);
      break;
   case "-":
      alert(numberOne - numberTwo);
      break;
   case "/":
      alert(numberOne / numberTwo);
      break;
   case "*":
      alert(numberOne * numberTwo);
      break;
   default: alert('Введены не правельные данные!');      
}



// Задание 3

let visitor;
visitor = Number(prompt('Сколько вам лет?'))

if ((visitor >= 12 && visitor < 18) || (visitor >= 60 && visitor <=80)){
   let permission;
   permission = confirm('Есть ли у вас разрешение от взрослых?');
   switch (permission){
      case (true):
         alert('доступ разрешен =)');
         break;
      default:
         alert('доступ запрещен =(');
   }
} else if (visitor < 12 || visitor > 80) {
   alert('Доступ запрещен =(');
} else if (visitor >= 18 && visitor < 60){
   alert('Доступ разрешен =)');
} else {
   alert('Введены неправельные данные =(')
}




