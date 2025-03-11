// Higher order functions......
const radius = [1,2,3,4,5]

// const calculateArea =(radius) => {
//     const output = [];
//     for(let i=0; i< radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output;
// }

// const calculateCircumference =(radius) => {
//     const output = [];
//     for(let i=0; i< radius.length; i++){
//         output.push(2*Math.PI * radius[i])
//     }
//     return output;
// }

// const calculateDiameter =(radius) => {
//     const output = [];
//     for(let i=0; i< radius.length; i++){
//         output.push(2*radius[i])
//     }
//     return output;
// }

// console.log(calculateArea(radius));
// console.log(calculateCircumference(radius));
// console.log(calculateDiameter(radius));
// optimized code
const area = (radius) => Math.PI * radius * radius
const circumference =(radius) => 2*Math.PI * radius
const diameter = (radius) => 2*radius
// const calculate =(radius,logic) => {
//     const output = [];
//     for(let i=0; i< radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output;
// }
Array.prototype.calculate =(logic) => {
    const output = [];
    for(let i=0; i< this.length; i++){
        output.push(logic(this[i]))
    }
    return output;
}
console.log(radius.map(area))
console.log(radius.map(circumference))
console.log(radius.map(diameter))
console.log(radius.calculate(area))
// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));
// const result = radius.map((radius) => Math.PI * radius * radius);
// console.log(result)