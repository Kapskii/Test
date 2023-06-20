console.log("Hello world"); 

function makeNegative(num) {
    if (num > 0)
    return -num
   else {
    return num
    }
  }
  

  const array1 = [1,2,3];
  const array2 = [4,5,6];
  // 21


  //first variant
//   const array3 = [].concat(array1, array2);

//   let result = 0;
//   for (let i = 0; i < array3.length; i++) {
//         result += array3[i]
//   }
//   console.log(result, 'result');

// let result1 = 0;
// for (let i = 0; i < array1.length; i++) {
//     result1 += array1[i]
// }
// console.log(result1, 'rez1');
// let result2 = 0;
// for (let i = 0; i < array2.length; i++) {
//     result2 += array2[i]
// }
// console.log(result2 + result1, 'rez2');

  const array3 = [...array1, ...array2];



  let result = 0;
  array3.forEach((elem) => result+=elem)
  console.log(result, 'result');


  function arrayPlusArray(arr1, arr2) {
    const arr3 = [...arr1, ...arr2];
    let resoult = 0;
    for (let i = 0; i < arr3.length; i++){
      resoult += arr3[i]
    }
    return resoult
  }
console.log(arrayPlusArray(array1, array2))  


//посчитать кол-во букв 'а' в строке
//на входе строка 'asdfasdfasdfasdfa' - результат 5

const stroka = 'asdfasdfasdfasdfa';
let summa = 0;
for (let i = 0; i < stroka.length; i++){
if (stroka[i] === 'a') summa += 1;
}
console.log(summa)



function reverseArray(n) {
  let array = [];
  for (let i = 1; i <= n; i++){
    array.unshift(i)
  }
  return array;
}
console.log(reverseArray(10))


function solution(str, ending){
 let reverseStr = [];
 let reverseEnding = [];

 for (let i = 0; i < str.length; i++){
    reverseStr.unshift(str[i]);
 }
 for (let i = 0; i < ending.length; i++){
    reverseEnding.unshift(ending[i]);
 }
 for (let i = 0; i < ending.length; i++) {
    if (reverseEnding[i] !== reverseStr[i]){
        return false;
    } 
 }
 return true
 }


 const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside['glove box'];


function problem(x) {
  if (typeof x == 'number') {
    return x * 50 + 6
   } else {
     return "Error"
   }
  }


  function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
     let regex = /\string/g;
     let lowercase = string.toLowerCase().replace(regex, "");
       for(let i = 0; i < alphabet.length; i++){
       if(lowercase.indexOf(alphabet[i]) === -1){
         return false;
       }
      }
     
     return true;
   }



   function validatePIN(pin) {
    const length = pin.length; 
    
    
    if (length !== 4 && length !== 6) {
      return false
    }

  for (let i = 0; i < pin.length; i++) {
    if (pin[i] < '0' || pin[i] > '9') {
    
        return false;
      }  
    } 
    return true;
  }




  function multiplyAll(arr) {
    let product = 1;
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



  const myArray = [];
  let i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5)
console.log(myArray)


function betterThanAverage(classPoints, yourPoints) {
  var classAvg = 0;
    for (var i = 0; i < classPoints.length; i++){
      classAvg += classPoints[i]; 
    }
    classAvg = classAvg/classPoints.length; 
    return yourPoints > classAvg;
  }