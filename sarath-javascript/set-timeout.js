// setTimeout
// function x(){
//     var i=1;
//     setTimeout(()=>console.log(i),3000)
//     console.log("Hello")
// }
// x();

// set time out clousre
// function x(){
// // let has block scope so it creates new copy every time 
//   for( let i=1; i<=5;i++) {
//     setTimeout(()=>console.log(i),i*1000)
//   }
//     console.log("Hello")
// }
// x();

//use var by using closure
function x(){
      for( var i=1; i<=5;i++) {
        function close(x){
            setTimeout(()=>console.log(x),x*1000)  
        }
        close(i);
      }
    }
    x();