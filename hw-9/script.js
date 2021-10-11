// Задание 1

const filterData = (arr, obj) => {
   const result = [];
   arr.map(function(arr) {
      return Object.keys(arr).filter(function(key) {
         if(key === obj){
            return result.push(key);
         }
      });
   });

   return result;
}

const data = [
   {
     name: "John",
     age: 24,
     position: "senior",
     isActive: false,
   },
   {
     name: "Peter",
     age: 33,
     position: "middle",
     isActive: false,
   },
   {
     name: "Sam",
     age: 29,
     position: "junior",
     isActive: true,
   },
   {
     name: "Mary",
     age: 24,
     position: "middle",
     isActive: false,
   },
   {
     name: "Steve",
     age: 23,
     position: "middle",
     isActive: true,
   },
   {
     name: "Kate",
     age: 31,
     position: "middle",
     isActive: false,
   },
   {
     name: "Sally",
     age: 19,
     position: "junior",
     isActive: false,
   },
   {
     name: "Jack",
     age: 19,
     position: "middle",
     isActive: true,
   },
 ];

const userData = filterData(data, {age: 19});
console.log(userData)


// Задание 2
// ForEach
const logger = (element, index, arr) => {
   console.log(`In array [${arr}] on position ${index}: ${element}`);
};
const isNegative = (number) => number < 0;

const increment = (number) => number += 1;


const ownForEach = (arr, callback) => {
   for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
   }
}

const numbers = [1, 2, 3, -1, -2];
ownForEach(numbers, logger);
// numbers.forEach(number =>{
//    console.log(number < 0)
// });


// Map

const ownMap = (arr, callback) => {
   let result = [];
   for (i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
   }

   return result;
};

let testMap = ownMap(numbers, increment);
console.log(testMap);

// Filter

const ownFilter = (arr, callback) => {
   let result = [];
   for(i = 0; i < arr.length; i++){
      if(callback(arr[i], i, arr)){
         result.push(arr[i]);
      }
   }

   return result;
}

let testFilter = ownFilter(numbers, isNegative);
console.log(testFilter);



