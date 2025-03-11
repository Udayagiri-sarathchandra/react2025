function rev(a){
 return a.split('').reverse().join('')
}
const ab = "happy new year";
const rev = (a)=> a.split('').reverse().join('')
console.log(rev(ab))

const array = [4,6,7,3,5,4,7,3,3]
const removeDup=(a)=> [...new Set(a)]
console.log(removeDup(array))

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7))
 
const flatten =(array)=>
    array.reduce((acc,val)=> acc.concat(Array.isArray(val)? flatten(val): val),[])
 console.log(flatten([1, [2, [3, 4], 5], 6]));
