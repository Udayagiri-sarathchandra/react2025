// callback functions in setTimeout
setTimeout(function () {
    console.log("timer")
}, 3000);

function x(callbackFun){
    console.log("x function")
    callbackFun();
}

x(function (){
    console.log("y function")
})

// callback functions in eventListeners
// document.getElementById("clickme").addEventListener("click", function(){
//     console.log("button clicked")
// })

// callback functions in closures
function attachEvent(){
    let count=0
    document.getElementById("clickme").addEventListener("click", function(){
        console.log("button clicked", count++)
    })
} 
attachEvent();


console.log("1️⃣ Start");

// Macrotask (setTimeout)
setTimeout(() => console.log("5️⃣ Macrotask: setTimeout"), 0);

// Microtasks (Promise.then)
Promise.resolve().then(() => console.log("3️⃣ Microtask: Promise.then"));
Promise.resolve().then(() => console.log("4️⃣ Microtask: Promise.then 2"));

console.log("2️⃣ End");
