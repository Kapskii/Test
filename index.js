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

