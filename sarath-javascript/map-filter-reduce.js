const array = [8, 11, 3, 4, 5, 6, 1, 2, 1, 1];
console.log([...Array(array.length).keys()].slice(3));
// map is used when we need new array
// double the array
const result = array.map((x) => x * 2);
console.log(result);
//  array of odd numbers
// function isOdd (x){
//     return x % 2;
// }
// const output = array.filter(isOdd);
const isodd = array.filter((x) => x % 2);
const iseven = array.filter((x) => x % 2 === 0);
const greaterThan4 = array.filter((x) => x > 4);
const prime = array.filter(
  (num) =>
    num > 1 && [...Array(num).keys()].slice(2).every((i) => num % i !== 0)
);
console.log(isodd);
console.log(iseven);
console.log(greaterThan4);
console.log(prime);
// sum of all the numbers
function issum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(issum(array));

console.log(array.reduce((acc, val) => acc + val, 0));

console.log(array.reduce((acc, curr) => (acc < curr ? acc : curr)));

function isMax(array) {
  return array.reduce((max, curr) => {
    if (max < curr) {
      max = curr;
    }
    return max;
  }, 0);
}
console.log(isMax(array));

const isMax2 = (array) =>
  array.reduce((max, curr) => {
    if (max < curr) {
      max = curr;
    }
    return max;
  }, 0);

console.log(isMax2(array));

//  const isMax3 = array.reduce(function(max,curr){

//  },0)

const users = [
  { firstName: "yogini", lastName: "simply", age: 27 },
  { firstName: "sarath", lastName: "angry", age: 30 },
  { firstName: "mounika", lastName: "rabbit", age: 24 },
];
//map.................
const fullName = users.map((name) => `${name.firstName} ${name.lastName}`);
//['yogini simply', 'sarath angry', 'mounika rabbit']
console.log(fullName);
//reduce...................
const countAge = users.reduce((acc, curr) => {
  let countAges =curr.age
  acc[countAges] ? (acc[countAges] = ++acc[countAges]) : (acc[countAges] = 1);
  return acc;
}, {});
console.log(countAge); //  {27:1, 30:1 ,24:1}

const candBelow30 = users.filter((cand) => cand.age < 30).map((nam) => nam.firstName);
console.log(candBelow30);

const below30 = users.reduce((acc, curr) => { curr.age < 30 ? acc.push(curr.firstName): []; return acc;},[]);
console.log(below30);
