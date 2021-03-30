function getCookingTime(eggsAmount) {
  var result = 5;
  var capacity = Math.ceil(eggsAmount / 5);
  result = capacity === 1 ? result : (result *= capacity);
  return result;
}
//console.log(getCookingTime (26))

function getNumber(arr) {
  var result = 0;
  var oddEl = 0;
  var evenEl = 0;
  var oddElArr = 0;
  var evenElArr = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddElArr = arr[i];
      oddEl++;
    } else if (arr[i] % 2 === 0) {
      evenEl++;
      evenElArr = arr[i];
    }
    result = oddEl < evenEl ? oddElArr : evenElArr;
  }
  return result;
}

// console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])); //returns 13
// console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])) //returns 4

let arr = [
  {
    title: "Some title1",
  },
  {
    title: "I like JS",
  },
  {
    user: "This obj doesn’t have key title js",
  },
  {
    title: "Js - is the best!",
  },
];

function findTitle(array, str) {
  var ar = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].hasOwnProperty("title")) {
      if (array[i].title.toLowerCase().indexOf(str)) {
        ar.push(array[i]);
      }
    }
  }
  return ar;
}
//console.log(findTitle(arr, "js")); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]

function countCharacters(str) {
  str = str.toLowerCase();
  let newObj = {};
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt() >= 97 && str.charCodeAt() <= 122) {
      newObj[str[i]] = newObj[str[i]] ? newObj[str[i]] + 1 : 1;
    }
  }

  return newObj;
}


// работает,но не берет (999,88 и тд)
function getNextPalindrome(number) {
  var number = number.toString();
  number2 = number.split("").reverse().join("");
  if (Number(number) !== Number(number2)) {
    number++;
    getNextPalindrome(number);
  }
 
  return Number(number2);
}

console.log(getNextPalindrome(974));
