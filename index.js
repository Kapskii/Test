console.log("Hello world");

function makeNegative(num) {
  if (num > 0)
    return -num
  else {
    return num
  }
}


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
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
array3.forEach((elem) => result += elem)
console.log(result, 'result');


function arrayPlusArray(arr1, arr2) {
  const arr3 = [...arr1, ...arr2];
  let resoult = 0;
  for (let i = 0; i < arr3.length; i++) {
    resoult += arr3[i]
  }
  return resoult
}
console.log(arrayPlusArray(array1, array2))


//посчитать кол-во букв 'а' в строке
//на входе строка 'asdfasdfasdfasdfa' - результат 5

const stroka = 'asdfasdfasdfasdfa';
let summa = 0;
for (let i = 0; i < stroka.length; i++) {
  if (stroka[i] === 'a') summa += 1;
}
console.log(summa)



function reverseArray(n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.unshift(i)
  }
  return array;
}
console.log(reverseArray(10))


function solution(str, ending) {
  let reverseStr = [];
  let reverseEnding = [];

  for (let i = 0; i < str.length; i++) {
    reverseStr.unshift(str[i]);
  }
  for (let i = 0; i < ending.length; i++) {
    reverseEnding.unshift(ending[i]);
  }
  for (let i = 0; i < ending.length; i++) {
    if (reverseEnding[i] !== reverseStr[i]) {
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


function isPangram(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let regex = /\string/g;
  let lowercase = string.toLowerCase().replace(regex, "");
  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) {
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
  for (var i = 0; i < classPoints.length; i++) {
    classAvg += classPoints[i];
  }
  classAvg = classAvg / classPoints.length;
  return yourPoints > classAvg;
}


const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2);
}


function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}



const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property"

    }
  }
  return "No such contact"
}

console.log(lookUpProfile("Harry", "likes"));



function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}



function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");


function checkSign(num) {
  return (num === 0) ? "zero"
    : (num < 0) ? "negative"
      : "positive";
}

checkSign(10);



function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(5))


function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
};


function getMiddle(s) {
  let evenOdd = s.length % 2 === 0
  let minMid = s.charAt(s.length / 2 - 1)
  let mid = s.charAt(s.length / 2)

  return (evenOdd == true) ? minMid.concat(mid) : mid
}

function peopleWithAgeDrink(old) {
  switch (true) {
    case (old < 14):
      return "drink toddy";
    case (old < 18):
      return "drink coke";
    case (old < 21):
      return "drink beer";
    default:
      return "drink whisky";

  }
};
console.log(peopleWithAgeDrink(15))


function isTriangle(a, b, c) {

  if (a <= 0 || b <= 0 || c <= 0) {
    return false
  }
  const arr = [a, b, c].sort((a, b) => a - b);
  const summ = arr[0] + arr[1];

  return summ > arr[2]
}


console.log(isTriangle(3, 7, 10))



function fakeBin(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {

    if (x[i] <= 4) {
      result += "0";
    } else if (x[i] >= 5) {
      result += "1";
    }
  }
  console.log(result)
  return result;
}

fakeBin('353535353535')


function findAverage(array) {
  let summ = 0;
  if (array.length == 0) {
    return 0
  }
  for (i = 0; i < array.length; i++) {
    summ += array[i];
  }

  let average = summ / array.length
  return average
}


function isIsogram(str) {
  if (!str) {
    return true
  }
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j].toLowerCase() === str[i].toLowerCase()) {
        count++;
      }
      if (count > 1) {
        return false
      }
    }
  }
  return true
}

function f(x, cc) {
  let arr = [];
  for (let key in cc) {
    arr.push(cc[key])
  }

  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i]) {
      return (i === arr.length - 1)
        ? arr[0]
        : arr[i + 1]
    }
  }
}
console.log(f(5, { a: 3, b: 4, c: 5, d: 6 })); //6


function isPolindrom(str) {
  let newStr = '';
  const symbols = [',', ' ', '!', '-', '"',];
  for (let i = 0; i < str.length; i++) {
    let temp = true
    for (let j = 0; j < symbols.length; j++) {

      if (str[i] === symbols[j]) {
        temp = false
      }
    }
    if (temp === true) {
      newStr += str[i]
    }
    newStr = newStr.toLowerCase();
  }
  console.log(newStr, ' - newstr')
  let arrStr = [];
  for (i = 0; i < newStr.length; i++) {
    arrStr.push(newStr[i])
  }
  const str1 = arrStr.join('');
  let str2 = arrStr.reverse().join('');
  if (str1 === str2) {
    return true
  } else {
    return false
  }


}

console.log(isPolindrom('mama'), 'false') //false
console.log(isPolindrom('A man, a plan, a canal - Panama'), 'true') //true




function splitString(strS) {
  return strS.split([' ',])
}

splitString('A man of the year')


function upperCase(strA) {
  return strA.toUpperCase()
}
upperCase('A man of the year')


function findMultiples(integer, limit) {
  let multiples = [];
  for (let i = integer; i <= limit; i = i + integer) {
    multiples.push(i);
  }
  return multiples;
}

function getChar(c) {
  return String.fromCharCode(c)
}


function oddOrEven(array) {
  if (array.length === 0) {
    return "even"
  }
  let summ = 0;
  for (i = 0; i < array.length; i++) {
    summ += array[i];
  }
  return (summ % 2 === 0) ? 'even' : 'odd'
}
console.log(oddOrEven([1, 2, 3]))




function position(letter) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (i = 0; i < alphabet.length; i++) {
    if (letter.toUpperCase() === alphabet[i]) {
      return "Position of alphabet: " + (i + 1)
    }
  }
}



function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 400 === 0) return true
    if (year % 100 === 0) return false
    return true
  }
  return false
}



console.log(isLeapYear(1234))
console.log(isLeapYear(1984))
console.log(isLeapYear(2000))
console.log(isLeapYear(2010))
console.log(isLeapYear(2013))


function sumMul(n, m) {
  let summ = 0;
  if (n < m) {
    for (let i = n; i < m; i = i + n) {
      summ += i;
    }
  } else {
    return 'INVALID'
  }
  return summ
}

console.log(sumMul(2, 100))



function sumDigits(number) {
  let a = number.toString().replace('-', '');
  let summ = 0;
  for (let i = 0; i < a.length; i++) {
    summ += +a[i];
  }
  return summ
}


console.log(sumDigits(-65))


function consonantCount(str) {
  return str.split('').filter(i => /[aeiouy]/gi.test(i)).length
}

console.log(consonantCount('kajlafjeihgnveiwlkhsf'))


// const sum = (...args) => {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);


const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;


const HIGH_TEMPERATURESS = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURESS;


const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : l + l + w + w;
};


const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
}



const { today: { low: lowToday, high: highTodayy } } = LOCAL_FORECAST;


function noBoringZeros(n) {
  if (n === 0) return n
  while (n % 10 === 0) {
    n = n / 10;
  }
  return n
}



function powerOf4(n) {
  if (typeof n === 'number' && n !== 0) {
    while (n % 4 === 0) {
      n = n / 4;
      if (n === 1) return true
    }
    return (n === 1)
  } return false
}

function sum(matrix) {
  let result = 0;
  let n = matrix.length, diag1 = 0, diag2 = 0;
  for (let i = 0; i < n; i++)
    diag1 += matrix[i][i];
  console.log(diag1)
  for (let i = 0; i < n; i++)
    diag2 += matrix[i][n - i - 1]
  console.log(diag2)
  return diag1 + diag2

}


var capitals = function (word) {
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      arr.push(i);
    }
  }
  return arr
};


function divisors(integer) {
  let arr = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      arr.push(i)
    }
  }
  return arr.length ? arr : `${integer} is prime`
};


function groupByCommas(n) {
  return n.toLocaleString()
}


//Restrict Possible Usernames

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([a-z]+\d*|\d{2,})$/i;
let resul = userCheck.test(username);

//passwords that are greater than 5 characters long, and have two consecutive digits

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D\w*\d{2})/; // Change this line
let result1 = pwRegex.test(sampleWord);

//Reuse Patterns Using Capture Groups

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let resultt = reRegex.test(repeatNum);
repeatNum.match(reRegex)
console.log(repeatNum.match(reRegex))