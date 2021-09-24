// Задание 1

const getNumberFromBoolean = (arr) => {
   let numberFromBoolean;
   let sumTrue = 0;
   for (let number of arr){
      if(number === true){
         number = 1;
         sumTrue += number;
      } else {
         number = 0;
      }
   }

   return numberFromBoolean = sumTrue;
}

const countTrue = getNumberFromBoolean([true, false, false, true, false, true]);
console.log(countTrue);

// Задание 2

const getOccurrencesCount = (arr) => {
   let sumOccurrencesCount = {};

   for (let key of arr) {
      if (key in sumOccurrencesCount){
         sumOccurrencesCount[key] += 1;
      } else {
         sumOccurrencesCount[key] = 1;
      }
   }

   return sumOccurrencesCount;
}

const varOccurrencesCount = getOccurrencesCount([
   "apples",
   "oranges",
   "pears",
   "pears",
   "apples",
   "oranges",
   "oranges",
   "pears",
   ]);
console.log(varOccurrencesCount);

// Задание 3

const findExcess = (arr) => {

   let integerN =[];

   
   let numInt = [];
   let numNoInt = [];

   for (let i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0){
         numNoInt.push(arr[i]);
      } else {
         numInt.push(arr[i]);
      }
   }

   if(numInt.length > numNoInt.length){
      integerN = numNoInt;
   } else {
      integerN = numInt;
   }

   return integerN[0];
}

const integerNumber = findExcess([1, 3, 5, 6]);
console.log(integerNumber)