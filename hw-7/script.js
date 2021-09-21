// Задание 1.
function getOrderDay() {
   let time;
   let task;
   let orderDay = {};

   do {
      time = prompt(`Напишитие время по примеру "00:00"`);
      task = prompt('Введите задачу, которую нужно записать на время');

      if (time === null || task === null) {
         break;
      }

      orderDay[time] = task;
   } while (true);

   return orderDay;
}

const orderDay = getOrderDay();

console.log(`orderDay`, orderDay)

// Задание 2.

const salaries = {
   John: "4300.00",
   Ann: "5700.40",
   Pete: "4900.95",
};

const salariesFunction = (salariesEmployee) => {
   let sumSalariesEmployee = 0;

   for(let key in salariesEmployee){
      sumSalariesEmployee += +(salariesEmployee[key]);      
   }
   return sumSalariesEmployee.toFixed(2);
}

let getSalariesEmployee = salariesFunction(salaries);
console.log(getSalariesEmployee);