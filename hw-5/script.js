// Задание 1

const LOGIN = 'ADMIN';
const PASSWORD = 'q1w2e3';

const authorize = () => {
   let userPassword;
   let userLogin;
   let isAuthSuccess = false;
   let i;

   do {
      for(i = 1; i < 4; i++){
         userLogin = prompt('Логин: ')
         if (!userLogin) {
            alert('Введите логин!');
            continue;
         }
   
         userPassword = prompt('Парол: ')
         if (!userPassword) {
            alert('Введите пароль!');
            continue;
         }
   
         if(userPassword === PASSWORD || userLogin === LOGIN){
            isAuthSuccess = true;
         } else {
            alert(`Данные не верны! Осталось попыток: ${3 - i}`);
            continue
         }
         break
      }
      break
   } while (!isAuthSuccess);

   
   if(isAuthSuccess){
      alert('Welcome!')
   } else {
      alert('Пользователь не вторизован!')
   }
}

authorize()



// Задание 2

let number1;
let number2;

number1 = Number(prompt('Введите первое число:'));
number2 = Number(prompt('Введите второе число:'));


primeNumber:
for(let i = number1; i <= number2; i++){
   for(let j = 2; j < i; j++){
      if(i % j == 0) continue primeNumber;
   }
   alert(i)
}


