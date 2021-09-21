//задание 1

function userData() {
   let userName;
   let userSurname;
   let userPass;
   do {
      userName = prompt('Имя');
   } while (userName === '' || userName === null);
   
   do {
      userSurname = prompt('Фамилия');
   } while (userSurname === '' || userSurname === null);
   
   do {
      let i=0;
      let char='';

      do{
         userPassword = prompt('Пароль');
         
         if (userPassword.length > 5){
            userPassword === true;
         } else {
            alert('Пароль слишком короткий');
            userPassword === false;
         }

         while (i <= userPassword.length){
            char = userPassword.charAt(i);
            if (!isNaN(char)){
               alert('char is numeric');
            }else{
               if (char == char.toUpperCase()) {
                     alert ('upper case true');
               }
               if (char == char.toLowerCase()){
                     alert ('lower case true');
               }
            }
            i++;
         }
      } while(userPassword.length <= 5 )

      
   
   } while (userPassword === '' || userPassword === false);

   return  alert(`${userName[0].toUpperCase() + userName.slice(1)} ${userSurname[0].toUpperCase() + userSurname.slice(1)}`)
}

userData()

// Задание 2

let randomInteger = (firstNumber, secondNumber) => {
   firstNumber = Number(prompt('Введите первое число'));
   secondNumber = Number(prompt('Введите второе число'));
   let randomNumber = firstNumber + Math.random() * ( secondNumber + 1 - firstNumber );
   return alert(`Случайное число от ${ firstNumber } до ${ secondNumber }: ${ Math.floor(randomNumber) }`);
}

   // randomInteger();




